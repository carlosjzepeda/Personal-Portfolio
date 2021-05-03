function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  let midDay = (hour >= 12) ? " PM" : "   AM ";
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
  document.querySelector('#time').innerHTML = hour + ":" + min + ":" + sec + midDay;

  let timeout = setTimeout(() => {
    currentTime()

  }, 1000);
}

function updateTime(time) {
  if (time < 10) {
    return '0' + time
  } else {
    return time
  }
}
currentTime();


//scroll to top button

let button = document.querySelector('.home-btn')

button.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
})
//GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

gsap.from('.navtext', {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "back",
  stagger: .05
});

gsap.from('.about-page', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "back",
})