function checklogin(){
    const username = document.querySelector("#user").value;
    const password = (parseInt(document.querySelector("#password").value));
    const errorMessage = document.querySelector("#errormessage")


    const validusername = "riyajul";
    const validpassword = 123;
    
    
    console.table([username, password,errorMessage])

    if(username === validusername && password === validpassword){
        window.location.href = "home.html";
        alert("login successful")
    }
    else{
        errorMessage.textContent = "Invalid userId and Password !"
         alert("your userid and password incorrect")
        errorMessage.style.color = "red"
    }
}



