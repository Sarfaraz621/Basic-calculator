let screen=document.getElementById('screen');
const btn=document.querySelectorAll('button');
let ScreenValue="";
for(item of btn)
{
item.addEventListener('click',(e)=>{
    btnText=e.target.innerText;
    //console.log("btn text = ",btnText);
    if(btnText=='X')
    {
        btnText='*';
        ScreenValue+=btnText;
        screen.value=ScreenValue;
    }
    else if(btnText=='=')
    {
        screen.value=eval(ScreenValue);
    }
    else if(btnText=='C')
    {
        ScreenValue="";
        screen.value="";
    }
    else
    {
        ScreenValue+=btnText;
        if(ScreenValue=='0/0=')
        {
            screen.value="NaN";
        }
        else if(ScreenValue=='/0=')
        {
            screen.value="Infinity";
        }
        else
        {
            screen.value=ScreenValue;
        }       
    }
})}
