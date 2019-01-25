
function ValidateForm(){    
    result = true;
    $("input").each(function() {
        var id =  $(this)[0].id ;
        var input = $(this);
        if(input.hasClass("required")){
            var valResult = ApplyValidation(id);
            if(!valResult){
                result = false;
            }
        }
    });
    $("select").each(function() {
        var id =  $(this)[0].id ;
        var input = $("#"+id);
        console.log("id - "+id);
        console.log("value - "+input.val());
        if(input.hasClass("required")){
            var valResult = ApplyValidation(id);
            if(!valResult){
                result = false;
            }
        }
    });
    return result;
}

function ApplyValidation(id){
    if(IsEmptyInput($("#"+id))){
        $("#"+id).addClass("requiredBox");
        $("#"+id).focus();
        $("#"+id).parent().next().css("display", "block");
        $("#"+id).parent().next().html($("#"+id).attr("name") + " is required");
    }else{
        $("#"+id).removeClass("requiredBox");
        $("#"+id).parent().next().css("display", "none");
        $("#"+id).parent().next().html("");
    }
}

function IsEmptyInput(input){
    if(input.val()){
        return false;
    }
    else{
        return true;
    }
}