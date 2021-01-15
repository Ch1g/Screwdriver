class GameRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_room_channel_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast "game_room_channel_#{params[:room]}", game: data["game"], render_data: data["render_data"]

    @game_room = GameRoom.find(params[:room])
    @game_room.score = data["render_data"]
    @game_room.save
  end
end
