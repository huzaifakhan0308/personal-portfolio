/* eslint-disable no-unused-vars */
const menuIcon = document.querySelector('.menuicon-a');
const mobileMenu = document.querySelector('.mobile-menu');

function mobileMenuButton() {
  menuIcon.classList.add('menu-icon-disappear');
  mobileMenu.classList.add('mobile-menu-appear');
}

mobileMenu.addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'mobile-menu-disappear-button') {
    menuIcon.classList.remove('menu-icon-disappear');
    mobileMenu.classList.remove('mobile-menu-appear');
  } else if (e.target.classList[0] === 'mobile-menu-tags') {
    menuIcon.classList.remove('menu-icon-disappear');
    mobileMenu.classList.remove('mobile-menu-appear');
  }
}));

const storeData = [
  {
    name: 'Tonic',
    imagesrc: 'assets/images/project1 img.svg',
  },
  {
    name: 'Multi-post',
    imagesrc: 'assets/images/project2 img.svg',
  },
  {
    name: 'Tonic',
    imagesrc: 'assets/images/project3 img.svg',

  },
  {
    name: 'Multi-post',
    imagesrc: 'assets/images/project4 img.svg',

  },
];

const popups = document.querySelector('.popups');
const popupsProjectImage = document.querySelector('.popups-project-img');
const popupProjectTitle = document.querySelector('.popup-project-title');

function popupsDisappearButton() {
  popups.style.display = 'none';
}

function projectViewButton1() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[0].imagesrc;
  popupProjectTitle.innerHTML = storeData[0].name;
}

function projectViewButton2() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[1].imagesrc;
  popupProjectTitle.innerHTML = storeData[1].name;
}

function projectViewButton3() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[2].imagesrc;
  popupProjectTitle.innerHTML = storeData[2].name;
}

function projectViewButton4() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[3].imagesrc;
  popupProjectTitle.innerHTML = storeData[3].name;
}
