def move_zeros(lst):
    zeros = []
    other_values = []
    
    for item in lst:
        if item == 0: zeros.append(item)
        else: other_values.append(item)
        
    return other_values + zeros