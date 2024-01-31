const bodyParser = require("body-parser");
const { writeFile } = require("fs");
const { Writable } = require("stream");

let arr =  [
    ["Las Adelitas 206 Emiliano Zapata, Vi",
        [
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
                [
                    ["Las Adelitas 206, Emiliano Zapata, Victoria de Durango, Durango",null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"BChIJ-al5Nru3m4YRA50F0-BuibE\u003d"],
                    ["Las Adelitas 206",[[0,12],[13,16]]],
                    ["Emiliano Zapata, Victoria de Durango, Durango",[[0,15],[17,19]]],
                    0,2,1,1,[null,38,[39,111,428]],null,null,null,[null,null,24.0359686,-104.6242066],null,
                    [["0x869bb7bb3679a9f9:0xb1896ee0d3059d03","Las Adelitas 206, Emiliano Zapata, Victoria de Durango, Durango",null,[null,null,24.0359686,-104.6242066],0,null,null,null,0]],
                    ["Las Adelitas 206, Emiliano Zapata, Victoria de Durango, Durango","0x869bb7bb3679a9f9:0xb1896ee0d3059d03",[null,null,24.0359686,-104.6242066]],null,null,null,null,null,[[0],[87]],null,null,null,null,null,null,1705871262323202,null,null,null,null,null,null,"MX",null,null,3,null,null,null,0
                ]
            ]
        ],
        null,null,null,null,null,null,null,null,[0]
    ]
    ,null,null,null,null,null,null,"HIitZYOJCsq2qtsP4cqJ8AY"
]

console.log(arr[0][1][0][22][11])


dire2coord2()

function dire2coord(){
 

    var misCabeceras = new Headers();
    misCabeceras.append('Content-Type', 'text/plain');
    
    var miInicializador = { method: 'GET',
                            headers: misCabeceras,
                            mode: 'cors',
                            cache: 'default' };
    
    var miSolicitud = new Request("https://www.google.com.mx/s?tbm=map&suggest=p&gs_ri=maps&psi=EgKtZcODG6SyqtsPx4us0AY.1705871186594.1&gl=mx&hl=es-419&authuser=0&q=Las+Adelitas+206+Emiliano+Zapata%2C+Vi&ech=137&pb=!2i36!4m12!1m3!1d4194.235765489086!2d-104.62678152410535!3d24.03596857847666!2m3!1f0!2f0!3f0!3m2!1i1116!2i884!4f13.1!7i20!10b1!12m17!1m1!18b1!2m3!5m1!6e2!20e3!10b1!12b1!13b1!16b1!17m1!3e1!20m4!5e2!6b1!8b1!14b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sEgKtZcODG6SyqtsPx4us0AY!7e81!17sEgKtZcODG6SyqtsPx4us0AY%3A843!23m3!1e116!4b1!10b1!24m94!1m29!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m18!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!22b1!25b1!27m1!1b0!28b0!31b0!10m1!8e3!11m1!3e1!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m17!1m5!1b1!2b1!3b1!5b1!7b1!4b1!8m8!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_reviews!9b1!89b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m7!3b1!6m2!1b1!2b1!7m2!1e3!2b1!61b1!67m2!7b1!10b1!69i677");
    
    fetch(miSolicitud,miInicializador).then(function(respuesta) {
      console.log(respuesta)
    });
    
  }
function dire2coord2(){
  fetch("https://www.google.com.mx/s?tbm=map&suggest=p&gs_ri=maps&psi=EgKtZcODG6SyqtsPx4us0AY.1705871186594.1&gl=mx&hl=es-419&authuser=0&q=Las+Adelitas+206+Emiliano+Zapata%2C+Vi&ech=137&pb=!2i36!4m12!1m3!1d4194.235765489086!2d-104.62678152410535!3d24.03596857847666!2m3!1f0!2f0!3f0!3m2!1i1116!2i884!4f13.1!7i20!10b1!12m17!1m1!18b1!2m3!5m1!6e2!20e3!10b1!12b1!13b1!16b1!17m1!3e1!20m4!5e2!6b1!8b1!14b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sEgKtZcODG6SyqtsPx4us0AY!7e81!17sEgKtZcODG6SyqtsPx4us0AY%3A843!23m3!1e116!4b1!10b1!24m94!1m29!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m18!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!22b1!25b1!27m1!1b0!28b0!31b0!10m1!8e3!11m1!3e1!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m17!1m5!1b1!2b1!3b1!5b1!7b1!4b1!8m8!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_reviews!9b1!89b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m7!3b1!6m2!1b1!2b1!7m2!1e3!2b1!61b1!67m2!7b1!10b1!69i677")
  .then(json=>{return json.body})
  .then(json=>{ download(json, 'buscar.txt', 'text/plain')
})

}


async function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

