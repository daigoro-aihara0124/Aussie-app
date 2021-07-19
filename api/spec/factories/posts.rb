FactoryBot.define do
  factory :post do
    address { Faker::Address.city }
    name { 'some school' }
    comment { Faker::Lorem.sentence }
    term  { '7' }
    fee { '5000' }
    association :user
  end
end
