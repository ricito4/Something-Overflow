class QuestionsController < ApplicationController
  def index
    @questions= Question.all.reverse
  end
  def show
    @user = Question.find(params[:id]).user.to_json
    @question = Question.find(params[:id]).to_json
  end
  def new
  end
  def create
    @question = Question.new(question_params)
    @question.user_id= User.first.id
    @question.save
    render json:@question.as_json(include: :user)
  end
private

  def question_params
    params.require(:question).permit( :title, :text, :user_id )
  end
end

