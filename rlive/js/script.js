
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
    let currencyButtons = document.querySelectorAll(".currency-button");
    let weatherButtons = document.querySelectorAll(".weather-button");
    let infoSection = document.querySelector(".additional-info");
    let currencyBlock = document.querySelector(".curs-valutar");
    let weatherBlock = document.querySelector(".meteo");
    let background = document.querySelector(".additional-info-background");

    let isCurrency = false;

    infoSection.style["margin"] = "0";

    currencyButtons.forEach(
        function (currencyButton) {
            currencyButton.addEventListener("click", 
            function(){
                infoSection.style.display = "flex";
                currencyBlock.style.display = "block";
                isCurrency = true;
            });
        }
    );
    
    weatherButtons.forEach(
        function (weatherButton) {
            weatherButton.addEventListener("click", 
            function(){
                infoSection.style.display = "flex";
                weatherBlock.style.display = "block";
                isCurrency = false;
            });
        }
    );


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

function fadeIn(button, target, closeButton = null){
    button.addEventListener("click",
        function () {
            target.style["display"] = "block";
            let op = 0;
            for(let i=0;i<10;i++){
                setTimeout(
                    function () {
                        op+=0.1;
                        target.style["opacity"] = op;
                        if(op > 0.9){
                            if(closeButton === null){
                                fadeOut(button,target);
                            }else{
                                fadeOut(closeButton,target,button);
                            }
                        }
                    }
                    ,30);
            }
            // preventGeneralScroll();
        }
    );
}

function fadeOut(button, target, openButton = null){
    button.addEventListener("click",
        function () {
            let op = 1;
            setTimeout(function () {
                target.style["display"] = "none";
            },300);
            for(let i=0;i<10;i++){
                setTimeout(
                    function () {
                        op-=0.1;
                        target.style["opacity"] = 0;
                        if(op < 0.1){
                            if(openButton === null){
                                fadeIn(button,target);
                            }   
                        }
                    }
                    ,30);
            }
        }
    );
}

function slideIn(button, target) {
    button.onclick = function () {
        setTimeout(
            function () {
                target.style["bottom"] = 0;
                slideOut(button,target);
            }
        ,1);
    }
}

function slideOut(button, target) {
    button.onclick = function () {
        setTimeout(
            function () {
                target.style["bottom"] = "150px";
                slideIn(button,target);
            }
        ,1);
    }
}

function setupMobileHeader(){
    let menuButton = document.querySelector(".menu-icon");
    let menuCloseButton = document.querySelector(".close-menu-icon");
    let searchButton = document.querySelector(".search-icon-header");

    let menuTarget = document.querySelector(".menu");
    let searchTarget = document.querySelector(".search-box");

    fadeIn(menuButton,menuTarget,menuCloseButton);
    slideIn(searchButton, searchTarget);
}

function preventGeneralScroll(){
    var fixed = document.getElementById('fixed');

    fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

    }, false);
}

// setupAds();
setupMobileHeader();
setupBody();
setupSmallArticles();
// setupAdditionalInfo();