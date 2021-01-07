
function setupAds(){
    let adblock = document.querySelectorAll(".adblock");
    
    adblock.forEach(setCancelButton);
}

function setCancelButton(item){
    let closeIcon = item.querySelectorAll(".close-icon");
    closeIcon[0].addEventListener("click", 
    function(){
        item.style.display = "none";
    });
}

function setupAdditionalInfo(){
    let currencyButton = document.querySelector(".currency-button");
    let weatherButton = document.querySelector(".weather-button");
    let infoSection = document.querySelector(".additional-info");
    let currencyBlock = document.querySelector(".curs-valutar");
    let weatherBlock = document.querySelector(".meteo");
    let background = document.querySelector(".additional-info-background");

    let isCurrency = false;

    currencyButton.addEventListener("click", 
    function(){
        infoSection.style.display = "flex";
        currencyBlock.style.display = "block";
        isCurrency = true;
    });

    weatherButton.addEventListener("click", 
    function(){
        infoSection.style.display = "flex";
        weatherBlock.style.display = "block";
        isCurrency = false;
    });


    background.addEventListener("click", 
    function(){
        infoSection.style.display = "none";
        if(isCurrency){
            currencyBlock.style.display = "none";
        }else{
            weatherBlock.style.display = "none";
        }
    });
}

setupAds();
setupAdditionalInfo();