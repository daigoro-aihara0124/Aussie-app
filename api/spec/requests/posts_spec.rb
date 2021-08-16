require 'rails_helper'

RSpec.describe 'PostsAPI', type: :request do
  describe 'ログイン済' do
    describe 'GET /posts' do
      it '投稿の一覧を取得できること' do
        user = create(:user)
        post = create(:post, user: user)
        login user

        get '/api/v1/posts'

        expect(response).to have_http_status(:success)
        post_json = JSON.parse(response.body).first
        expect(post_json['id']).to eq post.id
        expect(post_json['image_url']).to eq post.image_url
        expect(post_json['address']).to eq post.address
        expect(post_json['name']).to eq post.name
        expect(post_json['comment']).to eq post.comment
        expect(post_json['term']).to eq post.term
        expect(post_json['fee']).to eq post.fee
        expect(post_json['user_id']).to eq post.user_id
      end
    end
    describe 'GET /api/v1//posts/:id' do
      it '投稿の詳細を取得できること' do
        user = create(:user)
        post = create(:post, user: user)
        login user

        get "/api/v1/posts/#{post.id}"

        expect(response).to have_http_status(:success)
        post_json = JSON.parse(response.body)
        expect(post_json['id']).to eq post.id
        expect(post_json['image_url']).to eq post.image_url
        expect(post_json['address']).to eq post.address
        expect(post_json['name']).to eq post.name
        expect(post_json['comment']).to eq post.comment
        expect(post_json['term']).to eq post.term
        expect(post_json['fee']).to eq post.fee
        expect(post_json['user_id']).to eq post.user_id
      end
    end
    describe 'POST /posts' do
      it '投稿を作成できること' do
        user = create(:user)
        login user
        params = attributes_for :post

        post '/api/v1/posts', params: params

        expect(response).to have_http_status(:success)
        post_json = JSON.parse(response.body)
        post = Post.find(post_json['id'])
        expect(post_json['id']).to eq post.id
        expect(post_json['image_url']).to eq post.image_url
        expect(post_json['address']).to eq post.address
        expect(post_json['name']).to eq post.name
        expect(post_json['comment']).to eq post.comment
        expect(post_json['term']).to eq post.term
        expect(post_json['fee']).to eq post.fee
        expect(post_json['user_id']).to eq post.user_id
      end
    end
    describe 'PATCH /posts/:id' do
      it '投稿を更新できること' do
        user = create(:user)
        post = create(:post, user: user)
        login user
        params = attributes_for :post

        patch "/api/v1/posts/#{post.id}", params: params

        expect(response).to have_http_status(:success)
        post_json = JSON.parse(response.body)
        post = Post.find(post_json['id'])
        expect(post_json['id']).to eq post.id
        expect(post_json['image_url']).to eq post.image_url
        expect(post_json['address']).to eq post.address
        expect(post_json['name']).to eq post.name
        expect(post_json['comment']).to eq post.comment
        expect(post_json['term']).to eq post.term
        expect(post_json['fee']).to eq post.fee
        expect(post_json['user_id']).to eq post.user_id
      end
    end
    describe 'DELETE /posts/:id' do
      it '投稿を削除できること' do
        user = create(:user)
        post = create(:post, user: user)
        login user

        delete "/api/v1/posts/#{post.id}"

        expect(response.status).to eq 200
      end
    end
  end
end
