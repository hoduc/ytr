console.log("Hello");
player = document.getElementsByClassName("video-stream html5-main-video")[0];
//has player
if(player){
    console.log("has player:");
    
    player.onended = function(){
    	console.log("im done!!");
    	player.play();
    }
}
else console.log("no player!!!");
