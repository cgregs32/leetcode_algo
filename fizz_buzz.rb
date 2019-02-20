def fizz_buzz(n)
    (1..n).map do |i| 
      (i % 15).zero? ? "FizzBuzz" : (i % 3).zero? ? "Fizz" : (i % 5).zero? ? "Buzz" : i.to_s
    end
end

n = 15

p fizz_buzz(n)