class AddTotalDaysToReserves < ActiveRecord::Migration[6.0]
  def change
    add_column :reserves, :total_days, :integer
    add_column :reserves, :total_fee, :integer
  end
end
