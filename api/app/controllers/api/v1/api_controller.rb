class Api::V1::ApiController < ActionController::Base

  include DeviseTokenAuth::Concerns::SetUserByToken
  skip_before_action :verify_authenticity_token
end
