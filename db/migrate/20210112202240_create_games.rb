class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.text :description
      t.string :game_logo

      t.timestamps
    end
  end
end
