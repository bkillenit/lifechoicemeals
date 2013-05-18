class Product < ActiveRecord::Base
  attr_accessible :description, :name, :price, :photo

  validates :name, :presence => true    
  has_attached_file :photo

end
