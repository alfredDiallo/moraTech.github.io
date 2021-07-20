const gridd=document.querySelector('.grid-container');
const web=document.querySelector('.web');
const tion=document.querySelector('.tion');
const tique=document.querySelector('.tique');
window.addEventListener('scroll',(e) =>
{
    if (window.scrollY >250){
        gridd.style.opacity=1;
        gridd.style.transform="translateY(-10)";

    }
    else{
    gridd.style.opacity=0;
    gridd.style.transform="translateY(-180)";  
    }
})
window.addEventListener('scroll',(e) =>
{
    if (window.scrollY >850){
        web.style.opacity=1;
        web.style.transform="translateY(-10)";
        tique.style.opacity=0;
        tion.style.opacity=0;

    }
    else{
    web.style.opacity=0;
    web.style.transform="translateY(-180)"; 
    }
})
window.addEventListener('scroll',(e) =>
{
    if (window.scrollY >950){
        tion.style.opacity=1;

    }
    else{
    tique.style.opacity=0;
        tion.style.opacity=0;  
    }
})
window.addEventListener('scroll',(e) =>
{
    if (window.scrollY >1050){
        tique.style.opacity=1;

    }
    else{
        tique.style.opacity=0;  
    }
})