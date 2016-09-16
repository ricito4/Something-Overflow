class Answer < ApplicationRecord
  include VotesHelper
  belongs_to :user
  belongs_to :question
  has_many :comments, as: :commentable
  has_many :votes, as: :votable

  validates :text, :user_id, :question_id, presence: true
end
