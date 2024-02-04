var express = require('express');
var formidable = require("formidable")
var fs = require("fs")
const { exec } = require('child_process');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let cliente = "0001"
  var form = new formidable.IncomingForm();
 
    
  form.parse(req, function (err, fields, files) {
    let a = files.misFiles
    console.log(a)
    a.forEach(e=>{
           var newpath = `uploadFile\\INE\\${cliente}\\${e.originalFilename}`
          fs.rename(e.filepath, newpath, function (err) {
                  if (err){
                            res.write({estatus:false,mensaje:`Ocurrio un erro al subir la imagen: ${err}`})
                            res.end()
                          }
            });
  }); // foreach

 res.write({estatus:true,mensaje:`Las imagenes se guardaron correctamente`});
  res.end();
});
});
module.exports = router;