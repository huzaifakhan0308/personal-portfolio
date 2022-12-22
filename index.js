/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */

// mobile menu

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

// projects

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
  description[i].innerHTML = storeData[i].description;
  description[i + 1].innerHTML = storeData[i + 1].description;
}

const projectLanguagesHtmlText = document.querySelectorAll('.project-languages-html');
for (let i = 0; i < projectLanguagesHtmlText.length; i++) {
  projectLanguagesHtmlText[i].innerHTML = storeData[0].technologies[0];
}

const projectLanguagesText = document.querySelectorAll('.project-languages');
for (let i = 0; i < projectLanguagesText.length; i += 2) {
  projectLanguagesText[i].innerHTML = storeData[0].technologies[1];
  projectLanguagesText[i + 1].innerHTML = storeData[0].technologies[2];
}

// popups

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

// form

const formName = document.querySelector('.form-name');
const formInput = document.querySelector('.form-input');
const formText = document.querySelector('.form-section-textarea');
const formTypeErrors = document.querySelector('.form-type-errors-disappear');
const formError = document.querySelector('.form-error-disappear');
const formSubmitMsg = document.querySelector('.form-submit-msg-disappear');

document.querySelector('.form-section').addEventListener('click', ((e) => {
  const formInputValue = formInput.value;
  const formInputValue2 = formInputValue;
  if (e.target.classList[0] === 'form-button') {
    if (formName.value === '') {
      formTypeErrors.innerHTML = 'please type your name!';
      formTypeErrors.style.display = 'flex';
      formSubmitMsg.classList.remove('form-submit-msg-appear');
    } else if (formInput.value === '') {
      formTypeErrors.innerHTML = 'please type your Email!';
      formTypeErrors.style.display = 'flex';
      formSubmitMsg.classList.remove('form-submit-msg-appear');
    } else if (formInputValue !== formInputValue2.toLowerCase()) {
      formSubmitMsg.classList.remove('form-submit-msg-appear');
      formTypeErrors.style.display = 'none';
      for (let i = 0; i < formInputValue.length; i++) {
        if (formInputValue[i] === formInputValue2[i].toUpperCase()) {
          formError.classList.add('form-error-appear');
        }
      }
    } else if (formText.value === '') {
      formTypeErrors.style.display = 'flex';
      formTypeErrors.innerHTML = 'please write massage!';
      formSubmitMsg.classList.remove('form-submit-msg-appear');
    } else {
      formTypeErrors.style.display = 'none';
      formError.classList.remove('form-error-appear');
      if (formName.value !== '' && formInput.value !== '' && formInput.value.indexOf('@') !== -1 && formText.value !== '') {
        formSubmitMsg.classList.add('form-submit-msg-appear');
        formName.value = '';
        formInput.value = '';
        formText.value = '';
      } else {
        formSubmitMsg.classList.remove('form-submit-msg-appear');
        formTypeErrors.style.display = 'flex';
        formTypeErrors.innerHTML = 'please correct your Email';
      }
    }
  }
}));