class Like < ApplicationRecord
  belongs_to :user
  belongs_to :post, optional: true

  validates_uniqueness_of :user, scope: :post
end
