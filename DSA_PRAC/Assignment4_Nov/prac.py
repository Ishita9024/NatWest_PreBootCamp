arr=[39,27,11,4,24,32,32,1]
a=[-1]
for i in range(1,len(arr)):
    if arr[i]<arr[i-1]:
        a.append(-1)
    else:
        a.append(min(arr[i],arr[i-1]))
print(a)



