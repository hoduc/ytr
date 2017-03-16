console.log("hello popup!!!");
//browser.runtime.onMessage.addListener(updatePlayer); // update the view


//function updatePlayer(request, sender, sendResponse){
//    console.log("adding title:" + request.title);
//}

function bgPage(){
    return browser.runtime.getBackgroundPage();
}

function titleFromBgPage(page){
    console.log(page.getPlayerTitles());
}

function OnError(error){
    console.log("error:" + error);
}

browser.browserAction.onClicked.addListener((tab) =>{
    console.log("I am clicked!!!");
    //console.log(bgPage().thengetPlayerTitles());
    bgPage().then(titleFromBgPage, OnError);
    //var p = document.getElementById("playlist_title");
    //p.innerHTML = bgPage().player_titles[0];
});