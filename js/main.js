const link = document.getElementsByTagName('a');
let l = link.length;
let v = 0;
let x = 0;
const globe = document.getElementsByClassName('globe');
const influence_h1 = document.getElementsByClassName('boost');
const date = document.getElementsByClassName('date');
const header = document.getElementById('header');
const mobile_header = document.getElementById('mobile-header');
const list_button = document.getElementById('list-button');
const li_invisible = document.getElementsByClassName('mobile-li');
const len = li_invisible.length - 1;

// const li_invisible = document.getElementsByClassName('mobile-li');
// var count = 0, length = li_invisible.length;
// var interval = setInterval(function(){
//     if(count == length)
//         clearInterval(interval);

//         li_invisible.eq(count++).addClass('.mobile-header__li_invisible ');
// }, 500)


list_button.onclick = function l_button() {
  if (document.getElementById('header-list').classList.contains('invisible') == false) {
    const li_invisible = document.getElementsByClassName('mobile-li');
    var count = 0, length = li_invisible.length;
    var interval = setInterval(function(){
      if(count == length - 1)
          clearInterval(interval);

          li_invisible[count++].classList.remove('mobile-header__li_invisible');
      }, 0)

      document.getElementById('header-list').classList.add('invisible');
      document.getElementById('blur').classList.add('invisible');
      list_button.innerHTML = ('MENU');
      document.getElementById('list-button').classList.remove('cross');

  }

  else if (document.getElementById('header-list').classList.contains('invisible') == true) {
    document.getElementById('header-list').classList.remove('invisible');
    document.getElementById('blur').classList.remove('invisible');
    list_button.innerHTML = ('✕');
    document.getElementById('list-button').classList.add('cross');

    const li_invisible = document.getElementsByClassName('mobile-li');
    var count = 0, length = li_invisible.length;
    var interval = setInterval(function(){
      if(count == length - 1)
          clearInterval(interval);

          li_invisible[count++].classList.add('mobile-header__li_invisible');
      }, 200)

  }
}

const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('not_inframe_left'); 
            entry.target.classList.add('inframe_left')
        }

        else {
          entry.target.classList.add('not_inframe_left'); 
            entry.target.classList.remove('inframe_left')
        }

      });
    },
    {
      rootMargin: "-10% 250% -10% 250%"
    }
  );

window.onscroll = function header_changer() {
  const header_change_line = document.getElementById('second-section').getBoundingClientRect();
  let x = header_change_line.top + window.scrollY;
  // console.log(header);

  if (document.documentElement.scrollTop >= x) {
    header.classList.add('black-background')
    mobile_header.classList.add('black-background')
  }

  else {
    header.classList.remove('black-background')
    mobile_header.classList.remove('black-background')
  }

}

// window.onscroll = function header_changer_mobile() {
//   const header_change_line = document.getElementById('second-section').getBoundingClientRect();
//   let x = header_change_line.top + window.scrollY;
//   // console.log(header);

//   if (document.documentElement.scrollTop >= x) {
//     mobile_header.classList.add('black-background')
//   }

//   else {
//     mobile_header.classList.remove('black-background')
//   }

// }

document
.querySelectorAll(".not_inframe_left")
.forEach((block) => imageObserver.observe(block));

const DelayObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('not_delay_left'); 
            entry.target.classList.add('delay_left')
        }

        else {
          entry.target.classList.add('not_delay_left'); 
            entry.target.classList.remove('delay_left')
        }

      });
    },
    {
      rootMargin: "-10% 250% -10% 250%"
    }
  );



document
.querySelectorAll(".not_delay_left")
.forEach((block) => DelayObserver.observe(block));

const imageObserverRight = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('not_inframe_right'); 
            entry.target.classList.add('inframe_right')
        }

        // else {
        //   entry.target.classList.add('not_inframe_right'); 
        //     entry.target.classList.remove('inframe_right')
        // }

      });
    },
    {
      rootMargin: "-10% 250% -10% 250%"
    }
  );



document
.querySelectorAll(".not_inframe_right")
.forEach((block) => imageObserverRight.observe(block));

const DelayObserverRight = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('not_delay_right'); 
            entry.target.classList.add('delay_right')
        }

        // else {
        //   entry.target.classList.add('not_delay_right'); 
        //     entry.target.classList.remove('delay_right')
        // }

      });
    },
    {
      rootMargin: "-10% 250% -10% 250%"
    }
  );



document
.querySelectorAll(".not_delay_right")
.forEach((block) => DelayObserverRight.observe(block));

window.onload = function start() {

    for (i = 0; i < l; i++){
        link[i].onmouseover = function animation(i) {
            v = i.target;
            v.classList.add('animation-underline')
        }

        link[i].onmouseout = function animation_out(i) {
            v = i.target;
            v.classList.remove('animation-underline')
        }
    }
    
    if (i >= l) {
        i = i - l;
    }

    

}




