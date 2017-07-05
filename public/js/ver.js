var socket = io();
socket.on('stream', imagen=>{
	var img = document.getElementById('play');
		img.src = imagen;
		img.width = 800;
		img.height = 600;
});