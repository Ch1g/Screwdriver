import gameRoomChannel from "../../channels/game_room_channel";
export default window.goCrazy;

// on page load
window.addEventListener("load", (event) => {
	const homeBtn = document.querySelector('.home-btn');
	const crazyButton = document.getElementById('crazyButton');



	crazyButton.addEventListener('click', () => {
	    window.gameRoomChannel.speak('Crazy', {
	        offsetLeft: Math.random() * ((window.innerWidth - crazyButton.clientWidth) - 100),
	        offsetTop: Math.random() * ((window.innerHeight - crazyButton.clientHeight) - 50)
	    });
	});

	window.goCrazy = function(offLeft, offTop) {
	    let top, left;

	    left = offLeft;
	    top = offTop;

	    crazyButton.style.top = top + 'px';
	    crazyButton.style.left = left + 'px';
	    crazyButton.style.animation = "none";
	};
});