def countApplesAndOranges(s, t, a, b, apples, oranges)
  @house_range = (s..t).to_a
  
  def falls_in_range?(compare)
    p compare.select { |pos| pos if @house_range.include?(pos)}.count
  end

  apples_position = apples.map{ |pos| a + pos }
  oranges_position = oranges.map{ |pos| b + pos }
  
  falls_in_range?(apples_position)
  falls_in_range?(oranges_position)
end

s = 7
t = 11
a = 5
b = 15
apples = [-2, 2, 1]
oranges = [5, -6]




p countApplesAndOranges(s, t, a, b, apples, oranges)