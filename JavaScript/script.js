let nav = document.getElementsByClassName('vis-nav')[0];
let overflow = document.getElementsByClassName('overflow')[0];
let lastWidth;

window.addEventListener('load', ()=>{
  if(nav.scrollWidth > nav.clientWidth){
    while(nav.scrollWidth > nav.clientWidth){
      if(nav.lastChild.nodeName != '#text'){
        let child = nav.lastChild;
        overflow.appendChild(child);
        child.classList.add('hidden');
        lastWidth = nav.clientWidth;
      }else{
        nav.removeChild(nav.lastChild);
      }
    }
  }
});

window.addEventListener('resize',()=>{
  if(nav.scrollWidth > nav.clientWidth){
    if(nav.lastChild.nodeName != '#text'){
      let child = nav.lastChild;
      overflow.appendChild(child);
      child.classList.add('hidden');
      lastWidth = nav.clientWidth;
    }else{
      nav.removeChild(nav.lastChild);
    }
  }
  if(overflow.lastChild.nodeName == '#text'){
    overflow.removeChild(overflow.lastChild);
  }else if(nav.clientWidth-90-lastWidth>overflow.lastChild.clientWidth && overflow.lastChild.classList != 'more'){
    let child = overflow.lastChild;
    nav.appendChild(child);
    lastWidth = nav.clientWidth;
  }
  if(overflow.children.length == 1){
    overflow.classList.add('hidden');
  }else{
    overflow.classList.remove('hidden');
  }
});
