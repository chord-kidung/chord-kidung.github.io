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