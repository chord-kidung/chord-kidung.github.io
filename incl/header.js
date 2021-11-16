function header(){
    var hedr=document.createElement('header'),logo=document.createElement('a');nav=document.createElement('nav'),menubutton=document.createElement('div');hamb=document.createElement('div'),hambisi=document.createElement('span');
    document.body.insertAdjacentElement('afterbegin',hedr);
    logo.classList.add('logo');
    logo.href='/';
    logo.innerHTML='Chord Rohani';
    hedr.appendChild(logo);
    menubutton.classList.add('menubutton');
    hedr.appendChild(menubutton);
    var menutext=document.createElement('span');
    menutext.classList.add('menutext');
    menutext.innerHTML='MENU';
    menubutton.appendChild(menutext);
    hamb.classList.add('hamb');
    menubutton.appendChild(hamb);
    hambisi.classList.add('hambisi','hambatas');
    hamb.appendChild(hambisi);
    hambisi=document.createElement('span')
    hambisi.classList.add('hambisi','hambbwh');
    hamb.appendChild(hambisi);
    hedr.insertAdjacentElement('afterend',nav);
    var menu=['Kidung Jemaat|||/kj/list.html','Label 2|||/post/label2/list.html','About|||/doc/about/about.html'];
    for(var i=0;i<menu.length;i++){
        var aa=menu[i].split('|||');
        var ab=document.createElement('a');
        ab.innerHTML=aa[0];
        ab.href=aa[1];
        nav.appendChild(ab);
    }
    menubutton.addEventListener("click", function() {
        menubutton.classList.toggle("menuclicked");
        nav.classList.toggle('shownav');
    });
}