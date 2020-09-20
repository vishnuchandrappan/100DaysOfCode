'''
Write a function shuffle(l1,l2) that takes as input two lists,
11 and l2, and returns a list consisting of the first element in l1, 
then the first element in l2, then the second element in l2, 
then the second element in l2, and so on. 
If the two lists are not of equal length, 
the remaining elements of the longer list 
are appended at the end of the shuffled output.
'''

def shuffle(l1,l2):
  newList = []
  lenL1 = len(l1)
  lenL2 = len(l2)
  for i in range(min(lenL1,lenL2)):
    newList.append(l1[i])
    newList.append(l2[i])
  if(lenL1 < lenL2):
    newList.extend(l2[lenL1:])
  else:
    newList.extend(l1[lenL2:])
  return newList

