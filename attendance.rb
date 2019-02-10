# First Implementation - slower
# def check_record(s)
#   a = !!(s =~ /L{3}/)
#   b = !!(s =~ /A.*?A/)
#   return false if a || b
#   true
# end

# refactored -- faster
def check_record(s)
  !s[/(A.*?A)|(L{3})/]
end

puts check_record("PPALLL")

