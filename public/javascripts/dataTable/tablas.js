$(document).ready(function(){
    console.log("Comienza construccion de DataTable")
})


function orden(o){               
        let k = Object.keys(o)
        let l="";
        k.forEach(_k =>{ l += `<ddt><b>${_k}:</b> </ddt><ddd>${o[_k]}</ddd><br>`})
        return l
    }

    function format(d) {
        // `d` is the original data object for the row
        return (
            '<dl>' +
            '<dt>Datos Personales</dt>' +
            '<dd>' +
            orden(d.personales)+
            '</dd>' +
            '</dl>'+
            '<dl>' +
            '<dt>Domicilio Cliente</dt>' +
            '<dd>' +
            orden(d.domicilio)+
            '</dd>' +
            '</dl>'+
            '<dl>'+
            '<dt>Domicilio Referencia </dt>' +
            '<dd>'+
            orden(d.domicilio)+
            '</dd>' +
            '</dl>'
        
        );
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
