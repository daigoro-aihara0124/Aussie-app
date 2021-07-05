class Like < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :post, optional: true

  # validates_uniqueness_of :user, scope: :post
  scope :filter_by_post, ->(post_id) { where(post_id: post_id) if post_id }
end
