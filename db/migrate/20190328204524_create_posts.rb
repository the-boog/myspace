class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.belongs_to :profile, foreign_key: true
      t.string :body
      t.integer :likes

      t.timestamps
    end
  end
end
