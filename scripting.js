
let arr = document.querySelectorAll('.link');
let add = document.querySelectorAll('.intro h2');
let scroll = document.querySelectorAll('.scroll');
let a = document.querySelectorAll('a');
let position = true;
console.log("checking for work");
arr.forEach((item, index) => {
    setTimeout(() => {
        console.log("this is working loop for array");
        console.log('Accessing item ' + (index + 1) + ': ' + item.textContent);
        item.classList.add("add");
    }, index * 200)
});

var typed = new Typed('.text', {
    strings: ['Web Developer', 'Front-End Dev','Tech-Enthusiast'],
    typeSpeed: 50,
    loop:true
  });



