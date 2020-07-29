const desc = document.getElementById('descWrapper');
const menuBtn = document.getElementById('menuOpen');
const sideBar = document.getElementById('sideBar');
const menuItems = document.getElementById('menuItems');
const getNav = document.getElementsByTagName('NAV')[0];


function tempDescToggle() {
    if (desc.style.display === 'none') {
        desc.style.display = 'block'
    } else {
        desc.style.display = 'none'
    }

}

function hamburgerToggle() {
    if (sideBar.style.display === 'none') {
        sideBar.style.display = 'block';
        menuItems.style.right = '0';
    } else {
        sideBar.style.display = 'none';
        menuItems.style.right = '-80%';
    }
}


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });