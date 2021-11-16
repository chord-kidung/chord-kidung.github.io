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
function labeling(){
    var labels=document.getElementById('label');
    var label=document.createElement('a');
    for(var i=0;i<post_data.categories.length;i++){
        if(post_data.categories[i].title.includes(post_data.posts[pn].cat)){
            label.href=post_data.categories[i].url;
            label.innerHTML=post_data.posts[i].cat;
        }
    }
    labels.appendChild(label);
}
function titlegen(){
    var pagetitle=document.createElement('title');
    if(ptype=='post'){
        var posttitle=document.getElementsByClassName('.post-title');
        pagetitle.innerText=`${posttitle} | ${post_data.blog[0].title}`;
    }
    else if(ptype=='home'){
        pagetitle.innerText=`Halaman Utama | ${post_data.blog[0].title}`;
    }
}
window.onload=function(){
    labeling();
    titlegen();
}