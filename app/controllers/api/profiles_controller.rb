class Api::ProfilesController < ApplicationController
  before_action :set_profile, only: [:update, :destroy, :show]

  def index
    render json: current_user.profile
  end

  def show
    render json: @profile
  end

  def create
    profile = Profile.new(profile_params)
    if profile.save
      render json: profile
    else
      render json: { errors: profile.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @profile.update(profile)
      render json: @profile
    else
      render json: @profile.errors, status: 422
    end
  end

  def destroy
    @profile.destroy
    render json: {alert: ("You have deleted your Profile!")}
  end

  private
    def set_profile
      @profile = current_user.profile.find(params[:id])
    end

    def profile_params
      params.require(:profile).permit(:name, :avatar, :user_id)
    end
end

