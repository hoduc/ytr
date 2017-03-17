console.log("Hello content script");
player = document.getElementsByClassName("video-stream html5-main-video")[0];
//has player
if(player){
    console.log("has player:");
    //setup replay
    player.onended = function(){
    	console.log("im done!!");
    	player.play();
    };

    var title = document.getElementsByClassName("watch-title")[0].textContent;
    //console.log("hello:contentscript:title:" + title);
    browser.runtime.sendMessage({"title": title});
    //console.log("after sending message!!!");
}
else console.log("no player!!!");
