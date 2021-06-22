class ChangeDataEndDateToReserve < ActiveRecord::Migration[6.0]
  def change
    change_column :reserves, :end_date, :date
  end
end
