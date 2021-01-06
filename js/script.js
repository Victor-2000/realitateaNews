
function setupAds(){
    var adblock = document.querySelectorAll(".adblock");
    
    adblock.forEach(setCancelButton);
}

function setCancelButton(item){
    var closeIcon = item.querySelectorAll(".close-icon");
    closeIcon[0].addEventListener("click", function(){
        item.style.display = "none";});
}

setupAds();