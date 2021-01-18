class GameRoom < ApplicationRecord
  belongs_to :game

  after_initialize do |room|
    room.members_quantity = 0
    room.players_score = '{}'
  end
end