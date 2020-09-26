require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @base_title = "RoR Tutorial"
  end

  test "should get home" do
    get pages_home_url
    assert_select "title", "Home | #{@base_title}"
    assert_response :success
  end

  test "should get help" do
    get pages_help_url
    assert_select "title", "Help | #{@base_title}"
    assert_response :success
  end

  test 'should get about' do
    get pages_about_url
    assert_select "title", "About | #{@base_title}"
    assert_response :success
  end

end
