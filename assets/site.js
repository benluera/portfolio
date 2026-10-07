
(function(){
  // scroll-reveal
  var io = new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:0.15});
  document.querySelectorAll('[data-appear]').forEach(function(el){
    try{var a=JSON.parse(el.getAttribute('data-appear'));if(a.x)el.style.setProperty('--ax',a.x+'px');if(a.y)el.style.setProperty('--ay',a.y+'px');if(a.scale!=null)el.style.setProperty('--as',a.scale);}catch(err){}
    io.observe(el);
  });
  // component variant switching (e.g. phone menu)
  document.addEventListener('click',function(ev){
    var t=ev.target.closest('[data-set-variant]'); if(!t) return;
    var inst=t.closest('[data-instance]'); if(!inst) return;
    var id=t.getAttribute('data-set-variant');
    inst.querySelectorAll(':scope > .variant').forEach(function(v){v.classList.remove('is-shown');v.classList.add('is-hidden');});
    var target=inst.querySelector(':scope > .variant[data-variant="'+id+'"]');
    if(target){target.classList.remove('is-hidden');target.classList.add('is-shown');}
  });
  // before/after sliders
  document.querySelectorAll('.before-after').forEach(function(b){
    var r=b.querySelector('.ba-range'); r.addEventListener('input',function(){b.style.setProperty('--pos',r.value+'%');});
  });
  // carousels
  document.querySelectorAll('.carousel').forEach(function(c){
    var tr=c.querySelector('.carousel-track'), prev=c.querySelector('.car-prev'), next=c.querySelector('.car-next');
    var step=function(){var k=tr.children[0]; return k?k.getBoundingClientRect().width+parseFloat(getComputedStyle(tr).gap||0):tr.clientWidth*0.8;};
    prev.onclick=function(){tr.scrollBy({left:-step(),behavior:'smooth'})};
    next.onclick=function(){tr.scrollBy({left:step(),behavior:'smooth'})};
    var update=function(){prev.classList.toggle('is-off',tr.scrollLeft<=2);next.classList.toggle('is-off',tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-2);};
    tr.addEventListener('scroll',update); window.addEventListener('resize',update); update();
  });
  // slideshows
  document.querySelectorAll('.slideshow').forEach(function(s){
    var slides=s.querySelector('.slides'), n=slides.children.length, i=0, dots=s.querySelector('.dots');
    for(var k=0;k<n;k++){var d=document.createElement('span');dots.appendChild(d);}
    function go(j){i=(j+n)%n;slides.style.transform='translateX('+(-100*i)+'%)';dots.querySelectorAll('span').forEach(function(d,k){d.classList.toggle('on',k===i)});}
    s.querySelector('.car-prev').onclick=function(){go(i-1)}; s.querySelector('.car-next').onclick=function(){go(i+1)}; go(0);
  });
})();
