class GameRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_room_channel_#{params[:room]}"
  end

  def unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast "game_room_channel_#{params[:room]}", render_data: data["render_data"]

    @game_room = GameRoom.find(params[:room])
    @game_room.render_data = data["render_data"]
    @game_room.save
  end
end
