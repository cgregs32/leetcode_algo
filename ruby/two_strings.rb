# Complete the twoStrings function below.
def twoStrings(s1, s2)
  s_hash = Hash.new(0)
  s1.split('').each do | el |
      s_hash[el] += 1
  end

  found = 'NO'
  s2.split('').each do |el|
    found = "YES" if s_hash[el] > 1
  end

  found
end

twoStrings('apple', "hi")