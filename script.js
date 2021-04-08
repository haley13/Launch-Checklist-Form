// Write your JavaScript code here!
function init () {
  const pilotName = document.getElementById("pilotName");
  const launchStatus = document.getElementById("launchStatus");
  const faultyItems=document.getElementById("faultyItems");
  const fuelStatus = document.getElementById("fuelStatus");
    let button= document.getElementById("formSubmit");
    button.addEventListener("click", function (event) { 
  
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
    
              
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel==="" || cargoMass==="") {
          alert("All fields are required!");
             if (isNaN(fuelLevel.value) || isNaN(cargoMass.value )) {
               alert("Fuel Level and Cargo Mass must be a number!"); 
              }
      }
      if (fuelLevel.value < 10000) {
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle not ready for launch";
           launchStatus.style.color = "red";
           fuelStatus.innerHTML = "Fuel level too low for launch";
      }
           else if (cargoMass.value > 10000) {
              faultyItems.style.visibility = "visible";
              launchStatus.innerHTML = "Shuttle not ready for launch";
              launchStatus.style.color = "red";
              cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
               }
              else {
                launchStatus.innerHTML = "Shuttle is ready for launch.";
                launchStatus.style.color = "green";
              }  
            
        event.preventDefault();
})
}
  


  
  window.addEventListener("load", init);
  
  
  window.addEventListener("load", function(event) {
    let json=[];
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
        const div= document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                  <ol>
                  <li>Name: ${json[5].name}</li>
                  <li>Diameter: ${json[5].diameter}</li>
                  <li>Star: ${json[5].star}</li>
                  <li>Distance from Earth: ${json[5].distance}</li>
                  <li>Number of Moons: ${json[5].moons}</li>
                  </ol> 
                  <img src="${json[5].image}">
                   `;
      })
      
    });
})
