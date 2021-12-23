class Clock {
  constructor(elem) {
    this.createDate = elem;
    this.fullFormat = false;
    this.hours;
    this.min;
    this.sec;
  }
  switchFormat() {
    this.fullFormat = !this.fullFormat;
  }
  showDate() {
    console.log('some date');
  }
}

class Full extends Clock {
  showDate() {
    let date = new Date();
    this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
    this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
    this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    this.msec = (date.getMilliseconds() < 10) ? '0' + date.getMilliseconds() : date.getMilliseconds();
    let formatDate = this.fullFormat ? this.hours + ':' + this.min + ':' + this.sec + ':' + this.msec : this.hours + ':' + this.min + ':' + this.sec;  
    this.createDate.innerHTML = `<p>${formatDate}</p>`;
  }
}

class Short extends Clock {
  showDate() {
    let date = new Date();
    this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
    this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(); 
    let formatDate =  this.fullFormat ? this.hours + ':' + this.min + ':' +this.sec : this.hours + ':' + this.min;  
    this.createDate.innerHTML = `<p>${formatDate}</p>`;
  }
}

let createDateShort = document.getElementById('short-clock');
let createDateFull = document.getElementById('full-clock');

let short = new Short(createDateShort);
let full = new Full(createDateFull);

createDateShort.addEventListener('click', () => {
  short.switchFormat();
});

createDateFull.addEventListener('click', () => {
  full.switchFormat();
});

setInterval(() => {
  full.showDate();
  short.showDate();
}, 1000);



