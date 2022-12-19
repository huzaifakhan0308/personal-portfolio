const mobileMenuIcon = document.querySelector('.menuicon-a');

const mobileMenu = document.querySelector('.mobile-menu');

function mobileMenuButton() {
  mobileMenuIcon.style.display = 'none';
  mobileMenu.style.display = 'flex';
}
mobileMenuButton();

function mobileMenuTags() {
  mobileMenu.style.display = 'none';
  mobileMenuIcon.style.display = 'flex';
}

mobileMenuTags();

function menuDisapperButton() {
  mobileMenu.style.display = 'none';
  mobileMenuIcon.style.display = 'flex';
}
menuDisapperButton();
