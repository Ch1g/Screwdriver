import gameRoomChannel from '../../channels/game_room_channel';

// game starter
window.startCrazyBtn = function (username) {
	// variables declaring
	const crazyButton = document.getElementById('crazyButton');
	const homeBtn = document.querySelector('.home-btn');

	// polymorphic function for connectionObject
	window.gameRoomChannel.received = function (data) {
		let offset = JSON.parse(data.render_data);
		goCrazy(offset.left, offset.top);
	};

	// event listener on click
	crazyButton.addEventListener('click', () => {
		window.gameRoomChannel.speak({
			left: Math.random() * Math.floor(Math.random() * 100) + 1,
			top: Math.random() * Math.floor(Math.random() * 100) + 1,
		});
	});
};

// render-function
window.goCrazy = function (offLeft, offTop) {
	let top, left;

	left = offLeft;
	top = offTop;

	crazyButton.style.top = top + '%';
	crazyButton.style.left = left + '%';
};
