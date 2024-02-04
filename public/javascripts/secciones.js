var d=null
let conte=$("<div><div><div><div><div></div>")
conte.addClass("consulCli")
$(".consulCLi").html("Texto de prueba nomas para llenar esta madre sin tanto esfuerxzo, checaquen mi codigo <BR>")
function _sec(_i){
    let $divTot = $("<div>");
            switch(parseInt(_i)){
                case 0: $divTot.html("Inicio"); break;
                case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title new"),
                                i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                                $_dat:{id:"nuevoCli",t:"<h2>Nuevo Cliente</2>",$c:$nuevoCli[0].children[0],w:"90%",h:"80%",btn:"Guardar"}
                                },
                               
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/consultar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title selec"),
                                i3:$("<img>").attr({"src":"/images/informe.png"}).addClass("character"),
                                $_dat:{id:"muestraCli",t:"Consultar Clientes",$c:$consultar[0],w:"90%",h:"90%",btn:"Salir"}
                                },
                                {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/actualizar.png"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title upd"),
                                i3:$("<img>").attr({"src":"/images/act1.png"}).addClass("character"),
                                $_dat:{id:"actualizaCli",t:"Actualizar Clientes",$c:$mapa[0],w:"50%",h:"20%",btn:"Salir"}
                                }

                               

                                ];
                        opc.forEach(o=>{   
                            $divTot.append($("<div>").addClass("opcCli").html($("<div>").addClass("card").html(o.i1).append(o.i2).append(o.i3)).click(()=>{ alertas(o.$_dat)}) )
                        })
                        break;
                default: break;       
            } 
    return $divTot;
}

function alertas($d){
    console.log($d.$c)
    alertify.alert().setContent($d.$c).set({label:$d.btn,"title":$d.t,"resizable":true,"invokeOnCloseOff":true,
            onok:function(closeEvent){ $.get("/clientes/newID").done(function(r){                
                closeEvent.button.element.innerHTML == "Guardar" ? 
                alertify.confirm(`El nuevo cliente se guardará con ID: ${r.datos}. ¿Esta seguro de terminar esta acción?`).set({onok:(closeEvent)=>{  valida();  alertify.success("Nuevo Cliente guardado");alertify.alert().close()},resizable:true}).resizeTo("60%","30%") 
                : alertify.alert().close() 
                return false; 
                 })  
                },
            }).resizeTo($d.w,$d.h).show()
           
  ajusteAle($d)()  
   
}




