$(document).ready(function(){
    console.log("Comienza construccion de DataTable")
})


function orden(o){               
        let k = Object.keys(o)
        let l="";
        let ponFotos = function(o,_k){let $fotos =  $("<div>"); o[_k].forEach(_k_=>{ $fotos.append($("<img>").attr("src","../"+_k_).addClass("imgDetalle")) });  return $fotos.html(); }
        k.forEach(_k =>{ l += `<ddt><b>${_k}</b> </ddt><ddd>${_k=="fotos" ? ponFotos(o,_k):o[_k]}</ddd><br>`})
        return l
    }

    function format(d) {
        let $det = $("<div>")
        let $per = $("<dl>")
        let $dom1 = $("<dl>")        
        $per.html($("<dt>").html("Datos Personales")).append($("<dd>").html(orden(d.personales)))
        $dom1.html($("<dt>").html("Domicilio Cliente")).append($("<dd>").html(orden(d.domicilios[0])))
        let $dom2 = d.domicilios.length == 1  ? "":$("<dl>").html($("<dt>").html("Domicilio Referencia")).append($("<dd>").html(orden(d.domicilios[1]))) 
        $det.html($per).append($dom1).append($dom2)
        return $det;
    }
     
 function initDataTable(_id_,_r){
    let table = new DataTable(_id_, {
        destroy :  _r,
        paging: false,
        scrollCollapse: true,
        scrollY: '60vh',
        columnDefs: [
            {
                targets: 3,
                render: DataTable.render.datetime('dd MM yyyy')
            }
        ],
        ajax: '/clientes/consultar',
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: ''
            },
            { data: 'nom' },
            { data: 'ocr' },
            { data: 'fecha_alt' },
            { data: 'verificado'}
          


        ],
        order: [[1, 'asc']],
        rowId: '_id',
        stateSave: true
    });
     
    table.on('requestChild.dt', function (e, row) {
        row.child(format(row.data())).show();
    });
     
    // Add event listener for opening and closing details
    table.on('click', 'td.dt-control', function (e) {
        let tr = e.target.closest('tr');
        let row = table.row(tr);
     
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
        }
    });

    table.on('click', 'tbody tr.odd, tbody tr.even', (e) => {
        console.log(e.currentTarget)
        let classList = e.currentTarget.classList;
     
        if (classList.contains('selected')) {
            classList.remove('selected');
        }
        else {
            table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
            classList.add('selected');
        }
    });


    return table
}
