console.log("hello popup!!!");

function bgPage(){
    return browser.runtime.getBackgroundPage();
}

function titleFromBgPage(page){
    //console.log("get that title!!");
    console.log(page.getPlayerTitles());
}

function OnError(error){
    console.log("error:" + error);
}

document.addEventListener('DOMContentLoaded',function(){
    //console.log("im loaded");
    var bgPage = browser.runtime.getBackgroundPage();
    bgPage.then(titleFromBgPage, OnError);
},false);