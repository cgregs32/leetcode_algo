def to_lower_case(str)
  return str.split('').map do |letter|
    ascii = letter.ord
    65 <= ascii && ascii <= 90 ? (ascii + 32).chr : ascii.chr
  end.join('')
end

p to_lower_case("HAPpYZz")