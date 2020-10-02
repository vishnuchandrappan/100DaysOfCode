require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @base_title = "RoR Tutorial"
  end

  test "should get home" do
    get root_url
    assert_select "title", "Home | #{@base_title}"
    assert_response :success
  end

  test "should get help" do
    get help_url
    assert_select "title", "Help | #{@base_title}"
    assert_response :success
  end

  test 'should get about' do
    get about_url
    assert_select "title", "About | #{@base_title}"
    assert_response :success
  end

end
