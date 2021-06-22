class Api::V1::ReservesController < Api::V1::ApiController
  def index
    reserves = Reserve.all
  end

  def create
    reserve = Reserve.create(reserve_params)
    head :created
  end

  def show
    reserve = Reserve.find(params[:id])
  end

  private

  def reserve_params
    params.permit(:start_date, :end_date).merge(user_id: current_api_v1_user.id, post_id: params[:post_id])
  end

end
