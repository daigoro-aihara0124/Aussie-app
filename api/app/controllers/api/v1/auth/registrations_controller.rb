class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  
  private

  def whoami
    render json: current_api_v1_user, status: :ok
  end

  def sign_up_params
    params.permit(:name, :email, :password)
  end

  def account_update_params
    params.permit(:name, :email, :image)
  end
end
