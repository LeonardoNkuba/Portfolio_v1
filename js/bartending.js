(() => {
  const root = document.documentElement
  const chapters = [...document.querySelectorAll('[data-chapter]')]
  const links = [...document.querySelectorAll('.chapter-nav a')]
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  let pending = false

  function update() {
    pending = false
    const mobile = window.matchMedia('(max-width: 768px)').matches
    const readingLine = window.innerHeight * (mobile ? 0.62 : 0.48)
    let active = 0
    chapters.forEach((chapter, index) => {
      const rect = chapter.getBoundingClientRect()
      if (rect.top <= readingLine) active = index
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) chapter.classList.add('is-visible')
    })
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'step')
      else link.removeAttribute('aria-current')
    })
    const distance = root.scrollHeight - window.innerHeight
    const progress = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0
    root.style.setProperty('--progress', progress)
    root.style.setProperty('--fill', preference.matches ? 0.65 : 0.08 + progress * 0.78)
    // The room warms through the shift and quiets during the final chapter.
    root.style.setProperty('--light', preference.matches ? 0.65 : 0.25 + Math.sin(progress * Math.PI) * 0.7)
  }

  function requestUpdate() {
    if (pending) return
    pending = true
    window.requestAnimationFrame(update)
  }

  function applyMotionPreference() {
    root.classList.toggle('motion-enabled', !preference.matches)
    update()
  }

  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate)
  window.addEventListener('pageshow', requestUpdate)
  preference.addEventListener('change', applyMotionPreference)
  applyMotionPreference()
})()
