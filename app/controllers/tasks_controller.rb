class TasksController < ApplicationController
  def create
    render json: Task.create!(
      title: params[:title],
      description: params[:description],
      user: current_user,
    )
  end
end
