window.addEventListener("load", function(){
    const completeForm = document.getElementById("studentInput");
    let name = document.querySelector("input[name=name]");
    let age = document.querySelector("input[name=age]");
    let degree = document.querySelector("input[name=degree]");
    let progress = document.querySelector("input[name=progress]");
    // let peerMentor = document.getElementById("peerMentor");
    

    completeForm.addEventListener("submit", function(event){
       
        if (name.value==="" || age.value===""){
            alert("One or more fields are missing required entry.");
            event.preventDefault();
        };
        // if (name.value!=="" && age.value!==""){
        //    degree.style.visibility = "visible";
        //    event.preventDefault();
        // };
        // switch(degree.value){
        //     case "Associate in Arts":
        //         if (age <= 22){
        //             if (progress.value === "First Year"){
        //                 document.getElementById("peerMentor").innerHTML="Your Peer Mentor is: Preston Carver\nSpecialty: First Year Associate in Arts students";
        //                 event.preventDefault();
        //             }
        //         break;
        //         }
        //     default:
        //         alert("One or more fields are missing required entry.");
        //         event.preventDefault();
        //         break;        
        // }
    });
});