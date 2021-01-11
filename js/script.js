
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


function setupBody(){
    var fileName = location.pathname.split("/").slice(-1)[0];
    for(let i = 0; i < fileName.length; i++){
        if(fileName[i] == '.'){
            fileName = fileName.substring(0,i);
            break;
        }
    }

    document.querySelector("body").id = fileName;
}

function setupSmallArticles(){
    let smallArticles = document.querySelectorAll(".small-article");

    smallArticles.forEach(positionTitle);
}

function positionTitle(item){
    if(!item.querySelector("img")){
        item.querySelector(".article-title").style.left = "0";
        item.querySelector(".article-header").style["padding-left"] = "0";
    }
}

setupSmallArticles();
setupBody();
setupAds();
setupAdditionalInfo();