const post_data={
    blog:[{
        title:'Chord Rohani',
        url:''
    }],
    author:{
        name:'Ben'
    },
    categories:[
        {
            title:'Kidung Jemaat',
            url:'/kj/'
        }
    ],
    posts:[
        {
            title:"KJ 400 - Kudaki Jalan Mulia",
            cat:'Kidung Jemaat',
            url:'/kj/kj-400/',
            thumb:0,
            published:'2021-11-16T13:37:00+07:00',
            song_id:400
        }
    ]
}
function titlegen(){
    var pagetitle=document.createElement('title');
    if(ptype=='post')pagetitle.innerText=`${post_data.posts[pn].title} | ${post_data.blog[0].title}`;
    else if(ptype=='home')pagetitle.innerText=`Halaman Utama | ${post_data.blog[0].title}`;
    else if(ptype='doc')if(pdiv=='about')pagetitle.innerText=`Tentang ${post_data.blog[0].title}`;
    else pagetitle.innerText='TEST';
    document.head.appendChild(pagetitle);
}
window.onload=function(){
    titlegen();
}