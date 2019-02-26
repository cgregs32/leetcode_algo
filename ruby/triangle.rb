#WIP
def minimum_total(triangle)
  triangle[triangle.length].each_with_index do |n, i|
    levels = triangle.length
    avail_1 = triangle[levels - 1][i]
    avail_2 = triangle[levels - 1][i - 1]
    
  end
end

triangle = [
   [2],
  [3,4],
 [6,5,7],
[4,1,8,3]
]

[  [-1],
  [2,3],
[1,-1,-3]]

p minimum_total(
  [[-1],[2,3],[1,-1,-3]])