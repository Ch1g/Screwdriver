class CreateGameRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :game_rooms do |t|
      t.references :game, null: false, foreign_key: true
      t.text :score

      t.timestamps
    end
  end
end
