function updateTime() {
	var clock = document.getElementById("clock");
	var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	clock.innerText = time;
};

updateTime();
setInterval(updateTime, 3000);