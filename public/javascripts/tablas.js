$(document).ready(function(){
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
            orden(d.calificacion)+
            '</dd>' +
            '</dl>'+
            '<dl>'+
            '<dt>Domicilio </dt>' +
            '<dd>'+
            orden(d.calificacion)+
            '</dd>' +
            '</dl>'
        
        );
    }
     
    let table = new DataTable('#myTable', {
        ajax: '/cliente/consultar',
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




})


function orden(o){
    let k = Object.keys(o)
    let l="";
    k.forEach(_k =>{ l += `<ddt><b>${_k}:</b> </ddt><ddd>${o[_k]}</ddd><br>`})
    console.log(l)
    return l
}