document.addEventListener('DOMContentLoaded', () => {  
    //show menu
    let btn_show = document.querySelector("button#show");
    btn_show.onclick = ()=>{
        showMenu();
    }
    //hide menu
    let btn_hide = document.querySelector("button#hide");
    btn_hide.onclick = ()=>{
        hideMenu();
    }
});

function hideMenu(){
    let menu = document.querySelector('#menu');
    menu.style.display = 'none'
}
function showMenu(){
    let menu = document.querySelector('#menu');
    menu.style.display = 'flex'
}