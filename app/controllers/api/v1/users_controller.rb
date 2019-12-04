class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(employee_params)

    if user.save
      render json: user, status: :created
    else
      render json: user.errors
    end
  end

  def index
    @employees = User.employee
  end

  private

  def employee_params
    params.require(:user).permit(:email, :full_name)
  end
end
