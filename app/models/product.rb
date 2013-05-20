class Product < ActiveRecord::Base
  attr_accessible :description, :name, :price, :photo

  validates :name, :presence => true    
  validates :price, :format => { :with => /^\d+??(?:\.\d{0,2})?$/ }, :numericality => {:greater_than => 0}
  has_attached_file :photo, styles: {thumb: "100x100#", medium: "300x300#"}

end
