    /* Lienzo */
	var canvas = document.getElementById('preview'),
		context = canvas.getContext("2d");

		canvas.width = 600;
		canvas.height = 400;

		context.width = canvas.width;
		context.height = canvas.height;

		var video = document.getElementById('video');
		var socket = io();
		function logger(msg){
			$('#logger').text(msg);
		}

		function ReadyCam(stream){
			video.src = window.URL.createObjectURL(stream)
			logger('Cámara disponible')
		}

		function FalloCam(){
			logger('Cámara no detectada');
		}

		function viewVideo(video, context){
			context.drawImage(video, 0, 0, context.width, context.height);
			socket.emit('stream', canvas.toDataURL('image/webp'));
		}
	$( function(){
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
		if(navigator.getUserMedia){
			navigator.getUserMedia({video:true, audio:false }, ReadyCam, FalloCam);
		}
			setInterval(function(){
				viewVideo(video, context)
			},50)
		
	})
