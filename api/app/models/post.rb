class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :image

  belongs_to :user, optional: true
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
  has_many :reserves, dependent: :destroy
  def image_url
    # 紐づいている画像のURLを取得する
    image.attached? ? url_for(image) : nil
  end
end
