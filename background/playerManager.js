console.log("backgroun script");

var player_titles = [];

browser.runtime.onMessage.addListener(handleMessage);
browser.browserAction.onClicked.addListener(onBrowserActionClicked);

function onBrowserActionClicked(){
    //console.log(getPlayerTitles());
    console.log("Im clicked!!!");
}

function handleMessage(request, sender, sendResponse){
    console.log("hello:" + request.title);
    //browser.runtime.sendMessage(request); //send to popup
    player_titles.push(request.player_title);
}

function getPlayerTitles(){
    return player_titles;
}

