
function ValidateForm(){    
    var validation = true;
    $("input").each(function() {
        var id =  $(this)[0].id ;
        inp = id;
        var input = $(this);
        if(input.hasClass("required")){
            var valResult = ApplyValidation(id);
            if(!valResult){
                validation = false;
            }
        }
        console.log(`Input - ${$(this)[0].id} Validation result - ${validation}`);
    });

    $("select").each(function() {
        var id =  $(this)[0].id ;
        var input = $("#"+id);
        if(input.hasClass("required")){
            var valResult = ApplyValidation(id);
            if(!valResult){
                validation = false;
            }
        }
        console.log(`Input - ${$(this)[0].id} Validation result - ${validation}`);
    });
    
    return validation;
}

function ApplyValidation(id){
    var result = true;
    if(IsEmptyInput($("#"+id))){
        $("#"+id).addClass("requiredBox");
        $("#"+id).focus();
        $("#"+id).parent().next().css("display", "block");
        $("#"+id).parent().next().html($("#"+id).attr("name") + " is required");
        result = false;
    }else{
        $("#"+id).removeClass("requiredBox");
        $("#"+id).parent().next().css("display", "none");
        $("#"+id).parent().next().html("");
    }
    return result;
}

function IsEmptyInput(input){
    var result = false;
    var inputValue = input.val().toLowerCase();
    if(inputValue){
        if(inputValue.includes("select")){
            result = true;
        }
    }
    else{
        result = true;
    }
    return result;
}