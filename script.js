window.addEventListener("load", function(){
    const completeForm = document.getElementById("studentInput");
    const button = document.getElementById("submitButton");


    completeForm.addEventListener("submit", function(event){
            const degree = document.getElementById("degree").value;
            const progress = document.getElementById("progress").value;
            const name = document.querySelector("input[name=name]");
            const age = document.querySelector("input[name=age]");
            const peerMentor = document.getElementById("peerMentor");
            
            if (name.value==="" || progress==="" || degree===""){
                alert("One or more fields are missing required entry.");
                event.preventDefault();
            };
            if (name.value!=="" && progress!=="" && degree!==""){
                peerMentor.style.visibility = "visible";
                event.preventDefault();
                };
            if(degree === "arts"){
                if (progress === "firstYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Preston Carver - Specialty: First Year Associate in Arts students
                    `;
                    event.preventDefault();
                }else if (progress === "secondYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Ryan Nelson - Specialty: Second Year Associate in Arts students
                    `;
                    event.preventDefault();
                }else if (progress === "returning"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Skylar Lee - Specialty: Returning Associate in Arts students
                    `;
                    event.preventDefault();
                };
            }else if(degree === "science"){
                if (progress === "firstYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Liam Oliver - Specialty: First Year Associate in Science students
                    `;
                    event.preventDefault();
                }else if (progress === "secondYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Alex Trotter - Specialty: Second Year Associate in Science students
                    `;
                    event.preventDefault();
                }else if (progress === "returning"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Jeremy Linton - Specialty: Returning Associate in Science students
                    `;
                    event.preventDefault();
                };            
            }else if(degree === "cert"){
                if (progress === "firstYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Michael Scott - Specialty: First Year Certification Program students
                    `;
                    event.preventDefault();
                }else if (progress === "secondYear"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Baron James - Specialty: Second Year Certification Program students
                    `;
                    event.preventDefault();
                }else if (progress === "returning"){
                    peerMentor.innerHTML=`
                    Your Peer Mentor is: Gina Castillo - Specialty: Returning Certification Program students
                    `;
                    event.preventDefault();
                };            
            }else if(degree === "noncredit"){
                peerMentor.innerHTML=`
                Your Peer Mentor is: Stephanie Kirkwood - Specialty: Non Credit students
                `;
            }else{
                alert("Something went wrong. Please try again.");
                event.preventDefault();
            };
    });
});
