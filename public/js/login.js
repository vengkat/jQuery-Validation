var host = location.host;
var user = {
    UserName :"Venkat",
    Password:"sfasdf"
}
function Login(){
    console.log("Login :: User - "+user);
    $.ajax({
            type: "POST",
            url: "/login",
            data: user,
            success: LoginSuccessCallback,
            dataType: 'application/json'
        });
}

function LoginSuccessCallback(data)
{
    console.log("Login success - "+data)
};