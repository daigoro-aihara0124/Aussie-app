class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.select(:id, :name, :address)
    render json: posts
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:name, :comment, :term, :fee, :address)
    end

    def render_status_404(exception)
      render json: { errors: [exception] }, status: 404
    end

    def render_status_500(exception)
      render json: { errors: [exception] }, status: 500
    end
end
