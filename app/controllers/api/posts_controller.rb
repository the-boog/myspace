class Api::PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy, :show]
  before_action :set_profile

  def index
    render json: @profile.posts
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors },status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
    render json: {alert: ("You have deleted a Post")}
  end

  private
    def set_post
      @post = @profile.posts.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body, :likes, :profile_id)
    end

    def set_profile
      @profile = Profile.find(params[:profile_id])
    end
    
end
