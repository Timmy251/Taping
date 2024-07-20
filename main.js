let count = 0;
let coin = document.getElementById("coin");
let counter = document.getElementById("counter");
counter.innerText = count;
coin.onclick = _ => {
    count++;
    counter.innerText = count;
   let progress= document.getElementById('progress');
    progress.max=2500;
    progress.value=2500-count;
   let pop=document.getElementById('progress').value;
    document.getElementById('taps').innerHTML=pop;
    if (count==2500) {
        document.getElementById('done').innerHTML="YOU ARE TRUE CHAMP";
    }
    } 
