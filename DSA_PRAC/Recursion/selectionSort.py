def selection(arr,result):
    if len(arr)==0:
        return ""
    else:
        j=arr.index(min(arr))
        arr[0],arr[j]=arr[j],arr[0]
        result.append(arr[0])
        return selection(arr[1:],result)
arr=[1,2,5,4,7,8]
result=[]
selection(arr,result)
print(result)