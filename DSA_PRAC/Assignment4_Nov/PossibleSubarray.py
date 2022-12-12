arr=[1,2,3,4,5]
result=[[]]
for i in range(1,(2**len(arr))):
    a=str(bin(i)[2:])
    a=a[::-1]
    temp_array=[]
    for i in range(0,len(a)):
        if a[i]=="1":
            temp_array.append(arr[i])
    result.append(temp_array)
print(result)

