const clock = document.querySelector("#clock")

setInterval(() => {
    let time = new Date; 
    clock.innerHTML = `${time.getHours()} : ${time.getMinutes()} : ${ time.getSeconds()}`    
}, 1000);
 