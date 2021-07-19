require 'test_helper'

class Api::V1::ReservesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_reserves_index_url
    assert_response :success
  end

end
