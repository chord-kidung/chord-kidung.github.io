var meta=document.createElement('meta'),maincss=document.createElement('link'),pagecss=document.createElement('link'),sidecss=document.createElement('link'),mainfont=document.createElement('link');monofont=document.createElement('link'),precon=document.createElement('link');
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
precon.rel='preconnect';
precon.href='https://fonts.googleapis.com';
document.head.appendChild(precon);
precon=document.createElement('link');
precon.rel='preconnect';
precon.href='https://fonts.gstatic.com';
precon.crossOrigin='crossorigin';
document.head.appendChild(precon);
maincss.rel=pagecss.rel=sidecss.rel=monofont.rel=mainfont.rel='stylesheet';
maincss.href='/style/main.css';
pagecss.href=`/style/${ptype}.css`;
if(ptype=='post'){
    sidecss.href=`/style/lyrics.css`;
}
mainfont.href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap';
monofont.href="https://fontlibrary.org//face/fantasque-sans-mono";
document.head.appendChild(maincss);
document.head.appendChild(mainfont);
document.head.appendChild(pagecss);
document.head.appendChild(sidecss);
document.head.appendChild(monofont);
