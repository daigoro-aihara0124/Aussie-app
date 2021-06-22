class ChangeDataStartDateToReserve < ActiveRecord::Migration[6.0]
  def change
    change_column :reserves, :start_date, :date
  end
end
