    let prop = ["Propia","Rentada","Prestada","De los padres"]
    let edos = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Cohuila","Colima","Chiapas","Chihuahua","CDMX","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacan","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Queretaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","--29--","Veracruz","Yucatán","Zacatecas"]
    let $nuevoCli = _div("nuevoCliente","ventanaMain")
    let $formCli = $("<form novalidate>").attr({"id":"nCli","action":"Javascript:valida()"})
    let $fs1 = $("<fielset>").addClass("_datPerso").html("<h3>Datos Personales</h3><br>")
    let $fs2 = $("<fielset>").addClass("_domicilio").html("<h3>Domicilio</h3><br>")
    let $fs3 = $("<fielset>").addClass("fotos").html("<h3>Evidencias Fotograficas</h3><br>")
    
    $fs1.append(_inp("text","nombre","enlinea imp w200","Nombre",true,"Emmanuel",64,gpo="personales")).append(_inp("text","paterno","enlinea imp w200","Apellido Paterno",true,"Rodriguez",64,gpo="personales"))
    .append(_inp("text","materno","enlinea imp w200","Apelllido Materno",true,"García",64,gpo="personales")).append($("<div>").addClass("grupo").append($("<label>").html("Fecha de Nacimiento: ")).append(_inp("date","fecha_nac","enlinea w150","Fecha de Nacimiento",true,"1984/08/01",-1,gpo="personales")))       
    .append($("<div>").addClass("grupo").append($("<label>").html("Lugar de Nacimiento: ")).append(_selec("entidad","ent",edos,10,gpo="personales"))).append(_inp("text","telefono","enlinea w100","Num. Teléfono",true,"618",10,gpo="personales"))
    .append(_inp("text","ocr","enlinea w150","OCR de elector",true,"452569874525125",13,gpo="personales")).append(_div("fileuploader","subirCredencial enlinea","Arrastre  y suelte la imagen de la credencial")).append(_div("btnLimpiar","btn","Limpiar Formulario").click(function(){ limpiar()}))
    
    $fs2.append(_inp("text","calle","enlinea w300","Calle, Avenida, Carretera, etc",true,"Av Santoral")).append(_inp("number","num_ext","enlinea  w100","Num ext",true,"206",5))
    .append(_inp("text","num_int","enlinea  w100","Num int",false,"1",10)).append(_inp("text","cp","enlinea w100","Código Postal",true,"34230",5))
    .append(_selec("colonia","enlinea w150",["Colonia"],1,"domicilio")).append($("<div>").addClass("grupo").append($("<label>").html("Propiedad: ")).append(_selec("propiedad","enlinea w100 ent",prop)))
    .append(_inp("number","antiguedad","enlinea w100","Antigüedad",true,5)).append($("<div>").addClass("grupo").append($("<label>").html("Ubicación: ")).append(_inp("text","ubi","enlinea w200","Latitud , Longitud",false,"22.3651,-102.325")).append($("<span>").addClass("material-symbols-outlined simbolMap").html("home_pin")))
    .append(_div("mapaUbi","mapaUbi","Mapa para ubicar").toggle())
    
    $fs3.append($("<textarea>").attr({"value":"ESTE TEXTO ES DE EJEMPLO",  "id":"observaciones","placeholder":"Observaciones","maxlength":"250"})).append(_div("upload-evidencias","upload","Subir Evidencias"))
    let $tmp = _div("tab-contaier","tab-contaier","")
   

    Array(Array("Datos Personales",$fs1),Array("Domicilio",$fs2),Array("Evidencias Fotográficas",$fs3)).forEach((e,i,a)=>{ $tmp.append(_div(`tab${i+1}`,"tab",`<a id="a${i+1}" href="#tab${i+1}">${e[0]}</a>`).append(_div(`tc${i+1}`,"tab-content",e[1]))) })
    let  $pestañas = _div("tabs","tabs",$tmp)
    $formCli.html($pestañas)
    $nuevoCli.html($formCli[0])



    


let $mapa = _div("mapa","ventanaMain")
let $dir = _div("pac-card","pac-card",_div("pac_container","",_inp("text","pac-input","address","Buscar Dirección")))
let $info = _div("infowindow-content").html($("<span>").attr("id","place-name").addClass("title")).append($("<span>").attr("id","place-address"))
$mapa.html($dir).append(_div("map")).append($info)


let $consultar = _div("muestraCli","ventanaMain")
let $buscador = _div("buscador","login","Buscar: ").append(_inp("text","inpBuscar","enlinea","Escriba algo referente al cliente",false,"",128,"Buscar")).append(_div("btnBuscar","btn","Buscar"))
$consultar.html($buscador)




function valida(){
    let i = $("#nCli")[0].elements
    let _dat = {personales:{fotos:["elector_frente.jpg"]},domicilio:{fotos:["fachada.jpg"],validado:false},fecha_alta:Date(),calificacion:100,estatus:true}
    let _datos_ = Object.create(_dat)
    let aElem = Array.from(i)
    let v = ["entidad","num_ext","antiguedad","calificacion","propiedad"]
    aElem.forEach(e=>{ 
        let valor = v.includes(e.id)  ? parseInt(e.value):e.value
         if(e.title=="")  
            _datos_[e.id]=valor;
        else if(e.title=="personales")
                _datos_.personales[e.id]=valor
            else 
                _datos_.domicilio[e.id]=valor
         })
     alertify.confirm().destroy();
     alertify.prompt().destroy();
    let $confGuardar = alertify.prompt('Clientes','Esta acción necesita autorización','299792458', function(evt,value){ 
        let s = JSON.parse(localStorage.getItem("sesion"))
        let u = JSON.parse(s.usuario)
        console.log(u.contra, value)
        if(u.contra==hex_md5(value))  guardarCliente(_datos_)
        else alertify.error('Contraseña Incorrecta'); 
    }, function(){ alertify.error('Cancelado')}).set('selector', 'input[type="password"]');
    
    $(".ajs-input").attr("type","password").css({"width":"60%","margin":"20px  20%"})
    $confGuardar.set({'resizable':true}).resizeTo("50%","30%")
    $(".ajs-dialog").addClass("fondoForms p35")

  // d.getUrlParameter("x")

}

function guardarCliente(x){
    let query =  JSON.stringify({"personales":JSON.stringify(x.personales),"domicilio":JSON.stringify(x.domicilio),"fecha_alt":Date(),"estatus":true,"verificado":false,"calificacion":100})
    $.post("/cliente/nuevo",JSON.parse(query)).done(function(m){
        alertify.success(m.mensaje)
    })   
}

function limpiar(){
    $("input[type=text],input[type=number]").val("")
   
}




/*  *-*-*-*-*-*-*-**-*-*  Construir Elementos HTML  -*-*-*-*-*-*-*-*-*-*/

function _div(id="",clase="",html=""){
    let $o = $("<div>")
    $o.attr("id",id).addClass(clase).html(html)
    return $o
}
function _inp(tipo,id="",clase="",ph="",req=false,valor="",max=-1,gpo="domicilio"){
    let $i = $("<input>")
    $i.attr({"type":tipo,"id":id,"name":id,"placeholder":ph,"value":valor,"maxlength":max,"required":req,"title":gpo}).addClass(clase)
    $i.val(valor)
    return $i
}
function _selec(id,clase,opc,sel=1,gpo="domicilio"){
    let $s = $("<select>")
    $s.attr({"id":id,"title":gpo}).addClass(clase).html("")
    opc.forEach((e,i,a) => {  $s.append($("<option>").val(i+1).html(e).attr(i+1==sel ? {"selected":true}:{"selected":false})) })
    return $s
}
