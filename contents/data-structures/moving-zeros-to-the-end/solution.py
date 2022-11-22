def move_zeros(lst):
    zeros = []
    other_values = []
    
    for item in lst:
        if item == 0: zeros.append(item)
        else: other_values.append(item)
        
    return other_values + zeros

test_cases = {
  "case 1": move_zeros([1,2,0,1,0,1,0,3,0,1]),
  "case 2": move_zeros([1,2,2,1,0,1,0,3,0,1]),
  "case 3": move_zeros([1,2,0,1,3,1,0,3,0,1]),
  "case 4": move_zeros([1,2,0,1,5,1,0,3,0,1])
}

print(test_cases)