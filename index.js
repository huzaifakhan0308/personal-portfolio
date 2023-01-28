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
    name: 'ICC Mens T20 world cup, 2024',
    description: 'The ICC Mens T20 World Cup is the premier international tournament for Twenty20 cricket, set to take place in 2024',
    imagesrc: 'assets/images/project1 img.png',
    technologies: ['html', 'css', 'javaScript'],
    aboutProjectDesktop: 'The ICC Mens T20 World Cup is the international championship of Twenty20 cricket.The tournament is organized by the International Cricket Council, with the host nation or nations determined by a bidding process.The tournament is typically held every two years and features the top national teams from around the world.The next edition of the tournament is scheduled to take place in 2024. The tournament format will be round- robin and knockout, where the teams will play a set of matches against each other in the group stage, and the top teams will advance to the knockouts and play for the World Cup',
    aboutProjectMobile: 'The ICC Mens T20 World Cup is the international championship of Twenty20 cricket.The tournament is organized by the International Cricket Council, with the host nation or nations determined by a bidding process.The tournament is typically held every two years and features the top national teams from around the world.',
    href: 'https://huzaifakhan0308.github.io/capston-project/',
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
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const seeliveaTag = document.querySelector('.see-live-aTag');

function projectViewButton1() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[0].imagesrc;
  popupProjectTitle.innerHTML = storeData[0].name;
  popupsProjectDesktop.innerHTML = storeData[0].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[0].aboutProjectMobile;
  seeliveaTag.href = storeData[0].href;
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
const formEmail = document.querySelector('.form-email');
const formText = document.querySelector('.form-section-textarea');
const formError = document.querySelector('.form-error-disappear');
const formSubmitMsg = document.querySelector('.form-submit-msg-disappear');
const formSubmitBtn = document.querySelector('.form-button');

document.querySelector('.form-section').addEventListener('click', ((e) => {
  const formEmailValue = formEmail.value;
  const formEmailValue2 = formEmailValue;

  if (e.target.classList[0] === 'form-button') {
    formEmail.value = formEmail.value.replace(/\s/g, '');
    if (formName.value === '') {
      formSubmitBtn.disabled = false;
    } else if (formEmailValue === '') {
      formError.classList.remove('form-error-appear');
      formSubmitBtn.disabled = false;
    } else if (formEmailValue !== formEmailValue2.toLowerCase()) {
      for (let i = 0; i < formEmailValue.length; i++) {
        if (formEmailValue[i] === formEmailValue2[i].toUpperCase()) {
          formError.classList.add('form-error-appear');
          formError.innerHTML = 'Email alphabets should be in lowerCase!';
          formError.style.color = 'red';
          formSubmitBtn.disabled = true;
        }
      }
    } else if (formEmailValue.indexOf('@') < 1) {
      formError.classList.add('form-error-appear');
      formError.innerHTML = 'please correct your Email!';
      formError.style.color = 'red';
      formSubmitBtn.disabled = false;
    } else if (formEmailValue.indexOf('.') < formEmailValue.indexOf('@') || formEmailValue.indexOf('.') === formEmailValue.length - 1 || formEmailValue.indexOf('.') === formEmailValue.indexOf('@') + 1) {
      formError.classList.add('form-error-appear');
      formError.innerHTML = 'please correct your Email!';
      formError.style.color = 'red';
      formSubmitBtn.disabled = false;
    } else if (formText.value === '') {
      formError.classList.remove('form-error-appear');
      formSubmitBtn.disabled = false;
    } else if (formName.value !== '' && formEmailValue !== '' && formText.value !== '') {
      formError.classList.add('form-error-appear');
      formError.innerHTML = 'Form sent seccesfully';
      formError.style.color = 'white';
      formSubmitBtn.disabled = false;
      const formData = {
        name: formName.value,
        email: formEmail.value,
        text: formText.value,
      };

      const localStorageStringyfy = JSON.stringify(formData);
      localStorage.setItem('formData', localStorageStringyfy);
    }
  }
  if (e.target.classList[1] === 'form-email') {
    formSubmitBtn.disabled = false;
  }
}));

const localStorageParse = JSON.parse(localStorage.getItem('formData'));

formName.value = localStorageParse.name;
formEmail.value = localStorageParse.email;
formText.value = localStorageParse.text;