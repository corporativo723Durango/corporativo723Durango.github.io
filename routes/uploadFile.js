var express = require('express');
var formidable = require("formidable")
var fs = require("fs")
const { exec } = require('child_process');
var router = express.Router();

/* GET home page. */
router.post('/:cliente', function(req, res, next) {
  let cliente = req.params.ID
  let nom = req.params.clientes.split(",")
  
  var form = new formidable.IncomingForm();
 console.log(req)
    
  form.parse(req, function (err, fields, files) {
    let a = files.misFiles
    a.forEach((e,i,_a)=>{
      let oldpath = e.filepath
      var newpath = `%CD%\\upLoadFiles\\INE\\${cliente}-${nom[i]}`
     exec(`COPY ${oldpath} ${newpath}`, function(error){if(error)console.log(error)})

    })
   
    
    
/*

    a.forEach((e,i,_a)=>{   console.log(e.filepath);
           var newpath = `\\uploadFiles\\INE\\${cliente}-${e.originalFilename}`
           console.log(newpath);
          fs.rename(e.filepath, newpath, function (err) {
            console.log(err)
                  if (err){
                            res.write({estatus:false,mensaje:`Ocurrio un erro al subir la imagen: ${err}`})
                            res.end()
                          }
            });
           
  }); // foreach */

 res.send({estatus:true,mensaje:`Las imagenes se guardaron correctamente`})
});
});
module.exports = router;