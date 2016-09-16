class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :value, null: false #1 or -1 for value
      t.integer :user_id, null: false
      t.string :votable_type
      t.integer :votable_id

      t.timestamps
    end
  end
end
