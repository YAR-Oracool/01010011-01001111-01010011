function summonGame(){
    window.location.href="HTML/01010011-01001111-01010011.html";
}

document.getElementById("ToGame").addEventListener('click', function(){
    summonGame();
})

window.onload = function (){
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
}

window.addEventListener('keydown', function(keyPress){
    if (keyPress.key == 'Enter')
    {
        summonGame();
    }
});