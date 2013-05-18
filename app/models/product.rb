class Product < ActiveRecord::Base
  attr_accessible :description, :name, :price, :photo

  validates :name, :presence => true    
  has_attached_file :photo, styles: {thumb: "100x100#", medium: "300x300#"}

end
