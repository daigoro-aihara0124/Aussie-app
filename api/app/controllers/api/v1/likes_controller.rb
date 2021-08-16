class Api::V1::LikesController < Api::V1::ApiController
  before_action :authenticate_api_v1_user!, only: %i[update]
  def index
    render json: Like.filter_by_post(params[:post_id]).select(:id, :user_id, :post_id)
  end
  def create
    Like.create(user_id: current_api_v1_user.id, post_id: params[:post_id])
    head :created
  end

  def destroy
    like = Like.find(params[:id]).destroy
    head :ok
  end
end
