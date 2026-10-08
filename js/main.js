
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks?.classList.remove('open'));
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-year]').forEach(el=>{
  el.textContent = new Date().getFullYear();
});


// ===== Light / Dark theme =====
(function(){
  const root = document.body;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('dmz-theme');

  if(saved === 'dark'){
    root.classList.add('dark');
  }

  function updateButton(){
    if(!toggle) return;
    const dark = root.classList.contains('dark');
    toggle.textContent = dark ? '☀️' : '🌙';
    toggle.title = dark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด';
    toggle.setAttribute('aria-label', toggle.title);
  }

  updateButton();

  toggle?.addEventListener('click', ()=>{
    root.classList.toggle('dark');
    const dark = root.classList.contains('dark');
    localStorage.setItem('dmz-theme', dark ? 'dark' : 'light');
    updateButton();
  });
})();
