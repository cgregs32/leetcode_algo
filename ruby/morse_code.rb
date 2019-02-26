def unique_morse_representations(words)
  code_maping = Hash[('a'..'z').zip [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]]
  words.map do |word|
    word.each_char{ |w| code_maping.fetch(w) }.join('')
  end.uniq.count
end


p unique_morse_representations(["gin", "zen", "gig", "msg"])