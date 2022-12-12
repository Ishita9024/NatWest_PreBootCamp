def rec(arr):
    if len(arr)==0:
        return 0
    else:
       return arr[0]+rec(arr[1:len(arr)])
print(rec([2,3,4,5]))
