let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle("move");
};

window.onscroll = () =>{
  navbar.classList.remove('open-menu')
  menu.classList.remove("move");
}

// Header background change on Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
})

// Scroll top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
})

// Efeito Scroll
    const menuItems = document.querySelectorAll('.menu a[href^="#"]');

    menuItems.forEach(item => {
      item.addEventListener('click', scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
      event.preventDefault();
      const to = getScrollTopByHref(event.target) - 60;
      scrollToPosition(to);
    }

    function getScrollTopByHref(element){
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }

    function scrollToPosition(to){
      // window.scroll({
      //   top: to,
      //   behavior: "smooth",
      // });
      smoothScrollTo(0, to);
    }

        /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      duration = typeof duration !== 'undefined' ? duration : 600;

      // Easing function
      const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60); // 60 fps
    };
