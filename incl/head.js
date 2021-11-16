var meta=document.createElement('meta'),maincss=document.createElement('link'),pagecss=document.createElement('link'),sidecss=document.createElement('link'),monofont=document.createElement('link');
meta.setAttribute('charset','UTF-8');
document.head.appendChild(meta);
meta=document.createElement('meta')
meta.httpEquiv='X-UA-Compatible';
meta.content='IE=edge';
document.head.appendChild(meta);
meta=document.createElement('meta')
meta.name='viewport';
meta.content='width=device-width, initial-scale=1.0';
document.head.appendChild(meta);
maincss.rel=pagecss.rel=sidecss.rel=monofont.rel='stylesheet';
maincss.href='/style/main.css';
pagecss.href=`/style/${ptype}.css`;
if(ptype=='post'){
    sidecss.href=`/style/lyrics.css`;
}
monofont.href="https://fontlibrary.org//face/fantasque-sans-mono";
document.head.appendChild(maincss);
document.head.appendChild(pagecss);
document.head.appendChild(sidecss);
document.head.appendChild(monofont);
