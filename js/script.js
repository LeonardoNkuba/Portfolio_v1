async function loadContent() {
  try {
    const response = await fetch('data/content.json')
    const data = await response.json()
    renderContent(data)
  } catch (e) {
    console.error('Error:', e)
  }
}

function renderContent(d) {
  const heroTitle = document.getElementById('heroTitle')
  if (heroTitle) {
    heroTitle.innerHTML = d.tagline.replace(/INFRASTRUCTURE/g, '<span class="green">INFRASTRUCTURE</span>').replace(/IMPOSSIBLE/g, '<span class="green">IMPOSSIBLE</span>').replace(/scalable/g, '<span class="green">scalable</span>')
  }
  const heroDesc = document.getElementById('heroDescription')
  if (heroDesc) heroDesc.textContent = d.bio
  const contactEmail = document.getElementById('contactEmailFooter')
  if (contactEmail) { contactEmail.textContent = d.email; contactEmail.href = 'mailto:' + d.email }
  const contactBtn = document.getElementById('contactBtn')
  const li = d.social.find(s => s.name === 'LinkedIn')
  if (li && contactBtn) contactBtn.href = li.url

  const aboutTitle = document.getElementById('aboutTitle')
  if (aboutTitle) aboutTitle.textContent = 'Architecting the ' + d.name.split(' ')[0] + ' scalable.'
  const aboutSub = document.getElementById('aboutSubtitle')
  if (aboutSub) aboutSub.textContent = 'SYSTEM_STATUS: ONLINE'
  const aboutText = document.getElementById('aboutText')
  if (aboutText) aboutText.textContent = d.bio

  const skillsList = document.getElementById('skillsList')
  if (skillsList) {
    d.skills.forEach(skill => {
      const li = document.createElement('li')
      li.textContent = skill
      skillsList.appendChild(li)
    })
  }

  const stats = [{ number: '1B+', label: 'MONTHLY_REQ' }, { number: '37%', label: 'COST_OPT' }, { number: '99.9%', label: 'UPTIME' }, { number: '06', label: 'EXP_YEARS' }]
  stats.forEach((stat, idx) => {
    const el = document.getElementById('stat' + (idx + 1))
    if (el) el.innerHTML = '<div class="stat-number">' + stat.number + '</div><div class="stat-label">' + stat.label + '</div>'
  })

  const timeline = document.getElementById('experienceTimeline')
  if (timeline) {
    d.experience.forEach(job => {
      const div = document.createElement('div')
      div.className = 'experience-item'
      const parts = job.period.split(' - ')
      div.innerHTML = '<div><p class="experience-period">' + parts[0] + '</p><p class="experience-period-company">' + (parts[1] || 'Present') + '</p></div><div><h3>' + job.position + ' <span class="at">@</span> <span class="company-name">' + job.company + '</span></h3><p class="experience-description">' + job.description + '</p></div>'
      timeline.appendChild(div)
    })
  }

  const projectsGrid = document.getElementById('projectsGrid')
  if (projectsGrid) {
    d.projects.forEach(project => {
      const div = document.createElement('div')
      div.className = 'project-card'
      const techTags = project.tech.map(t => '<span class="tech-tag">' + t + '</span>').join('')
      const gh = project.github ? '<a href="' + project.github + '" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>' : ''
      const live = project.live ? '<a href="' + project.live + '" target="_blank" rel="noopener noreferrer" aria-label="Live"><i class="fas fa-external-link-alt"></i></a>' : ''
      div.innerHTML = '<div class="project-top"><i class="far fa-folder-open project-folder-icon"></i><div class="project-card-links">' + gh + live + '</div></div><h3>' + project.title + '</h3><p>' + project.description + '</p><div class="project-tech">' + techTags + '</div>'
      projectsGrid.appendChild(div)
    })
  }

  const iconMap = { GitHub: 'fab fa-github', LinkedIn: 'fab fa-linkedin-in', Twitter: 'fab fa-twitter', Instagram: 'fab fa-instagram', CodePen: 'fab fa-codepen' }
  const socialLinks = document.getElementById('socialLinks')
  if (socialLinks) {
    d.social.forEach(social => {
      const a = document.createElement('a')
      a.href = social.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', social.name)
      a.innerHTML = '<i class="' + (iconMap[social.name] || 'fas fa-link') + '"></i>'
      socialLinks.appendChild(a)
    })
  }

  const sideLinks = document.getElementById('socialSideLinks')
  if (sideLinks) {
    d.social.forEach(social => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = social.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', social.name)
      a.innerHTML = '<i class="' + (iconMap[social.name] || 'fas fa-link') + '"></i>'
      li.appendChild(a)
      sideLinks.appendChild(li)
    })
  }

  const emailLink = document.getElementById('emailLink')
  if (emailLink) { emailLink.textContent = d.email; emailLink.href = 'mailto:' + d.email }
}

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
  })
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      menuToggle.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')
    })
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('scroll-reveal'); observer.unobserve(entry.target) }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section)
})

document.addEventListener('DOMContentLoaded', loadContent)
