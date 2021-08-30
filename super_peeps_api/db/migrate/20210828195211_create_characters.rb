class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :alignment
      t.string :publisher
      t.string :image

      t.timestamps
    end
  end
end
