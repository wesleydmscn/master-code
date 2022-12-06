for int in range(100):
  if (int % 3 == 0 and int % 5 == 0):
    print('FizzBuzz')
  elif (int % 3 == 0):
    print('Fizz')
  elif (int % 5 == 0):
    print('Buzz')
  else:
    print(int)