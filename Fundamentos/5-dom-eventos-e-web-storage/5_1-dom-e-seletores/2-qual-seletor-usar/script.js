const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'lightsalmon';


const emergencyHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyHeaders.length; index += 1 ){
  emergencyHeaders[index].style.backgroundColor = 'purple';
  console.log(emergencyHeaders[index]);
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = '#ffdb58';


const noEmergencyHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyHeaders.length; index += 1 ){
  noEmergencyHeaders[index].style.backgroundColor = 'black';
  console.log(emergencyHeaders[index]);
}

const footer = document.getElementsByTagName('footer');
footer[0].style.backgroundColor = 'darkgreen'
