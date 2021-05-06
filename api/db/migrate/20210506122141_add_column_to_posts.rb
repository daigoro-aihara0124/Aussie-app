class AddColumnToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :term, :string
    add_column :posts, :fee, :integer
    add_column :posts, :address, :string
  end
end
