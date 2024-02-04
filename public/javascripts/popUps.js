$(document).ready(function(){
        let $t = $("<table>").attr("id","listFiles").addClass("listaF")
        let $sp ='<span class="material-icons">radio_button_unchecked</span>'
        let $tr = (_d)=>{
            let $a="",$b="";
            if (_d.length == 2)
                $a = $("<td>").attr({"roespan":_d[1].rs}).addClass(_d[1].c).html(_d[1].h) 
            $b =  $("<td>").attr({"rowspan":_d[0].rs}).addClass(_d[0].c).html(_d[0].h)
            return  $("<tr>").html($b).append($a)
       }
                $t.html($tr([{rs:"2",c:"subTit",h:"Credencial Elector"},{rs:"1",c:"celCk",h: $sp+" Frente"}]))
                $t.append($tr([{rs:"1",c:"celCk",h: $sp+" Reverso"}]))
                $t.append($tr([{rs:"3",c:"subTit",h:"Vivienda"},{rs:"1",c:"celCk",h: $sp+" Fachada"}]))
                $t.append($tr([{rs:"1",c:"celCk",h: $sp+" Interior 1"}]))
                $t.append($tr([{rs:"1",c:"celCk",h: $sp+" Interior 2"}]))
         $(`#fotosCli`).html($t).click(function(){  $(`#fotosCli`).addClass("ocultar") })

          
    $(".celCk").click(function(eventObject){
        $(".celCk span").html("radio_button_unchecked")
        $(eventObject.currentTarget.children[0]).html("check_circle")
        $("#fotosCli").addClass("ocultar")
    })




})