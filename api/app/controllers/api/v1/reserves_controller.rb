class Api::V1::ReservesController < Api::V1::ApiController

  def index
    reserves = Reserve.all
    render json: reserves
  end

  def create
    reserve = Reserve.create(reserve_params)
    head :created
  end

  def show
    reserve = Reserve.find(params[:id])
    render json: reserve
  end

  private

  def reserve_params
    params.permit(:id, :start_date, :end_date, :total_days, :total_fee).merge(user_id: current_api_v1_user.id, post_id: params[:post_id])
  end

end
