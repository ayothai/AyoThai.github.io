document.addEventListener('DOMContentLoaded',function(){
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav
 var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
  });

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


