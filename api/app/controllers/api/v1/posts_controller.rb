class Api::V1::PostsController < ApplicationController

  def index
    render json: Post.all, methods: [:image_url]
  end

  def show
    post = Post.find(params[:id])
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
    if post.destroy
      render json: post
    end
  end

  private

    def set_post
      post = Post.find(params[:id])
    end

    def post_params
      params.permit(:name, :comment, :term, :fee, :address, :image)
    end

    def render_status_404(exception)
      render json: { errors: [exception] }, status: 404
    end

    def render_status_500(exception)
      render json: { errors: [exception] }, status: 500
    end
end
