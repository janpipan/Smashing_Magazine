let nav = document.getElementsByClassName('vis-nav')[0];
let site = document.getElementsByClassName('site-nav')[0];
let overflow = document.getElementsByClassName('overflow')[0];
let lastWidth;
let items = nav.childNodes;

console.log(site);
console.log(nav);
window.addEventListener('load', ()=>{
  // it items are overflowing store them in more button and make them invisible
  if(nav.scrollWidth > nav.clientWidth){
    for(let i = items.length-3; nav.scrollWidth > nav.clientWidth; i--){
      let item = items[i];
      if(item.nodeName != '#text'){
        overflow.appendChild(item);
        item.classList.add('hidden');
        lastWidth = nav.clientWidth;
      }else{
        nav.removeChild(item);
      }
    }
  }
});

window.addEventListener('resize', ()=>{
  if(nav.scrollWidth+15 > nav.clientWidth){
    for(let i = items.length-3; nav.scrollWidth > nav.clientWidth; i--){
      let item = items[i];
      if(item.nodeName != '#text'){
        overflow.appendChild(item);
        item.classList.add('hidden');
        lastWidth = nav.clientWidth;
      }else{
        nav.removeChild(item);
      }
    }
  }
  if(nav.clientWidth-(nav.children.length*20)-lastWidth>overflow.lastChild.clientWidth && overflow.lastChild.classList != 'more'){
    let item = overflow.lastChild;
    item.classList.remove('hidden');
    nav.insertBefore(item, nav.childNodes[nav.childNodes.length-2]);
    lastWidth = nav.clientWidth+5;


  }





});
