'''
A positive integer m is a prime product if it can be written as p×q, 
where p and q are both primes.

Write a Python function primeproduct(m)
that takes an integer m as input 
and returns True if m is a prime product 
and False otherwise. 
(If m is not positive, your function should return False.)
'''
def isPrime(x):
  if(x<2):
    return False;
  for i in range(2, int(x**0.5)+1):
    if(x%i == 0):
      return False;
  return True;

def primeproduct(m):
  if(m<0):
    return False;
  for i in range(2,int(m**0.5)+1):
    if(isPrime(i)):
      n = int(m/i)
      if(n*i == m):
        if(isPrime(n)):
          return True;
  return False
