def invert(lst):
    result = [];
    
    for item in lst:
        if (item == 0): result.append(-0)
        else: result.append(item - (item * 2))
            
    return result