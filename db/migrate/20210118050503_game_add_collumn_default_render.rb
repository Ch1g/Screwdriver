class GameAddCollumnDefaultRender < ActiveRecord::Migration[6.0]
  def change
      add_column :games, :default_render, :text 
      add_column :games, :asset_name, :string
  end
end
