class QuestionsController < ApplicationController
  def index
    @questions= (Question.includes(:user)).to_json
  end
  def show
    @question = Question.find(params[:id]).to_json
  end
end
