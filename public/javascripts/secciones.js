var d=null
let conte=$("<div><div><div><div><div></div>").addClass("consulCli")
$(".consulCLi").html("Texto de prueba nomas para llenar esta madre sin tanto esfuerxzo, checaquen mi codigo <BR>")
function _sec(_i){
    let $divTot = $("<div>");
            switch(parseInt(_i)){
                case 0: $divTot.html($("<div>").attr("id","demo-drag-drop-events")) 
                    var now = new Date();
                     let _d = [
                        {
                          title: 'Dia del amor y de la amistad',
                          start: new Date(now.getFullYear(), now.getMonth(), 14),
                          end: new Date(now.getFullYear(), now.getMonth(), 14),
                          color: '#9e9e9e',
                          editable: false
                        },
                        {
                          title: 'Dia de la Bandera',
                          start: new Date(now.getFullYear(), now.getMonth(), 24),
                          end: new Date(now.getFullYear(), now.getMonth(), 24),
                          color: '#ff9988',
                          editable: true
                        }                        
                      ]
                        initCalen(_d)
                        break;
                case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                                i2:$("<div>").addClass("title new"),
                                i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                                $_dat:{id:"nuevoCli",t:"<h2>Nuevo Cliente</2>",$c:$nuevoCli[0].children[0],w:"90%",h:"83%",btn:"Guardar"}
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
                case 2: $divTot.html("PRESTAMS PRXIMAMENTE");break;
                case 3: $divTot.html("INFORMES PRXIMAMENTE");break;
                default: break;       
            } 
    return $divTot;
}



function alertas($d){                                                  
    alertify.alert().setContent($d.$c).set({label:$d.btn,"title":$d.t,"resizable":true,"invokeOnCloseOff":true,
            onok:function(closeEvent){   
                let selectPestaña = function(i){ let pest = {personales:"1",domicilio:"2",evidencias:"3"};    $("#a"+pest[$(i.attributes.gpo)[0].nodeValue])[0].click(); i.focus() }
                closeEvent.button.element.innerHTML == "Guardar" ?  selectPestaña(validaDatos()): alertify.alert().close();    
                 return false; 
                },
            }).resizeTo($d.w,$d.h).show()
  ajusteAle($d)()  
   
}




