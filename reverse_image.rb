def flip_and_invert_image(a)
  a.map do |array|
    array.reverse.map do |n|
      n == 0 ? 1 : 0
    end
  end
end

a = [[1,1,0],[1,0,1],[0,0,0]]
p flip_and_invert_image(a)