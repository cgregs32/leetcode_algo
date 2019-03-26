def fibonacci(n) 

  fib = [];


  i = 0
  while(i < n)
    if i <= 1
      fib.push(i)
    else
      fib.push(fib[i - 1] + fib[i - 2]);
    end
    i += 1
  end
  fib
end

p fibonacci(7) 