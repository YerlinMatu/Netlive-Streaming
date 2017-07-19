
/* Lienzo */

var lienzo = document.getElementById('preview'),
	context = lienzo.getContext("2d");

	lienzo.width = 600;
	lienzo.height = 400;

	context.width = lienzo.width;
	context.height = lienzo.height;

let video = document.getElementById('video');
let socket = io();

function logger (msg) {
	$('#logger').text(msg);
}

function ReadyCam (stream) {
	video.src = window.URL.createObjectURL(stream)
	logger('Cámara disponible');
}

function FaildCam () {
	logger('Cámara no detectada');
}

function viewVideo (video, context){
	context.drawImage(video, 0, 0, context.width, context.height);
	socket.emit('stream', lienzo.toDataURL('image/webp'));
}
$(function(){
navigator.Multimedia = navigator.Multimedia || navigator.webkitGetUserMedia;
if(navigator.Multimedia){
	navigator.Multimedia({video:true, audio:false }, ReadyCam, FaildCam);
}
	setInterval(()=>{
		viewVideo(video, context)
	}, 20)
})