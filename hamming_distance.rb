def hamming_distance(x, y)
  p(x^y)
  (x^y).to_s(2).count("1")
end

x = 680142203
y = 1111953568

p hamming_distance(x, y)