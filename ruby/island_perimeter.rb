# Basic Strategy: Iterate through the graph and if you hit land, start by adding 4 to the perimeter. 
# Now if we used brute force,
#  each time we hit land, we would check every side to see if it was also land,
#  and subtract 1 from our perimeter for each surrounding land piece.

def island_perimeter(grid)
  p = 0
  grid.each_with_index do |sub_array, i|
    max_width = sub_array.count - 1
    sub_array.each_with_index do |num, j|
      max_height = grid.count - 1
      if num == 1
        p += 4
        # check all sides for land peices
        # top
        p -= 1 if i > 0 && grid[i-1][j] == 1
        # bottom
        p -= 1 if i < max_height && grid[i+1][j] == 1
        # left
        p -= 1 if j > 0 && grid[i][j-1] == 1
        # right
        p -= 1 if j < max_width && grid[i][j+1] == 1
      end
    end
  end
    p
end

# grid = 
# [[0,1,0,0],
#  [1,1,1,0],
#  [0,1,0,0],
#  [1,1,0,0]]

 grid = 
 [[1,1]]

p island_perimeter(grid)