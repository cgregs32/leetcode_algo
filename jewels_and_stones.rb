def num_jewels_in_stones(j, s)
  hash  = Hash[j.split('').zip (0...j.length).map {|n| true}]
  rocks = s.split("").reject { |en| hash.fetch(en, false) }
  (s.length - rocks.length).abs
end

p num_jewels_in_stones("aA", "aAAbbbb")
