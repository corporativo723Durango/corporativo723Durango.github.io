// Initialize and add the map3.


let map;
let marker;
let geocoder;
async function initMap() {

  let url = window.location.href
  const position = {lat:24.0359686,lng:-104.6242066}
  console.log(position)
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Ubicacion casa del cliente",
  });

  geocoder = new google.maps.Geocoder();

  map.addListener("click", (e) => {
    console.log({ location: e.latLng });
  });



// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

/*
function dire2coord(){
  fetch("https://www.google.com.mx/s?tbm=map&suggest=p&gs_ri=maps&psi=EgKtZcODG6SyqtsPx4us0AY.1705871186594.1&gl=mx&hl=es-419&authuser=0&q=Las+Adelitas+206+Emiliano+Zapata%2C+Vi&ech=137&pb=!2i36!4m12!1m3!1d4194.235765489086!2d-104.62678152410535!3d24.03596857847666!2m3!1f0!2f0!3f0!3m2!1i1116!2i884!4f13.1!7i20!10b1!12m17!1m1!18b1!2m3!5m1!6e2!20e3!10b1!12b1!13b1!16b1!17m1!3e1!20m4!5e2!6b1!8b1!14b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sEgKtZcODG6SyqtsPx4us0AY!7e81!17sEgKtZcODG6SyqtsPx4us0AY%3A843!23m3!1e116!4b1!10b1!24m94!1m29!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m18!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!22b1!25b1!27m1!1b0!28b0!31b0!10m1!8e3!11m1!3e1!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m17!1m5!1b1!2b1!3b1!5b1!7b1!4b1!8m8!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_reviews!9b1!89b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m7!3b1!6m2!1b1!2b1!7m2!1e3!2b1!61b1!67m2!7b1!10b1!69i677").then(json=>{JSON.parse(json)})
  .then(dat=>{ console.log(dat) })
}



let marker;
let geocoder;

async function initMap(){


  const position = {lat:24.0359686,lng:-104.6242066}
  console.log(position)

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 13,
    mapTypeControl: true,
    mapId: "DEMO_MAP_ID"
  });
  marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Ubicacion casa del cliente",
  });

  geocoder = new google.maps.Geocoder();

 

  map.addListener("click", (e) => {
    console.log($((e)[0].latLng.lat))
    //console.log(e)
    coord = {lat: e.fi.x, lng:e.fi.y*-1}
   map.setCenter(coord)
    marker.setPosition(coord);
    marker.setVisible(true);
  });

  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  };

  let tipo = document.getElementsByClassName(".gm-style-mtc-bbw");
  console.log(tipo)
  
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  //map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(tipo);
  

  const autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.bindTo("bounds", map);
  let ll = "@24.0278399,-104.6569317,12.96z"
  let hl = "es"
  let gl = "mx"
  let engine = "google_maps_autocomplete"
/*
  https://serpapi.com/search.json?engine=google_maps_autocomplete&q=Hacienda+Santoral+109&ll=@22.7455096,-102.0083012,15.1z&type=search&api_key=8a0557b9a16966ff2298be110a98a7d0922392515188f37f2e73e4d085a56957


  https://serpapi.com/search.json?engine=google_maps&q=Las+Adelitas+206,+Emiliano&type=address&api_key=8a0557b9a16966ff2298be110a98a7d0922392515188f37f2e73e4d085a56957

*/


  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

   autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });


}

initMap(); 