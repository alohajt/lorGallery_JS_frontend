//login form
const loginForm = document.querySelector(".login")
const getUsers = document.querySelector(".get-users")

loginForm.addEventListener("submit", handleLogin);
getUsers.addEventListener("click", handleGetUsers);

function handleGetUsers(){
    fetch("http://localhost:3000/users", {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${ localStorage.getItem("token") }`
            //"Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(response => response.json())
    .then(console.log)
}

function handleLogin(event){
    event.preventDefault()
    // event.target is loginForm
    const loginFormData = new FormData(event.target)
    const username = loginFormData.get("username")
    const password =loginFormData.get("password")

    // console.log(username)
    // console.log(password)

    const loginBody =  {username, password}

    fetch("http://localhost:3000/login", {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(loginBody)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.token)
        localStorage.setItem("token", result.token) //in Application > localStorage
    })
    .then(window.location.replace("http://localhost:3001/galleryPage.html"))
    // wont refresh the page
    event.target.reset() 

    

    
}