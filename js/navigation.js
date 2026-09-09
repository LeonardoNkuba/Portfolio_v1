const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50)
})

const menuToggle = document.getElementById('menuToggle')
const navLinks = document.getElementById('navLinks')
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    menuToggle.classList.toggle('active')
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'))
    menuToggle.setAttribute('aria-label', navLinks.classList.contains('active') ? 'Close navigation menu' : 'Open navigation menu')
  })
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      menuToggle.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.setAttribute('aria-label', 'Open navigation menu')
    })
  })
}


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks && menuToggle && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active')
    menuToggle.classList.remove('active')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation menu')
    menuToggle.focus()
  }
})
