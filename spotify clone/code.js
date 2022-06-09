const songPlayBtn=document.querySelectorAll('.songPlayBtn');
const songBottomBtn=document.querySelector('.mainPlayer');
var playpause=true;
var audio = new Audio('songs/something.mp3');
var songRange=document.querySelector('#songRange');
var gif=document.querySelector('.playGif');


for(let i=0; i<songPlayBtn.length; i++){
    songPlayBtn[i].addEventListener('click',() =>
    {
        if(playpause==true)
        {
        audio.play();
        songPlayBtn[i].style.color="green";
        gif.style.opacity=1;
        }
        else
        {
            audio.pause();
            songPlayBtn[i].style.color="black";
            gif.style.opacity=0;
        }
        playpause=!playpause;
    });
    audio.addEventListener('timeupdate' , () => {
        var songRangeValue=parseInt((audio.currentTime/audio.duration)*100);
        songRange.value=songRangeValue;
    });
    songRange.addEventListener('change' , () => {
        audio.currentTime=songRange.value*audio.duration/100;
    });
    
}
songBottomBtn.addEventListener('click',() =>
{
    if(playpause==true)
    {
    audio.play();
    gif.style.opacity=1;
    }
    else
    {
        audio.pause();
        gif.style.opacity=0;
    }
    playpause=!playpause;
});