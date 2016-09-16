class Question < ApplicationRecord
  include VotesHelper
  belongs_to :user
  has_many :answers
  has_many :comments, as: :commentable
  has_many :votes, as: :votable

  validates :title, :text, :user_id, presence: true
end
