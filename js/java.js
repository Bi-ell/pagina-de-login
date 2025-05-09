function faz_login(event){
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if(email == "biel@gmail.com" && password == "biel@123"){
        alert("login realizado com sucesso!")
        window.location.href = "home.html"
    }else{
        alert("usuario não cadastrado, reveja seus dados.")
    }
}