class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body
      t.string :author
      t.belongs_to :post, foreign_key: true
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
