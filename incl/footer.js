function footer(){
    var footmenu=['About|||/doc/about/about.html','Privacy policy|||/doc/privacy-policy/ppol.html','Contact|||/doc/contact/contact.html'],footr=document.createElement('footer'),botmmn=document.createElement('div');
    document.body.insertAdjacentElement('beforeend',footr);
    botmmn.classList.add('footer-menu');
    footr.appendChild(botmmn);
    for(var i=0;i<footmenu.length;i++){
        var aa=footmenu[i].split('|||');
        var menus=document.createElement('a');
        menus.innerHTML=aa[0];
        menus.href=aa[1];
        botmmn.appendChild(menus);
    }
}