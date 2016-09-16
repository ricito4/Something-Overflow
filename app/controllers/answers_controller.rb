class AnswersController < ApplicationController
  def index
    @answers = Question.find(params[:question_id]).answers

  end
end
