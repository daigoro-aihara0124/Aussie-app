class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  def update
    if @resource
      if params[:image] == 'null'
        if @resource.send(resource_update_method, account_update_params_not_image)
         yield @resource if block_given?
         render_update_success
         else
          render_update_error
        end
      else
        if @resource.send(resource_update_method, account_update_params)
          yield @resource if block_given?
          render_update_success
        else
          render_update_error
        end
      end
    else
      render_update_error_user_not_found
    end
  end

  def read(*args)
    @tempfile.read(*args)
  end

  private

  def sign_up_params
    params.permit(:name, :email, :password)
  end

  def account_update_params
    params.permit(:name, :email, :image)
  end
end
