function ajusteAle(obj){
        return {
                "nuevoCli":function(){
                                $("#a1")[0].click()
                                $(".simbolMap").click(function(){
                                            $("#mapaUbi").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8389.465641318115!2d-104.65716831932048!3d24.020739017949932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1706169177361!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`).toggle(function(){
                                            $(this).animate({width:"400px",height:"300px",border:"1px solid red"},2000)})});
                                    $("#ocr").on({click: function(){$("#grupoElec").toggleClass("ocultar")} });
                                    $("input[type=text], input[type=number] ").on({ mousemove: function(x) {popInfo(x)}, mouseleave: function(x) {$("#popUp").addClass("ocultar")}}); 
                                    onApiLoad("https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho&libraries=places,search&callback=initMap&v=weekly")
                                    $("#cp").keyup(e=>{  let cp = parseInt($("#cp").val())
                                    if(cp >= 34000)  $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {$("#col").html("");data.forEach(e=>{ $("#colonia").append($("<option>").val(e).html(e))})});
                                    else $("#colonia").html("")})
                                ele = $("#fileuploader").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,zip",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showCancel:true,statusBarWidth:100,dragdropWidth:800,cliente:obj.$c[0],uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi",onSelect: function(files){console.log( $(files))},onSubmit: function(obj,xhr){  console.log(obj,xhr)  }})        
                                evi =$("#upload-evidencias").uploadFile({url:"/uploadFile",fileName:"misFiles",allowedTypes:"png,jpg,jpeg,bmp,mp4,avi,flv",showPreview:true,previewHeight:"50px",previewWidth:"auto",autoSubmit:false,showAbort:true,showDelete:true,statusBarWidth:100,uploadButtonClass:"botonSubir",dragDropContainerClass:"dragDropEvi"})                               
                        },
                    "login":function(){
                             
                        },
                    "actualizaCli":function(){


                    },
                    "muestraCli":function(){
                        $("#btnBuscar").on({click:function(){ 
                            $.get(`/cliente/buscar/${$("#inpBuscar").val()}`).done(cli=>{
                                 $("#muestraCli").append($("<div>").html(JSON.stringify(cli.datos)))
                            })
                        }})


                    }
             }[obj.id]
        }


function onApiLoad(url){
    $("body").append($("<script>").attr("src",url))
}








function popInfo(e){  
    fetch('/textos')
    .then((response) => response.json())
    .then((json) => {
         obj = JSON.parse(json)[0]
         o = obj.nuevoCli.tooltip
         $("#popUp").html($("<div>").addClass("popInfo").html(o[e.currentTarget.id]).css({"top":e.pageY+"px","left":e.pageX+"px"}))
         $("#popUp").removeClass("ocultar")
        })
}
