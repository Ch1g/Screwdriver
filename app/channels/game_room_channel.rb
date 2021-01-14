class GameRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_room_channel_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
