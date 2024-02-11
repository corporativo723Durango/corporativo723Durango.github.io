
import {Loader} from "@googlemaps/js-api-loader"

 const loader = new Loader({
    apiKey: "e218f745-92e5-4780-a2a0-e59fcb173bf1",
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