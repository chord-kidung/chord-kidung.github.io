var bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
function datetime(){
    var time=document.querySelectorAll('time');
    for(var i=0;i<time.length;i++){
        var datm=time[i].dateTime;
        datm=new Date(datm);
        var tgl=datm.getDate();
        var bln=bulan[datm.getMonth()];
        var thn=datm.getFullYear();
        time[i].innerHTML=time[i].title=`${tgl} ${bln} ${thn}`;
    }
}