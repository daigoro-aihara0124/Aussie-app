FactoryBot.define do
  factory :user do
    provider                    { 'email' }
    uid                         { Faker::Internet.safe_email }
    password                    { Faker::Internet.password(min_length: 8) }
    email                       { uid }
    name                        { Gimei.name }
  end
end
