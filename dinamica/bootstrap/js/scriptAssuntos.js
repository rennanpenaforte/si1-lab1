/**
 * Created by rennanpenaforte on 28/10/14.
 */

$(document).ready(function(){

    $("form").on("click", "#adicionar", function(){

        entrada = $("#input_materia").val();

        if (entrada != " "){

            entrada = "<p>" + entrada + "</p>";
            mover = "<button class='btn btn-success mover'> Já sei!</button>";
            remover = "<button class='btn btn-danger remover'> Remover</button>";
            $("#body_aprender").append("<li>"+ entrada + mover + remover +"</li>" );
            $("#input_materia").val("");

        }
        
    });

    $("#body_aprender").on("click", ".mover", function(){
        var parent = $(this).parent();
        var assunto = parent.find("p").text();
        $("#body_aprendidas").append("<li>" + assunto + "</li>");
        parent.remove();
    });

    $("#body_aprender").on("click",".remover", function(){
        $(this).parent().remove();
    });


});
