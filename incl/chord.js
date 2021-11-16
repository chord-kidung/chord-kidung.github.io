var chords=document.getElementsByClassName('chordplc');
var mc=['C','C#','D','E&#9837;','E','F','F#','G','G#','A','B&#9837;','B'];
function numtochr(){
    var nada=document.getElementById('nada').classList[0];
    nada=nada.split('_');
    var dsr=parseInt(nada[1]);
    var sel=parseInt(document.getElementById('selectNada').value);
    dsr=(sel==-13)?0:dsr+sel;
    document.getElementById('nada').innerHTML=mc[dsr];
    for(var i=0;i<chords.length;i++){
        var chr=chords[i].classList[1],pp;
        if(chr=='tc'){chords[i].innerHTML='[]';}
        else{
            var chrnum=chr.split('_');
            var isAlp=/[a-zA-Z]/;
            if(isAlp.test(chrnum[1])){
                var ut=chrnum[1].split('');
                if(ut[1]==='o'){
                    var t=parseInt(ut[0]),n=parseInt(ut[2]);
                    var k=(dsr+t<12)?dsr+t:dsr+t-12,l=(dsr+n<12)?dsr+n:dsr+n-12;
                    pp=mc[k]+'<sup class="onbass">/'+mc[l]+'</sup>'; 
                }
                else if(ut[1]=='d'){
                    var t=parseInt(ut[0]);
                    var k=(dsr+t<12)?dsr+t:dsr+t-12;
                    pp=mc[k]+'dim'+ut[2];
                }
                else if(ut[1]=='n'){
                    var t=parseInt(ut[0]);
                    var k=(dsr+t<12)?dsr+t:dsr+t-12;
                    pp=mc[k]+'<sub class="numberedkey">'+ut[2]+'</sub>';
                }
                else{
                    var t=parseInt(ut[0]);
                    var k=(dsr+t<12)?dsr+t:dsr+t-12;
                    pp=mc[k]+ut[1];}
            }
            else{
                var d=parseInt(chrnum[1]);
                var k=(dsr+d<12)?dsr+d:dsr+d-12;
                pp=mc[k];
            }
            chords[i].innerHTML=pp;
        }
    }
}
function spaceprint(count){for(var i=0;i<count;i++)document.currentScript.insertAdjacentHTML('afterend','&nbsp;');}
function songprop(){
    var sp=document.getElementById('song-prop');
    var table=document.createElement('table');
    table.classList.add('bd0');
    sp.appendChild(table);
    var tr=document.createElement('tr');
    table.appendChild(tr);
    var td=document.createElement('td');
    if(songdata.asli!=='id'){
        td.innerHTML='Judul asli';
        tr.appendChild(td);
        td=document.createElement('td');
        td.classList.add('tt2');
        td.innerHTML=':';
        tr.appendChild(td);
        td=document.createElement('td');
        td.innerHTML=`<i>${songdata.asli}</i> (Bahasa ${songdata.bhsasli})`;
        tr.appendChild(td);
    }
    tr=document.createElement('tr');
    table.appendChild(tr);
    td=document.createElement('td');
    td.innerHTML='Syair';
    tr.appendChild(td);
    td=document.createElement('td');
    td.classList.add('tt2');
    td.innerHTML=':';
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=(songdata.lirik.namatengah)?`${songdata.lirik.namadepan} ${songdata.lirik.namatengah} ${songdata.lirik.namabelakang}`:`${songdata.lirik.namadepan} ${songdata.lirik.namabelakang}`;
    if(songdata.lirik.jr)td.insertAdjacentHTML('beforeend',' Jr.');
    td.insertAdjacentHTML('beforeend',` (${songdata.lirik.tahun})`);
    tr.appendChild(td);
    
    tr=document.createElement('tr');
    table.appendChild(tr);
    td=document.createElement('td');
    td.innerHTML='Musik';
    tr.appendChild(td);
    td=document.createElement('td');
    td.classList.add('tt2');
    td.innerHTML=':';
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=(songdata.musik.namatengah)?`${songdata.musik.namadepan} ${songdata.musik.namatengah} ${songdata.musik.namabelakang}`:`${songdata.musik.namadepan} ${songdata.musik.namabelakang}`;
    if(songdata.musik.jr)td.insertAdjacentHTML('beforeend',' Jr.');
    td.insertAdjacentHTML('beforeend',` (${songdata.musik.tahun})`);
    tr.appendChild(td);
    
    tr=document.createElement('tr');
    table.appendChild(tr);
    td=document.createElement('td');
    td.innerHTML='Terjemahan';
    tr.appendChild(td);
    td=document.createElement('td');
    td.classList.add('tt2');
    td.innerHTML=':';
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=(songdata.terj.lembaga)?songdata.terj.namalem:(songdata.terj.namatengah)?`${songdata.terj.namadepan} ${songdata.terj.namatengah} ${songdata.terj.namabelakang}`:`${songdata.terj.namadepan} ${songdata.musik.namabelakang}`;
    td.insertAdjacentHTML('beforeend',` (${songdata.terj.tahun})`);
    tr.appendChild(td);
}

