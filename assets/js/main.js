document.addEventListener('DOMContentLoaded',function(){
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  // google-review-carousel carousel
  const carousel = document.getElementById('google-review-carousel');
  if(carousel){
    let i=0; const items = Array.from(carousel.querySelectorAll('.quote'));
    items.forEach((it,idx)=>{ if(idx!==0) it.style.display='none'; });
    setInterval(()=>{
      items[i].style.display='none';
      i = (i+1) % items.length;
      items[i].style.display='block';
    },4500);
  }
});
