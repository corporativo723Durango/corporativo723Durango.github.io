var express = require('express');
var formidable = require("formidable")
var fs = require("fs")
const { exec } = require('child_process');
var router = express.Router();
require("dotenv").config()


router.post('/:ID/:carp/:cliente', function(req, res, next) {
  console.log(req.params)
  let id = req.params.ID
  let carp = req.params.carp
  let nom = req.params.cliente
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files){
   console.log(files)
    let e = files.misFiles[0]
    let oldpath = e.filepath
    let ext = e.originalFilename.split(".")[1]
    let newName = `${id}-${nom}.${ext}`
    var newpath = `upLoadFiles/${carp}/${newName}`
    fs.rename(oldpath, newpath, function (err) { 
      res.writeHead(200,{"Content-Type":"application/json"})
      if(err==null) res.write(JSON.stringify({estatus:true,mensaje:`Imagen guardada satisfactoriamente`,datos:[newName,newpath]}))
      else res.write(JSON.stringify(process.env.ERROR_UPIMG))
      res.end()

      })
  
    
});
});





module.exports = router;