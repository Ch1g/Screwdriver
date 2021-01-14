require 'test_helper'

class GameRoomControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get game_room_index_url
    assert_response :success
  end

end
