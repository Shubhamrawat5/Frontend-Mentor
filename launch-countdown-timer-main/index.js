let days = 10;
let hours = 6;
let min = 0;
let sec = 10;

function setTime(days, hours, min, sec) {
  let d = String(days)
  if (d.length == 1) d = "0" + d;

  let h = String(hours)
  if (h.length == 1) h = "0" + h;

  let m = String(min)
  if (m.length == 1) m = "0" + m;

  let s = String(sec)
  if (s.length == 1) s = "0" + s;

  setTimeout(function() {
    document.querySelector(".days").lastElementChild.innerText = d;
    document.querySelector(".hours").lastElementChild.innerText = h;
    document.querySelector(".minutes").lastElementChild.innerText = m;
    document.querySelector(".seconds").lastElementChild.innerText = s;
  }, 180);
}

setTime(days, hours, min, sec);

function refresh() {
  sec = sec - 1;
  if (sec < 0) {
    sec = 59;
    min = min - 1;
    document.querySelector(".minutes").classList.add("effect");
    setTimeout(function() {
      document.querySelector(".minutes").classList.remove("effect");
    }, 1000);
  }

  if (min < 0) {
    min = 59;
    hours = hours - 1;
    document.querySelector(".hours").classList.add("effect");
    setTimeout(function() {
      document.querySelector(".hours").classList.remove("effect");
    }, 1000);
  }

  if (hours < 0) {
    hours = 23;
    days = days - 1;
    document.querySelector(".days").classList.add("effect");
    setTimeout(function() {
      document.querySelector(".days").classList.remove("effect");
    }, 1000);
  }

  if (days < 0) {
    days = 0;
    hours = 0;
    min = 0;
    sec = 0;
    clearInterval(x);
    setTimeout(function() {
      document.querySelector(".seconds").classList.remove("effect");
    }, 1000);
  }

  //console.log(days,hours,min,sec);
  setTime(days, hours, min, sec);

}

let x = setInterval(refresh, 1000);
