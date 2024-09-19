function validateForm() {
    const a = document.getElementById("nam").value;
    const b = document.getElementById("mail").value;
    const c = document.getElementById("pass").value;
    const d = document.getElementById("pass1").value;

    if (!a || !b || !c || !d) {
        alert("Fill all fields.");
        return false;  
    }

    if (c.length < 8) {
        alert("Password length must be greater than 8 characters.");
        return false;
    }

    if (c !== d) {
        alert("Passwords do not match.");
        return false;
    }

   
    localStorage.setItem("e", b);
    localStorage.setItem("p", c);
    localStorage.setItem("n", a);

    alert("registeration successful, redirecting...");
    window.location.href = "login.html"; 
    return false;  
}

function check() {
    a=document.getElementById("mail1").value;
    b=document.getElementById("passs").value;
    x= localStorage.getItem("e");
    y= localStorage.getItem("p");
    if(a !== x && b !== y){
        alert("invalid login");
        return false;
    }
    alert("login successful, redirecting...");
    window.location.href = "pro.html";
    return false;
}

window.onload = function() {
    const name = localStorage.getItem("n");
    const email = localStorage.getItem("e");
    const password = localStorage.getItem("p");

    document.getElementById("profile-name").innerText = name ? name : "Not available";
    document.getElementById("profile-email").innerText = email ? email : "Not available";
    document.getElementById("profile-password").innerText = password ? password : "Not available";
}
