class GameRemoveCollumnGameLogo < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :game_logo
  end
end