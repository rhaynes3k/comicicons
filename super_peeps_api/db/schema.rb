# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_28_195211) do

  create_table "characters", force: :cascade do |t|
    t.string "siteid"
    t.string "name"
    t.string "alignment"
    t.string "publisher"
    t.string "gender"
    t.string "image"
    t.string "intelligence"
    t.string "strength"
    t.string "speed"
    t.string "durability"
    t.string "power"
    t.string "combat"
    t.string "full_name"
    t.string "first_appearance"
    t.string "occupation"
    t.string "affiliations"
    t.string "relatives"
    t.string "likes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
