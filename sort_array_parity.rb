def sort_array_by_parity(a)
    odds, even = [], []
    a.map { |n| n % 2 == 0 ? even << n : odds << n }
    [even, odds].flatten
end

p sort_array_by_parity([3,1,2,4])