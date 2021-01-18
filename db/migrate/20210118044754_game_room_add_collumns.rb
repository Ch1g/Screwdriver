class GameRoomAddCollumns < ActiveRecord::Migration[6.0]
  def change
    add_column :game_rooms, :players_score, :text
    rename_column :game_rooms, :score, :render_data
  end
end
