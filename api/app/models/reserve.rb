class Reserve < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :post, optional: true
  validates :user_id, presence: true, uniqueness: true
end
