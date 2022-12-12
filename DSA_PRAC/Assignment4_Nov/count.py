N=int(input())
a=[int(input()) for i in range(1,N+1)]
k = {}
for j in a:
    if j in k:
        k[j] +=1
    else:
        k[j] =1
temp_result=False
for i in k:
    if k[i]>N//2:
        print(i)
        temp_result=True
if temp_result==False:
    print(-1)