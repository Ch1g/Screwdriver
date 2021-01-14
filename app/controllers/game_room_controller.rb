class GameRoomController < ApplicationController
  def index
    @room_id = params[:id]
  end
end
