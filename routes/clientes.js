var express = require('express');
var router = express.Router();
const mongoClient  = require('mongodb').MongoClient
require("dotenv").config()
const msgError = {estatus:false,mensaje:"Fallo la conexion a la BD o el servidor de Servicios Web se encuentra apagado"}
let client=null
/*  SistemaControlClientes       phNFEFlBguEoMdqb   */


router.get("/consultar",async function(req,res,next){
      console.log(req.query)   

      try{
            client = await mongoClient.connect(process.env.URL_DB723)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            var r = await col.aggregate([
                  {
                    '$set': {
                      'ocr': '$personales.ocr'
                    }
                  }
                ]).toArray()
            
            
            console.log(r)
            res.send({estatus:true,data:r});
        }catch{
            res.send(msgError)
        }
      
})


router.post('/newID',async function(req, res, next) {
      res.setHeader()
        try{
            client = await mongoClient.connect(process.env.URL_DB723)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            var r = await col.countDocuments()+1
            res.send({estatus:true,datos:r});
        }catch(err){
            res.send({estatus:true,datos:err});
        }
});

router.post('/nuevo', async function(req, res, next){
      let _data = req.body
      try{
            _data.domicilio = JSON.parse(_data.domicilio)
            _data.personales = JSON.parse(_data.personales)
            client = await mongoClient.connect(process.env.URL_DB723)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            _data['_id'] = await col.countDocuments()+1
            let r = await col.insertOne(_data)
            res.send({estatus:true,mensaje:"Cliente agregado satisfactoriamente"})
      }catch(errMsg){
            console.log(errMsg)
            res.send(msgError)
      }
})


router.get('/buscar/:nombre', async function(req, res, next){
      let cliente = req.params.nombre      
      try{            
            client = await mongoClient.connect(process.env.URL_DB723)
            var _db = client.db("db723")
            var col = _db.collection("clientes")
            const agg = [
                  {$search: {index: "idx_Clientees", text: {query:cliente, path: {wildcard:"*"} }}},
                  {$limit: 20},
                  {$project: {_id: 0,personales:1,domicilio:1}}
              ];
              // run pipeline
              const result = await col.aggregate(agg);
              if(result=== undefined) res.send({estatus:false,mensaje:"Cliente no encontrado."})   
              else{
              datos=[]
              await result.forEach((doc) => datos.push(doc));
            res.send({estatus:true,datos:datos,mensaje:`Se encontraron coincidencias con su busqueda`})
              }
     
            }catch(err){
            console.log(err)
            res.send(msgError)
      }
})



module.exports = router;