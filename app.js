document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id, e)))

function change(n, s) {
  let panels = document.querySelectorAll('main section')
  let items = document.querySelectorAll('.navbar a')
  panels.forEach(p => p.classList.remove('active'))
  items.forEach(i => i.classList.remove('nv-active'))
  panels[n - 1].classList.add('active')
  s.classList.add('nv-active')
}