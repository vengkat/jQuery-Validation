
function ValidateForm(){    
    var validation = false;
    var ValidTexts = ValidateTextBoxes();
    var ValidDropdowns = ValidateDropdowns();
    if(ValidTexts && ValidDropdowns){
        validation = true;
    }    
    return validation;
}

/* Validate All the textbox in the page */
function ValidateTextBoxes(){
    var txtBoxResult = true;
    $("input").each(function() {
        var input = $(this);
        if(input.hasClass("required")){
            var valid = CheckIfValidTextbox(input);
            ApplyStyles(input,valid,"required");
            if(valid && (input.hasClass("number") || input.hasClass("email") || input.hasClass("phone-number"))){
                var valResult = CheckIfValidData(input);
                ApplyStyles(input,valResult,"invalid");
                if(!valResult){
                    txtBoxResult = false;
                }
            }
            else{
                txtBoxResult = false;
            }
        }
        console.log(`Input - ${$(this)[0].id} Validation result - ${txtBoxResult}`);
    });
    return txtBoxResult;
}

/* Validate all the dropdowns in the page */
function ValidateDropdowns(){
    var txtDropdownresult = true;
    $("select").each(function() {
        var input = $(this);
        if(input.hasClass("required")){
            var valid = CheckIfValidDropdown(input);
            ApplyStyles(input,valid,"required");
            if(!valid){
                txtDropdownresult = false;
            }
        }
        console.log(`Input - ${$(this)[0].id} Validation result - ${txtDropdownresult}`);
    });
    return txtDropdownresult;
}

function ApplyStyles(input,IsValid,errorCatg){
    if(!IsValid){
      ApplyErrorStyles(input,errorCatg);
    }
     else{
        RemoveErrorStyles(input)
     }   
}

function ApplyErrorStyles(input,errorCatg){
    if(!input.hasClass("requiredBox")){
        input.addClass("requiredBox");
        input.focus();
        input.parent().next().css("display", "block");
        input.parent().next().html($(input).attr("name") + " is "+errorCatg);
    }
}

function RemoveErrorStyles(input){
    if(input.hasClass("requiredBox")){
        input.removeClass("requiredBox");
        input.parent().next().css("display", "none");
        input.parent().next().html("");
    }
}

/* Method : CheckIfValidData */
/* Purpose : Performs the data validation of text boxes */
function CheckIfValidData(input){
    var result = false;
    var inputValue = input.val();
    /* Check if the input is a valid number */
    if(input.hasClass("number"))
    {
        if(!isNaN(inputValue)){
            result = true;
        }
    }
    /* Check if the input is a valid email */
    if(input.hasClass("email"))
    {
        var isValid = validateEmail(inputValue);
        if(isValid){
            result = true;
        }
    }
    /* Check if the input is a valid phone number */
    if(input.hasClass("phone-number"))
    {
        var isValid = validatePhNumber(inputValue);
        if(isValid){
            result = true;
        }
    }
    return result;
}

/* Method : validateEmail */
/* Purpose : returns true if the input is a valid email. Otherwise returns false */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/* Method : validatePhNumber */
/* Purpose : returns true if the input is a valid phone number. Otherwise returns false */
function validatePhNumber(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}

/* Method : CheckIfValidTextbox */
/* Purpose : returns true if the input is a valid text and not empty. Otherwise returns false */
function CheckIfValidTextbox(input){
    var result = false;
    var inputValue = input.val();
    if(inputValue){        
        result = true;        
    }
    return result;
}

/* Method : CheckIfValidDropdown */
/* Purpose : returns true if the dropdown has a value and not the default select message. Otherwise returns false */
function CheckIfValidDropdown(input){
    var result = false;
    var inputValue = input.val().toLowerCase();
    if(inputValue){
        if(inputValue.includes("select")){
            result = false;
        }
        else{
            result = true;
        }
    }
    else{
        result = false;
    }
    return result;
}