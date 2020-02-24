window.addEventListener("load", function(){
    const completeForm = document.getElementById("studentInput");
    let name = document.querySelector("input[name=name]");
    let age = document.querySelector("input[name=age]");

    completeForm.addEventListener("submit", function(event){
        if (name.value==="" || age.value===""){
            alert("One or more fields are missing required entry.");
            event.preventDefault();
        };
    });
});