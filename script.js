// Small enhancements: current year and smooth scrolling
document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = a.getAttribute('href');
      if(target.length>1){
        e.preventDefault();
        const node = document.querySelector(target);
        if(node) node.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  });
});
