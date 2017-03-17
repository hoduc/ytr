console.log("background-script");

var player_titles = [];

browser.runtime.onMessage.addListener(handleMessage);
browser.browserAction.onClicked.addListener(onBrowserActionClicked);

function onBrowserActionClicked(){
    //console.log(getPlayerTitles());
    //console.log("Im clicked!!!");
    console.log(player_titles);
}

function handleMessage(request, sender, sendResponse){
    console.log("hello:" + request.title);
    //browser.runtime.sendMessage(request); //send to popup
    player_titles.push(request.title);
}

function getPlayerTitles(){
    return player_titles;
}

