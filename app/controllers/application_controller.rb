class ApplicationController < ActionController::Base

  helper_method :current_user, :room_data

  def current_user
    return @current_user if @current_user.present?
    if session[:user_id].present?
      @current_user = User.find(session[:user_id])
    else
      @current_user = User.generate
      session[:user_id] = @current_user.id
      @current_user
    end
  end

  def room_data(room_id)
    room = GameRoom.find(room_id)
    { render_data: JSON.parse(room.render_data),
      players_score: JSON.parse(room.players_score) }
  end

end
