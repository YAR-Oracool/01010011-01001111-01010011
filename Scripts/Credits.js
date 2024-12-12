function summonGame(){
    window.location.href="../index.html";
}

function summonCredits(){
    window.location.href="./Credits.html";
}

document.getElementById("ToGame").addEventListener('click', function(){
    summonGame();
})

document.getElementById("toCredits").addEventListener('click', function(){
    summonCredits();
})

window.onload = function (){
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
}

window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            summonGame();
            break;
        case 'Backspace':
            summonCredits();
            break;
    }
});