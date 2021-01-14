class AddMembersToGameRoom < ActiveRecord::Migration[6.0]
  def change
    add_column :game_rooms, :members_quantity, :integer
  end
end
