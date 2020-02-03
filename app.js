
function clockSegment (id) {
    const allSection = [];
    let clock = document.getElementById(id);
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
  
    
   
    for (let i = 1; i < 8; i++) {
        let section = document.createElement('div');
        section.classList.add('section', 's'+i);
        wrapper.appendChild(section);
        allSection.push(section);
    }

    clock.appendChild(wrapper);

function turnOn(section) {
    section.classList.remove('turnOff')
    }

function setNumber (number) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.add('turnOff');       
    }
 switch ( number) {
     case 0:
         turnOn(allSection[0]);
         turnOn(allSection[1]);
         turnOn(allSection[2]);
         turnOn(allSection[4]);
         turnOn(allSection[5]);
         turnOn(allSection[6]);
         break;
    case 1:
        turnOn(allSection[2]);
        turnOn(allSection[5]);
        break;
    case 2:
         turnOn(allSection[1]);
         turnOn(allSection[2]);
         turnOn(allSection[3]);
         turnOn(allSection[4]);
         turnOn(allSection[6]);
        break;
    case 3:
        turnOn(allSection[1]);
        turnOn(allSection[2]);
        turnOn(allSection[3]);
        turnOn(allSection[5]);
        turnOn(allSection[6]);
        break;
    case 4:
         turnOn(allSection[0]);
         turnOn(allSection[2]);
         turnOn(allSection[3]);
         turnOn(allSection[5]);
        break;
    case 5:
         turnOn(allSection[0]);
         turnOn(allSection[1]);
         turnOn(allSection[3]);
         turnOn(allSection[5]);
         turnOn(allSection[6]);
        break;
    case 6:
         turnOn(allSection[0]);
         turnOn(allSection[3]);
         turnOn(allSection[4]);
         turnOn(allSection[5]);
         turnOn(allSection[6]);
        break;
    case 7:
         turnOn(allSection[1]);
         turnOn(allSection[2]);
         turnOn(allSection[5]);
        break;
    case 8:
         turnOn(allSection[0]);
         turnOn(allSection[1]);
         turnOn(allSection[2]);
         turnOn(allSection[3]);
         turnOn(allSection[4]);
         turnOn(allSection[5]);
         turnOn(allSection[6]);
        break;
    case 9:
         turnOn(allSection[0]);
         turnOn(allSection[1]);
         turnOn(allSection[2]);
         turnOn(allSection[3]);
         turnOn(allSection[5]);
        break;

    
 }
}

return {
    setTime:setNumber
}

}


let hr1 = clockSegment('clock');
let hr2 = clockSegment('clock');
let min1 = clockSegment('clock');
let min2 = clockSegment('clock');
let sec1 = clockSegment('clock');
let sec2 = clockSegment('clock');
setInterval(function(){
    let hours = new Date().getHours().toString().split('');
    let min = new Date().getMinutes().toString().split('');
    let sec = new Date().getSeconds().toString().split('');
    hr1.setTime(+hours[0]);
    hr2.setTime(+hours[1]);
    min1.setTime(+min[0]);
    min2.setTime(+min[1]);
    sec1.setTime(+sec[0]); 
    sec2.setTime(+sec[1]);
   
}, 1000);
























