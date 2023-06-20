// Write your JavaScript code here.
// Remember to pay attention to page loading!



function init(){
    let rocket = document.getElementById("rocket");
    let takeoffbutton = document.getElementById("takeoff");
          takeoffbutton.addEventListener('click', event => {
    let confirmAction = confirm("Confirm that the shuttle is ready for takeoff.");
    if (true) {
      let flightStatus = document.getElementById("flightStatus");
        document.getElementById("flightStatus").innerHTML = 'Shuttle in flight.';
    let shuttleBackground = document.getElementById("shuttleBackground");
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    document.getElementById("spaceShuttleHeight").innerHTML = +10000;
        }
    });

    let landbutton = document.getElementById("landing");
          landbutton.addEventListener('click', event => {
            alert("The shuttle is landing. Landing gear engaged.");
            let flightStatus = document.getElementById("flightStatus");
        document.getElementById("flightStatus").innerHTML = 'The shuttle has landed.';
        let shuttleBackground = document.getElementById("shuttleBackground");
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    document.getElementById("spaceShuttleHeight").innerHTML = 0;

    let abortmissionbutton = document.getElementById("missionAbort");
          abortmissionbutton.addEventListener('click', event => {
    let confirmAction = confirm("Confirm that you want to abort the mission.");
    if (true) {
      let flightStatus = document.getElementById("flightStatus");
        document.getElementById("flightStatus").innerHTML = 'Mission aborted.';
    let shuttleBackground = document.getElementById("shuttleBackground");
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });
          });

          let rightbutton = document.getElementById("right");
          rightbutton.addEventListener('click', function(moveright) {
            rocket.style.position = "absolute"
            rocket.style.right= +10 + "px";
          });
          let leftbutton = document.getElementById("left");
          leftbutton.addEventListener('click', function(moveleft) {
            rocket.style.position = "absolute"
            rocket.style.left= 10 + "px";
          });
          let upbutton = document.getElementById("up");
          upbutton.addEventListener('click', function(moveup) {
            rocket.style.position = "absolute"
            rocket.style.top= +10 + "px";
            spaceShuttleHeight.innerHTML = +10000;
          });
          let downbutton = document.getElementById("down");
          downbutton.addEventListener('click', function(movedown) {
            rocket.style.position = "absolute"
            rocket.style.bottom= -10 + "px";
            spaceShuttleHeight.innerHTML = -10000;
          });
};



window.addEventListener('load', init)