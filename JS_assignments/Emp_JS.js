function submit() {
    let info = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        exp: document.getElementById("exp").value,
        intern: document.getElementById("intern").value,
        junior: document.getElementById("junior").value,
        mid: document.getElementById("mid").value,
        princcipal: document.getElementById("princ").value,
        yes: document.getElementById("yes").value,
        no: document.getElementById("no").value,

    }
    console.log(info);
}