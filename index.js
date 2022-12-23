/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
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
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'assets/images/project1 img.svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi-post',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imagesrc: 'assets/images/project2 img.svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'assets/images/project3 img.svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi-post',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imagesrc: 'assets/images/project4 img.svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
];

const description = document.querySelectorAll('.project-description');
for (let i = 0; i < description.length; i += 2) {
  description[i].innerHTML = storeData[0].description;
  description[i + 1].innerHTML = storeData[1].description;
}

description[0].innerHTML = storeData[0].description;
description[1].innerHTML = storeData[1].description;
description[2].innerHTML = storeData[2].description;
description[3].innerHTML = storeData[3].description;

const projectLanguagesHtmlText = document.querySelectorAll('.project-languages-html');
for (let i = 0; i < projectLanguagesHtmlText.length; i++) {
  projectLanguagesHtmlText[i].innerHTML = storeData[0].technologies[0];
}

const projectLanguagesText = document.querySelectorAll('.project-languages');
for (let i = 0; i < projectLanguagesText.length; i += 2) {
  projectLanguagesText[i].innerHTML = storeData[0].technologies[1];
  projectLanguagesText[i + 1].innerHTML = storeData[0].technologies[2];
}

const popups = document.querySelector('.popups');
const popupsProjectImage = document.querySelector('.popups-project-img');
const popupProjectTitle = document.querySelector('.popup-project-title');

function popupsDisappearButton() {
  popups.style.display = 'none';
}

const popupsBootstrapLanguageDiv = document.querySelector('.bootstrap-language');
const popupsRubyLanguageDiv = document.querySelector('.ruby-language');

function projectViewButton1() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[0].imagesrc;
  popupProjectTitle.innerHTML = storeData[0].name;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
}

function projectViewButton2() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[1].imagesrc;
  popupProjectTitle.innerHTML = storeData[1].name;
  popupsBootstrapLanguageDiv.classList.add('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.add('ruby-language-disappear');
}

function projectViewButton3() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[2].imagesrc;
  popupProjectTitle.innerHTML = storeData[2].name;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
}

function projectViewButton4() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[3].imagesrc;
  popupProjectTitle.innerHTML = storeData[3].name;
  popupsBootstrapLanguageDiv.classList.add('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.add('ruby-language-disappear');
}
