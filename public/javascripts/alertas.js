let crede=[], archivos1=[], archivos2= []
function ajusteAle(obj){
        return {
                "nuevoCli":function(){
                                $("#a1")[0].click()                      
                                
                               /* $mapa =  $("#mapaUbi").html(`<iframe src="https://www.google.com.mx/maps/place/Av.+20+de+Noviembre,+Zona+Centro,+Durango,+Dgo./@24.0256922,-104.6668368" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)*/
                                $mapa =  $("#mapaUbi").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.527468278932!2d-104.66139012514941!3d24.02670317848288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7df8abf7ab7%3A0x99ac25ab55cff85a!2sAv.%2020%20de%20Noviembre%2C%20Durango%2C%20Dgo.!5e1!3m2!1ses-419!2smx!4v1707488372407!5m2!1ses-419!2smx" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
                                $(".simbolMap").click(function(){
                                   $mapa.toggle(function(){
                                        $(this).animate({width:"100%",height:"230px",border:"1px solid red"},2000)                                        
                                        });
                                    });

                                    
                                    $("input[type=text], input[type=number] ").on({ mousemove: function(x) {popInfo(x)}, mouseleave: function(x) {$("#popUp").addClass("ocultar")}}); 
                                               
                                   // onApiLoad("https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho&libraries=places,search&callback=initMap&v=weekly")
                                    $("#cp").keyup(e=>{  let cp = parseInt($("#cp").val())
                                    if(cp >= 34000)  $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {$("#col").html("");data.forEach(e=>{ $("#colonia").append($("<option>").val(e).html(e))})});
                                    else $("#colonia").html("")})                                
                                    
                                    $("#fecha_nac")[0].onchange = function(x){          
                                        n = x.target.valueAsDate
                                        let d = new Date();
                                        let r = d.getTime()-n.getTime()                                        
                                        let a = (r/(1000*60*60*24))/365.25
                                        if (a < 18.0){
                                            alertify.error(`Al nacer el ${x.target.value}, esta persona no es mayor de edad ` )
                                           document.getElementById("fecha_nac").valueAsDate = new Date("") ;
                                        }
                                    }

                                    $("#ocr").keyup(function () {
                                        var test = /\D/;  if (test.test($(this).val())) $("#ocr").val($(this).val().replace(/\D/g, ""));
                                    });

                                    $("#telefono").keyup(function () {
                                        var test = /\D/; if(test.test($(this).val())) $("#telefono").val($(this).val().replace(/\D/g, ""));                                        
                                    });



                          $.post("/clientes/newID").done(function(r){  
                                crede.push($("#fileuploader").uploadFile({url:`/uploadFile`,cliente:r.datos,fileName:"misFiles",dragDropStr:"<div id='_p' class='fondoDrag'></div>",allowedTypes:"png,jpg,jpeg,bmp,zip",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showCancel:true,statusBarWidth:100,dragdropWidth:800,uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropComprobante",
                                onSelect: function(files){ $("#fotosCli").removeClass("ocultar"); $(".cerrar").attr("id","0"); $(".dragDropComprobante").append($("._datPerso>.ajax-file-upload-container"))}, 
                                onSuccess: function (files, response, xhr, pd){   console.log(files); console.log(response);
                                        let x = response.estatus ? alertify.success(response.datos[0]):alertify.error(response.msj)
                                        archivos1.push(response.datos[1])
                                        $("#fotosCli").addClass("ocultar")  
                                        }
                                }))
                                


                                crede.push($("#upload-evidencias").uploadFile({url:`/uploadFile`,cliente:r.datos,fileName:"misFiles",dragDropStr:"<div id='_d' class='fondoDrag'></div>",allowedTypes:"png,jpg,jpeg,bmp,mp4,avi,flv",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showCancel:true,statusBarWidth:100,uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi",
                                    onSelect: function(files){$("#fotosCli").removeClass("ocultar"); $(".cerrar").attr("id","1"); $(".dragDropEvi").append($(".fotos>.ajax-file-upload-container"))},
                                    onSuccess: function (files, response, xhr, pd){   console.log(files); console.log(response);
                                        let x = response.estatus ? alertify.success(response.datos[0]):alertify.error(response.msj)
                                        archivos2.push(response.datos[1])
                                        $("#fotosCli").addClass("ocultar")  
                                        }
                                     }) )

                                })  // $.get                           
                             $(".tab-content").addClass("fondoForms")

                            },
                    "login":function(){
                             
                        },
                    "actualizaCli":function(){


                    },
                    "muestraCli":function(){                        
                        let s = JSON.parse(localStorage.getItem("sesion"))
                        if(s._daTa == undefined){
                           
                            s["_daTa"] = initDataTable("#listClientes",false)
                            localStorage.setItem("sesion",JSON.stringify(s))
                         }
                         
                         $("#refresh_dT").click(function(){
                            s._daTa = null
                            s._daTa = initDataTable("#listClientes",true) 
                            localStorage.setItem("sesion",JSON.stringify(s)) 
                         })
                         $("#muestraCli").addClass("fondoForms")

                    }
             }[obj.id]
        }


function onApiLoad(url){
    $("body").append($("<script>").attr("src",url))
}


function popInfo(e){  
    v = textos("nuevoCli")[e.currentTarget.id]
         $("#popUp").html($("<div>").addClass("popInfo").html(v).css({"top":e.pageY+"px","left":e.pageX+"px"}))
         $("#popUp").removeClass("ocultar")      
}

function subirFotos(){   
    hora = new Date().toLocaleTimeString().replaceAll(":","")
    $ele.update({url:`/uploadFile/${id}/${nomsImgs}/${hora}`})
    $ele.url=`/uploadFile/${id}/${nomsImgs}`
}



function textos(e){
    
    return  {
      nuevoCli:{
              nombre:"Nombre o nombres tal como aparece en su identificacion",
              paterno:"Apellido materno tal como aparece en su identificacion",
              materno:"Nombre o nombres tal como aparece en su identificacion",
              telefono:"Número telefónico del cliente a 10 digitos",
              ocr:`<div id='grupoElec'> <img src='../images/nuevoCliente/ocr1.jpg' /><img src='../images/nuevoCliente/ocr2.jpg'/></div>`,
              calle:"Nombre de la calle, Av. Blvd, Privada, Circuito, Carretera etc",
              num_ext:"Número exterior de la vivienda",
              num_int:"Numero interior del condominio, edificio, etc. en caso de tener. OPCIONAL",
              cp:"Código Postal, al teclar las 5 cifras se cargaran las colonias que pertenecen a este CP en la siguiente lista",
              antiguedad:"Antigüedad en años de la vivienda",
              ubi:"Ubicación de la vivienda en coordenadas geograficas decimales separadas por una coma. ej. 22.3651,-102.3654",
              observaciones:"Coloque una nota breve pero descriptiva acerca del comportamiento crediticio del cliente",
              placeholder:{a1_a1_h3:"Datos Personales",a2_a2_h3:"Domicilio", a3_a3_h3:"Evidencias Fotográfias",
                      nombre:"Nombre",paterno:"Apellido Paterno",materno:"Apellido Materno"
              }
          }            
      }[e]  
}
