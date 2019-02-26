def repeated_n_times(a)
  h = Hash.new
  a.map do |n|
    h[n] = 0 unless h.fetch(n, false)
    h[n] = h[n] + 1
    return n if h[n] >= 2
  end
end

p repeated_n_times([5,1,5,2,5,3,5,4])