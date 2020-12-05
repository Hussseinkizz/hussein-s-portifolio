const navIsClosed = document.querySelector('.mobile-nav-open');
const navIsOpen = document.querySelector('.mobile-nav-closed');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');


let showMenu = false;

openBtn.addEventListener('click', OpenMenu);
 
function OpenMenu () {
    if(!showMenu) {
navIsClosed.classList.remove("hidden");
navIsOpen.classList.add("hidden");

        showMenu = true;
    } else {
        navIsOpen.classList.remove("hidden");
        navIsClosed.classList.add("hidden");

        showMenu = false;
    }
}

let hideMenu = true;

closeBtn.addEventListener('click', closeMenu);
 
function closeMenu () {
    if(hideMenu) {
        navIsOpen.classList.remove("hidden");
        navIsClosed.classList.add("hidden");

        hideMenu = false;
    } else {
        navIsClosed.classList.remove("hidden");
        navIsOpen.classList.add("hidden");

        hideMenu = true;
    }
}