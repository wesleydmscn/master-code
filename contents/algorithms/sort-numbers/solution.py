def solution(nums):
    if (nums != None):
        return sorted(nums)
    else: return []

test_cases = {
    "case 1": solution([1,2,3,10,5]),
    "case 2": solution(None),
    "case 3": solution([]),
    "case 4": solution([20, 2, 10])
}

print(test_cases)