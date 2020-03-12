window.addEventListener("load", function(){
    const completeForm = document.getElementById("studentInput");
    const name = document.querySelector("input[name=name]");
    const age = document.querySelector("input[name=age]");
    const peerMentor = document.getElementById("peerMentor");
    const button = document.getElementById("submitButton");
    

    completeForm.addEventListener("submit", function(event){
        button.onclick = ()=> {
            const degree = document.getElementById("degree").value;
            const progress = document.getElementById("progress").value;

            
            if (name.value==="" || age.value===""){
                alert("One or more fields are missing required entry.");
                event.preventDefault();
            };
            // if (name.value!=="" && age.value!==""){
            //    peerMentor.style.visibility = "visible";
            //    event.preventDefault();
            // };
            if(degree === "arts"){
                // if (age <= 22){
                //     if (progress === "firstYear"){
                //         peerMentor.innerHTML=`
                //         <p>Your Peer Mentor is: Preston Carver\nSpecialty: First Year Associate in Arts students</p>
                //         `;
                //         event.preventDefault();
                //     }else if (progress === "secondYear"){
                //         peerMentor.innerHTML=`
                //         <p>Your Peer Mentor is: _____</p>
                //         `;
                //     }
                // };    
                alert("IT WORKS");
                event.preventDefault();
            }else{
                alert("DOESNT WORK");
                event.preventDefault();
            };
    };
    });
});