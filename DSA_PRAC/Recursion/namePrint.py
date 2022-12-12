# result=[]
# def rec(n,result):
#     if n[0]=="c":
#         return ""
#     else:
#         result.append(n[0])
#         return rec(n[1:],result)
# print(rec(["a","b","c","d","e"],result))
# print(result)


def subarr(arr,i,j):
    if len(arr)==j:
        return ""
    elif i>j:
        return subarr(arr,0,j+1)
    else:
        blank.append(arr[i:j+1])
        return subarr(arr,i+1,j)
blank=[]
subarr([1,4,6,24,5],0,0)
print(blank)