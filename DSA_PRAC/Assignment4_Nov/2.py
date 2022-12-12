N=int(input())
a=[int(input()) for i in range(1,N+1)]  
a1=set(a)
for i in a1:
    count=0
    for j in a:
        if i==j:
            count+=1
    if count<3:
        print(i)
    

    
