async function login()
{
    let Username = document.getElementById("login")
    let Password = document.getElementById("password")

    const response = await fetch("http://localhost:3000/login",
    {
        method: "POST",
        body: JSON.stringify({
            username: Username.value,
            password: Password.value,}),
        headers: {'Content-type': 'application/json'}
    })
    if (response.ok){
        localStorage.setItem("username", Username.value)
        document.getElementsByClassName("connect")[0].style.backgroundColor = "green"
        window.location.href = "index.html";
    }
    else{
        document.getElementsByClassName("connect")[0].style.border = "red"
        alert('Неверный логин или пороль!')
    }}
let buttonLogin = document.getElementById("connect")
buttonLogin.addEventListener("click", login)