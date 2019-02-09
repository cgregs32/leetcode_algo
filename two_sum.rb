# Brute force implementation
def two_sum(nums, target)
  result = []
  nums.each_with_index do |x, i|
    nums.each_with_index do |y, ind|
      next if i == ind
      if x + y == target
        result << [i, ind]
      end
    end
  end
  result.flatten.uniq
end

# hash implementation
def two_sum(nums, target)
  hash  = Hash[nums.zip (0...nums.size)]
  nums.each_with_index do |num, i|
    complement = target - num
    friend = hash.fetch(complement, nil)

    if hash.key?(complement) && friend != i
      return [i, friend]
    end
  end
end



p two_sum([7, 2, 8, 9], 9)
