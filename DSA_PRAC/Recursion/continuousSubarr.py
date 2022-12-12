# sub=[]
# a=[1,2,3]
# for i in range(0,len(a)):
#     for j in range(i,len(a)):
#         sub.append(a[i:j+1])
# print(sub) 

def sub(arr,i,j):
    if len(arr)==j:
        return ""
    elif i>j:
        return sub(arr,0,j+1)
    else:
        li.append(arr[i:j+1])
        return sub(arr,i+1,j)
li=[]
sub([1,2,3],0,0)
print(li)