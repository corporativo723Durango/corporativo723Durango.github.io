
    let curp = "ROGE840801HDGDRM08"
    let dom = []
    let prop = ["Propia","Rentada","Prestada","De los padres"]
    let edos = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","CDMX","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacan","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Queretaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"]
    let $nuevoCli = _div("nuevoCliente","ventanaMain","")
    let $formCli = $("<form>").attr({"id":"nCli","method":"post", "action":""})
    let $fs1 = $("<fielset>").addClass("_datPerso").html("<h3>Datos Personales</h3><br>")
    let $fs2 = $("<fielset>").addClass("_domicilio").html("<h3>Domicilio</h3><br>")
    let $fs3 = $("<fielset>").addClass("fotos").html("<h3>Evidencias Fotograficas</h3><br>")
    
    $fs1.append(_inp("text","nombre","enlinea imp w200","Nombre",true,"",64,gpo="personales")).append(_inp("text","paterno","enlinea imp w200","Apellido Paterno",true,"",64,gpo="personales"))
    .append(_inp("text","materno","enlinea imp w200","Apellido Materno",true,"",64,gpo="personales")).append($("<div>").addClass("grupo").append($("<label>").html("Fecha de Nacimiento: ")).append(_inp("date","fecha_nac","enlinea w150","Fecha de Nacimiento",true,"{{formatDate invoice.date 'DD-MM-YYYY'}}",32,gpo="personales").attr({"valuesAsDate":new Date()})))       
    .append($("<div>").addClass("grupo").append($("<label>").html("Lugar de Nacimiento: ")).append(_selec("entidad","ent",edos,10,gpo="personales"))).append(_inp("text","telefono","enlinea w100","Num. Teléfono",true,"618",10,gpo="personales",10))
    .append(_inp("text","ocr","enlinea w150","OCR de elector",true,"",13,gpo="personales",13)).append(_div("fileuploader","subirCredencial enlinea","Arrastre  y suelte la imagen de la credencial")).append(_div("btnLimpiar","btn","<span class='material-symbols-outlined'>cleaning_services</span>").css({"left":"1px"}).click(function(){ limpiar()}))
    
    $fs2.append(_inp("text","calle","enlinea w300","Calle, Avenida, Carretera, etc",true,"")).append(_inp("number","num_ext","enlinea  w100","Num ext",true,"",5))
    .append(_inp("text","num_int","enlinea  w100","Num int",false,"1",10)).append(_inp("text","cp","enlinea w100","Código Postal",true,"",5,"domicilio",5))
    .append(_selec("colonia","enlinea w150",["Colonia"],1,"domicilio",true)).append($("<div>").addClass("grupo").append($("<label>").html("Propiedad: ")).append(_selec("propiedad","enlinea w100 ent",prop)))
    .append(_inp("number","antiguedad","enlinea w100","Antigüedad",true,5)).append($("<div>").addClass("grupo").append($("<label>").html("Ubicación: ")).append(_inp("text","ubi","enlinea w200","Latitud , Longitud",false,"")).append($("<span>").addClass("material-symbols-outlined simbolMap").html("home_pin")))
    .append(_div("addDom","addDom btn",$("<span>").addClass("material-symbols-outlined domIco").html("home").append($("<span>").html("+"))).click(function(){ dom.push(agregaDom($fs2[0].children)) })).append(_div("mapaUbi","mapaUbi","Mapa para ubicar").toggle())
    
    $fs3.append($("<textarea>").attr({"text":"ESTE TEXTO ES DE EJEMPLO","gpo":"evidencias", "id":"observaciones","placeholder":"Observaciones","maxlength":"256","required":true})).append(_div("upload-evidencias","upload","Subir Evidencias"))
    let $tmp = _div("tab-contaier","tab-contaier","")
  

    Array(Array("Datos Personales",$fs1),Array("Domicilio",$fs2),Array("Evidencias Fotográficas",$fs3)).forEach((e,i,a)=>{ $tmp.append(_div(`tab${i+1}`,"tab",`<a id="a${i+1}" href="#tab${i+1}">${e[0]}</a>`).append(_div(`tc${i+1}`,"tab-content",e[1]))) })
    let  $pestañas = _div("tabs","tabs",$tmp)
    $formCli.html($pestañas)
    $nuevoCli.html($formCli[0])



    


let $mapa = _div("mapa","ventanaMain")
let $dir = _div("pac-card","pac-card",_div("pac_container","",_inp("text","pac-input","address","Buscar Dirección")))
let $info = _div("infowindow-content").html($("<span>").attr("id","place-name").addClass("title")).append($("<span>").attr("id","place-address"))
$mapa.html($dir).append(_div("map")).append($info)


/*****************   C O N S U L T A S       *******************************/

let $consultar = _div("muestraCli","ventanaMain")
let $btn_dT = _div("refresh_dT","btn","<span class='material-icons'>update</span>").attr("title","Actualizar Lista")
let $tabla = $("<table>").attr("id","listClientes").addClass("display").css("width","100%")
$tabla.html($("<thead>").append(_th(" ,Nombre,OCR,Fecha de registro,Verificado")))
$tabla.append($("<tfoot>").append(_th(" ,Nombre,OCR,Fecha de registro,Verificado")))
$consultar.html($btn_dT).append($tabla)






