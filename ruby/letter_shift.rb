# def shifting_letters(s, shifts)
#   alphabet = Hash[('a'..'z').zip (1..26)]

#   s.chars.map.with_index do |n, i|
#     value = (alphabet.fetch(n) + shifts[i..shifts.length].sum) % 26
#     alphabet.key(value.zero? ? 26 : value)
#   end * ''
# end

def shifting_letters(s, shifts)
  s.chars.map.with_index do |n, i|
    ((((n.ord - 97) + shifts[i..shifts.length].sum % 26) % 26) + 97).chr
  end * ''
end



s = "ruu"
shifts = [26,9,17]

p shifting_letters(s, shifts)