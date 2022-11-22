def invert(lst):
    result = [];
    
    for item in lst:
        if (item == 0): result.append(-0)
        else: result.append(item - (item * 2))
            
    return result

test_cases = {
  "case 1": invert([1,2,3,4,5]),
  "case 2": invert([1,-2,3,-4,5]),
  "case 3": invert([])
}

print(test_cases)