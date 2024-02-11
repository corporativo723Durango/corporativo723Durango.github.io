
$(document).ready(function(){
        let nI="foto-Cliente"
        let s = JSON.parse(localStorage.getItem("sesion"));
        let $t = $("<table>").attr("id","listFiles").addClass("listaF")
        let $sp ='<span class="material-icons">radio_button_unchecked</span>'
        let $spx ='<span class="material-icons">check_circle</span>'
        let $tr = (_d)=>{
            let $a="",$b="";
            if (_d.length == 2)
                $a = $("<td>").attr({"id":_d[1].id,"rowspan":_d[1].rs}).addClass(_d[1].c).html(_d[1].h) 
            $b =  $("<td>").attr({"id":_d[0].id,"rowspan":_d[0].rs}).addClass(_d[0].c).html(_d[0].h)
            return  $("<tr>").html($b).append($a)
       }
       
                $t.html($tr([{rs:"3",c:"subTit",h:"Credencial Elector"},{id:"foto-Cliente",rs:"1",c:"celCk",h: $spx+" Foto Registro"}]))
                $t.append($tr([{id:"ine-frente",rs:"1",c:"celCk",h: $sp+" Frente"}]))
                $t.append($tr([{id:"ine-reverso",rs:"1",c:"celCk",h: $sp+" Reverso"}]))
                $t.append($tr([{rs:"3",c:"subTit",h:"Vivienda"},{id:"viv-fachada",rs:"1",c:"celCk",h: $sp+" Fachada"}]))
                $t.append($tr([{id:"viv-interior1",rs:"1",c:"celCk",h: $sp+" Interior 1"}]))
                $t.append($tr([{id:"viv-interior2",rs:"1",c:"celCk",h: $sp+" Interior 2"}]))
                $t.append($("<span>").addClass("material-symbols-outlined cerrar").html("upload").
                        click(function(){     
                               $(`#fotosCli`).addClass("ocultar")               
                                pC = parseInt($(".cerrar").attr("id"))
                                console.log(pC)
                                let id = crede[pC].cliente
                                carp = nI == "foto-Cliente" ? "clientes": (nI.substring(0,3)=="ine" ? "INE":"vivienda")
                                crede[pC].update({url:`/uploadFile/${id}/${carp}\\${nI}`})
                                crede[pC].url=`/uploadFile/${id}/${carp}\\${nI}`
                                crede[pC].startUpload()
                               
                            }))
        $(`#fotosCli`).html($t)  //.click(function(){  $(`#fotosCli`).addClass("ocultar") })

          
    $(".celCk").click(function(eventObject){
        nI = eventObject.currentTarget.id
        $(".celCk span").html("radio_button_unchecked")
        $(eventObject.currentTarget.children[0]).html("check_circle")
    })

    




})