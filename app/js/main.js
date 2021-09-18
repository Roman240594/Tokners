const menuButton = document.getElementById('burgerBtn');
const menuList = document.getElementById('navList');
const menuLineTop = document.getElementById('burgerBtnLineTop');
const menuLineCenter = document.getElementById('burgerBtnLineCenter');
const menuLineBottom = document.getElementById('burgerBtnLineBottom');

menuButton.onclick = function () {
    menuList.classList.toggle('nav__list_active');
    menuLineTop.classList.toggle('burger-btn__line-top_active');
    menuLineCenter.classList.toggle('burger-btn__line-center_active');
    menuLineBottom.classList.toggle('burger-btn__line-bottom_active');
}