def plus_one(digits)
  (digits.reduce { |en, n| en.to_s + n.to_s }.to_i + 1).to_s.chars.map{ |n| n.to_i }
end

digits = [4,5,6,7]
p plus_one(digits)