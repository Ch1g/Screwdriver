import consumer from './consumer';
export default window.gameRoomChannel;

let gameRoomChannel;

window.roomConnection = function (roomId) {
	// establishing conection
	window.gameRoomChannel = consumer.subscriptions.create(
		{ channel: 'GameRoomChannel', room: roomId },
		{
			// log connection status to console
			connected() {
				console.log('Connected to room ' + roomId);
			},

			disconnected() {
				console.log('Disconnected from room ' + roomId);
			},
			//

			// broadcaster method
			speak(render_data) {
				this.perform('speak', {
					render_data: JSON.stringify(render_data),
				});
			},
		}
	);
};
