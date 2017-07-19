let socket = io();
socket.on('stream', imagen => {
	document.body.style.backgroundImage = `url(${imagen})`;
	//document.body.style.backgroundRepeat = 'no-repeat';
	//document.body.style.backgroundSize = 400;

	/*let img = document.getElementById('view-play');
		img.src = imagen;
	 //	img.height = 600; */
});