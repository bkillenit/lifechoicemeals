class Product < ActiveRecord::Base
  attr_accessible :description, :name, :price

  validates :name, :presence => true    
  

end
