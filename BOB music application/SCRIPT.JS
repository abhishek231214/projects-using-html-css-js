console.log("welcome to BOB");

let songindex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let song=[
    {songName: "Let Me Love You", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filepath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Let Me Love You", filepath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Let Me Love You", filepath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Let Me Love You", filepath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Let Me Love You", filepath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Let Me Love You", filepath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Let Me Love You", filepath:"song/8.mp3", coverPath:"covers/8.jpg"}
]
//  songitem.forEach((element ,i )=> {
//     element.getelementbytagname("img")[0].src = song[i].coverPath;
//     element.getElementsByClassName("songname")[0].innertext=songs[i].songName;
    
//  });
// audioElement.play();
// handle play/pause 
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
        else{
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');}
        
    
})
//Listen to Events




audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')//update seekbaar

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
console.log(progress);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
     audioElement.currentTime=myProgressBar .value*audioElement.duration/100; 
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })


}


 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
     element.addEventListener('click',(e)=>{
        makeallplays();
        songindex= parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        
        

     })
 })

 document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=8){
        songindex=0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');})

