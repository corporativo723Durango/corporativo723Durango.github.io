
sesion = localStorage.getItem("sesion")
establecerSesion = function(){var _s = JSON.parse(localStorage.getItem("sesion"));  var su = JSON.parse(_s.usuario);   sesion=JSON.stringify(_s);  $(".lbl_usu").html($("<h4>").html(su.nombre+" "+su.paterno+" "+su.materno).addClass("usuarioLogueado") )}
let $inicio = $("<div>").addClass("x")
let opc = [{texto:"Inicio",icono:"home"},{texto:"Clientes",icono:"clientes"},{texto:"Prestamos",icono:"prestamos"},{texto:"Informes",icono:"info"},{texto:"Acerca de",icono:"acerca"}]
estilo={"position":"fixed","left":"1px","top":"0","padding":"0px 1px","z-index":"0","opacity":"0.2"}
let login=null

$(function(){
    let $items = $("<div>").addClass("ah-tab-wrapper") 
    let $lista = $("<div>").addClass("ah-tab")
    let $contenido = $("<div>").addClass("ah-tab-content-wrapper")
    opc.forEach(o=>{$lista.append($("<a>").addClass("ah-tab-item").html(o.texto).append($("<img>").css(estilo).attr("src",`/images/white-24dp/2x/${o.icono}.png`)));
                    $contenido.append($("<div>").addClass("ah-tab-content").html($("<h2>").html(o.texto)));
                  })
    $($lista[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $($contenido[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $items.html($lista)
    $(".content").html($items).append($("<div>").addClass("lbl_usu").html("usuario").click(()=>{ alertify.notify(sesion,'custom',10) })).append($contenido)                
    if(sesion==null){
          let $log = $("<form>").attr("id","loginForm").html(  
         $("<fieldset>")
           .append($("<div>").addClass("login").html($("<input>").attr({"id":"usuario","type":"text","placeholder":"Usuario","required":"true"})))
            .append($("<div>").addClass("login").html($("<input>").attr({"id":"contra","type":"password","placeholder":"Contraseña","required":"true"})))
          )
         alertify.confirm().set({title:"Inicio de Sesión",selector:'input[type="text"]',resizable:true,frameless:false,onok:function(cE){onAutenticar($("#usuario").val(),hex_md5($("#contra").val()),"form")},oncancel:function(){alertify.error("Cancelado");location.reload()}}).setContent($log[0]).resizeTo("40%",240).show()
         $(".ajs-dialog").addClass("fondoForms p35")
    }else{     
      s=JSON.parse(sesion) 
      ss = JSON.parse(s.usuario)
      onAutenticar(ss.usuario,ss.contra,"storage")
    }
    
$('.ah-tab-wrapper').horizontalmenu({
          itemClick : function(item) {
              secc = item[0].childNodes[0].data
              console.log(secc)
              _idx = $(item).index() 
              $('.ah-tab-content-wrapper .ah-tab-content').css("height","none").removeAttr('data-ah-tab-active');
              $('.ah-tab-content-wrapper .ah-tab-content:eq(' + _idx + ')').attr('data-ah-tab-active', 'true').css({"height":($(document).height()-100)+"px"})
              .html(_sec(_idx))
              return false;   //if this finction return true then will be executed http request
          }
      })
}(jQuery));


$(document).ready(function() {  
   
   
})

function onAutenticar(usuario,contra,viene){
  if(viene=="form" && (usuario=="" || contra=='d41d8cd98f00b204e9800998ecf8427e')){  alertify.error("Ambos campos son  requeridos ") ;   login.set({transition:"slide"}); return false}

  $("#modal").removeClass("ocultar")
  $.post("/users/autenticar",{usuario:usuario,contra:contra,estatus:true})
  .done(function(r){
    if(r.estatus){
      $('.ah-tab-content-wrapper .ah-tab-content:eq(0)').html(_sec(0))
      localStorage.setItem("sesion",JSON.stringify(r.datos))
      alertify.notify(r.mensaje, 'success', 2,()=>{ establecerSesion();  _sec(0)}); 
        }else{
       alertify.notify(r.mensaje2,'error',5)
    }
    $("#modal").addClass("ocultar");
  })
}