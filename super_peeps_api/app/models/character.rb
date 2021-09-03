class Character < ApplicationRecord

  def self.villians
    self.where(alignment: 'bad')
  end

  def self.heros
    self.where(alignment: 'good')
  end

  

end