function validaDatos(){
    let vacio = function(v,i){if(v=="" && i.required) {alertify.error(`<b>${i.placeholder}</b> no puede estar <b>vacio</b>`); i.focus(); return true;} return false}
    let e = Array.from($("#nCli")[0].elements)
    for(let i of e){
        switch(i.type){        
            case "text": if(vacio($(i).val(),i)) return i;
                         if((i.id=="telefono" || i.id=="ocr" || i.id=="cp") && $(i).val().length < $(i).attr("minlength")){ alertify.error(`<b>${i.placeholder}</b> debe de tener <b>${$(i).attr("minlength")}</b> números`); return i; } 
                        break;
            case "date": if(vacio($(i).val(),i)) return i;
                        break;
            case "number": if(vacio($(i).val(),i)) return i;
                        break;
            case "textarea":if(vacio($(i).val(),i)) return i;
                             break;
            case "select-one": if(i.id=="colonia" && $(i).val() == "") {alertify.error(`En <b>${i.id}</b> debe seleccionar una colonia`); return i } break;
       }  
    }
    valida()
}

function valida(){
    dom.push({fotos:archivos2,validado:false})
    let i = $("#nCli")[0].elements
    let _dat = {personales:{fotos:archivos1},domicilios:dom,fecha_alta:new Date(),calificacion:100,estatus:true}
    let _datos_ = Object.create(_dat)
    console.log(_datos_)
    let aElem = Array.from(i)
    let v = ["entidad","num_ext","antiguedad","calificacion","propiedad"]
    aElem.forEach(e=>{
        let gpo = $(e).attr("gpo") 
        console.log(gpo)
        let valor = v.includes(e.id)  ? parseInt($(e).val()):$(e).val()
         if(gpo=="" || gpo=="evidencias")  
            _datos_[e.id]=valor;
        else if(gpo=="personales")
                _datos_.personales[e.id]=valor
            else 
                _datos_.domicilios[0][e.id]=valor
         })
     alertify.confirm().destroy();
     alertify.prompt().destroy();
    let $confGuardar = alertify.prompt('Clientes','Esta acción necesita autorización','29979245', function(evt,value){ 
        let s = JSON.parse(localStorage.getItem("sesion"))
        let u = JSON.parse(s.usuario)
        console.log(u.contra, value)
        if(u.contra==hex_md5(value))  guardarCliente(_datos_,u._id)
        else alertify.error('Contraseña Incorrecta'); 
    }, function(){ alertify.error('Cancelado')}).set('selector', 'input[type="password"]');
    $(".ajs-input").attr("type","password").css({"width":"60%","margin":"20px  20%"})
    $confGuardar.set({'resizable':true}).resizeTo("50%","30%")
}

function guardarCliente(x,id_u){
    let query =  JSON.stringify({"personales":JSON.stringify(x.personales),"domicilios":JSON.stringify(x.domicilios),"fecha_alt":Date(),"estatus":true,"verificado":false,"calificacion":100,"dio_alta":id_u})
    $.post("/clientes/nuevo",JSON.parse(query)).done(function(m){
        m.estatus ? alertify.success(m.mensaje):alertify.error(m.mensaje)
    })   
}

function limpiar(){
    $("input[type=text],input[type=number],textarea").val("")
    $("select").val("1")
}


function agregaDom(e){
    let _d = {fotos:archivos2,validado:false}
    let tipos=["number","text","select-one"]
    let $cabeza = $("<tr>")
    let $cuerpo = $("<tr>")
    let x = ""
    for(let i=0;i<12;i++){
       x = e[i].className=="grupo" ? e[i].children[1]:e[i]
        if(tipos.includes(x.type)){
            dom[x.id]=x.value
            $cabeza.append($("<th>").html(x.id))
            $cuerpo.append($("<td>").css("width",(x.width-(x.width*0.1))+"px").html(x.value))
            x.className=="select-one" ? x.selected=1:x.value = ""
        }
    }
    $("#tab-contaier").append($("<table>").addClass("tablaDom").append($cabeza).append($cuerpo))
    $("#addDom").css("display","none")
    return _d
}






















/*  *-*-*-*-*-*-*-**-*-*  Construir Elementos HTML  -*-*-*-*-*-*-*-*-*-*/

function _div(id="",clase="",html=""){
    let $o = $("<div>")
    $o.attr("id",id).addClass(clase).html(html)
    return $o
}
function _inp(tipo,id="",clase="",ph="",req=false,valor="",max=-1,gpo="domicilio",min=-1){
    let $i = $("<input>")
    $i.attr({"type":tipo,"id":id,"name":id,"placeholder":ph,"value":valor,"maxlength":max,"minlength":min,"required":req,"gpo":gpo}).addClass(clase)
    $i.val(valor)
    return $i
}
function _selec(id,clase,opc,sel=1,gpo="domicilio",req=false){
    let $s = $("<select>")
    $s.attr({"id":id,"name":id,"gpo":gpo,"required":req}).addClass(clase).html("")
    opc.forEach((e,i,a) => {  $s.append($("<option>").val(i+1).html(e).attr(i+1==sel ? {"selected":true}:{"selected":false})) })
    return $s
}

function _th(a){
    let $tr=$("<tr>")
    a.split(",").forEach(e=>{ $tr.append($("<th>").html(e)) })
     return $tr
}
