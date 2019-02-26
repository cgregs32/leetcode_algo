def self_dividing_numbers(left, right)
  (left..right).select do |n|
    n.to_s.chars.all? do |ea|
      break if ea.to_i.zero?
      (n % ea.to_i).zero?
    end
  end
end

left = 1
right = 25
p self_dividing_numbers(left, right)