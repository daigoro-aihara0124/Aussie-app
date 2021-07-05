class Api::V1::PostsController < Api::V1::ApiController
  before_action :authenticate_api_v1_user!, only: %i[update destroy]

  def index
    render json: Post.eager_load(:user), methods: [:image_url]
  end

  def show
    post = Post.find(params[:id])
    like = Like.new
    render json: post, methods: [:image_url]
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, methods: [:image_url]
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: post, methods: [:image_url]
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy!
    render json: post,  methods: [:image_url]
  end

  private

    def post_params
      params.permit(:name, :comment, :term, :fee, :address, :image).merge(user_id: current_api_v1_user.id)
    end

    def render_status_404(exception)
      render json: { errors: [exception] }, status: 404
    end

    def render_status_500(exception)
      render json: { errors: [exception] }, status: 500
    end
end
