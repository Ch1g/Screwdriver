class GameRoomsController < ApplicationController
  def show
    @room_id = params[:id]
  end

  def create
    @room = GameRoom.new(game_room_params)
    @room.render_data = params[:default_render]
    @room.game_id = params[:game]
    if @room.save
      redirect_to game_room_url @room
    else
      redirect_to root_url
    end
  end

  private
  
  def game_room_params
      params.permit(:render_data, :game_id)
  end
end
