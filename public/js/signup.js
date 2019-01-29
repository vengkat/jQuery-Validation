var result = true;
function CreateAccount(){
    result = ValidateForm();
    if(result){
        console.log("Validation success");
    }
    else{
        console.log("Validation failed");
    }
}