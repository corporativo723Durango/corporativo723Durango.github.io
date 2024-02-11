var express = require('express');
var router = express.Router();
var {Loader} = require("@googlemaps/js-api-loader")




/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Router")
  res.render('index', { title: 'Corporativo 723'});
});

router.get('/maps', function(req, res, next) {
        const loader = new Loader({
          apiKey: "AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho",
          version: "weekly"
          // ...additionalOptions,
        });
        
        loader.load().then(async () => {
          const { Map } = await google.maps.importLibrary("maps");
        
          map = new Map(document.getElementById("map"), {
            center: { lat: -25.25, lng: -102.25 },
            zoom: 8,
          });
        })
  res.send("<html><head></head><body><div id='map'></div></body></html>");
});


module.exports = router;