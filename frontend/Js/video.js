const name = prompt("Enter Name to join")

//openCam();
function openCam()
{
    let All_mediaDevices = navigator.mediaDevices

if(!All_mediaDevices || !All_mediaDevices.getUserMedia)
{
    console.log("getUserMedia() not supported ")
    return;
}

All_mediaDevices.getUserMedia({
    audio:true,
    video:true

}).then(function(vidStream)
{
    var video= document.getElementById("videocam");
    if("srcObject" in video)
    {
        video.srcObject= vidStream;
    }
    else 
    {
        video.src= Window.URL.createObjectURL(vidStream);
    }
    video.onloadedmetadata= function(e)
    {
        video.onplay();
    }

}).catch(function(e){
    console.log(e.name+" : "+e.message)
});

}
