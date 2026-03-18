(function(){
  const toggle=document.querySelector('.nav-toggle');
  const menu=document.getElementById('menu');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      const opened=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded', String(!opened));
      menu.style.display=opened?'none':'flex';
      if(!opened) menu.style.flexDirection='column';
    });
  }
})();
