'''
Write a function delchar(s,c) 
that takes as input strings s and c, 
where c has length 1 (i.e., a single character), 
and returns the string obtained by deleting 
all occurrences of c in s. 
If c has length other than 1, 
the function should return s
'''
def delchar(s,c):
  if(len(c) > 1):
    return s
  listS = list(s)
  count = listS.count(c)
  for i in range(count):
    listS.remove(c)
  return ''.join(listS)
