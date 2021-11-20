function titlegen(){
    var pagetitle=document.createElement('title');
    if(ptype=='post')pagetitle.innerText=`${post_data.posts[pn].title} | ${post_data.blog[0].title}`;
    else if(ptype=='home')pagetitle.innerText=`Halaman Utama | ${post_data.blog[0].title}`;
    else if(ptype=='doc'){
        if(pdiv=='about')pagetitle.innerText=`Tentang ${post_data.blog[0].title}`;
        else if(pdiv=='tos')pagetitle.innerText=`Syarat dan Ketentuan | ${post_data.blog[0].title}`;
    }
    else if(ptype=='404')pagetitle.innerText=`404 | ${post_data.blog[0].title}`;
    else pagetitle.innerText='TEST';
    document.head.appendChild(pagetitle);
}
window.onload=function(){
    titlegen();
}