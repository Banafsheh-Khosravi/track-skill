class AddFeildsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :role, :integer
    add_index :users, :role
    add_column :users, :full_name, :string,  null: false
  end
end
