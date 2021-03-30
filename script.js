// Write your JavaScript code here!
  function init () {
  //const pilotName = document.getElementById("pilotName");
  const launchStatus = document.getElementById("launchStatus");
  const faultyItems=document.getElementById("faultyItems");
  const fuelStatus = document.getElementById("fuelStatus");
  
  let button= document.getElementById("formSubmit");
  button.addEventListener("click", function (event) { 
      //alert("submit clicked");
      
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      let input = document.getElementById("pilotStatus");
              input.value = input.value +  `${pilotName}`;
              console.log(input.value);
      let input2 = document.getElementById("copilotStatus");
              input2.value = input2.value +  `${copilotName}`;
              console.log(input2.value);
              
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel==="" || cargoMass==="") {
      alert("All fields are required!");
    }
    if (isNaN(fuelLevel.value) || isNaN(cargoMass.value )) {
       alert("Fuel Level and Cargo Mass must be a number!"); 
    }
  
    //function update() {
    let button= document.getElementById("formSubmit");
    button.addEventListener("click", function (event) { 
    let input3 = document.getElementById("launchStatus");
      //console.log(input3.value);
    //launchStatus.addEventListener("click", function() {
    if (fuelLevel.value < 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      document.getElementById("launchStatus").style.color = "red";
      faultyItems.style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = "There isn't enough fuel for the journey.";
    }
    if (cargoMass.value > 10000) {
       faultyItems.style.visibility = "visible";
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      document.getElementById("launchStatus").style.color = "red";
       document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
  }
})
  event.preventDefault();
    })
  }


  
  window.addEventListener("load", init);
    
     //aultyItems.addEventListener("click", function(event) { 
      
   
    
     
     
      
    
  
  
 
    


    
  
  
  //     
  //     // let input3=document.getElementById("launchStatus");
  //     // console.log(input3.value);
      
  //   })
  // }
  

    
  


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
