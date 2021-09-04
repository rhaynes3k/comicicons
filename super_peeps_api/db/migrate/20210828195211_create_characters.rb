class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :siteid
      t.string :name
      t.string :alignment
      t.string :publisher
      t.string :gender
      t.string :image
      t.string :intelligence
      t.string :strength
      t.string :speed
      t.string :durability
      t.string :power
      t.string :combat
      t.string :full_name
      t.string :first_appearance
      t.string :occupation
      t.string :affiliations
      t.string :relatives
      t.timestamps
    end
  end
end
