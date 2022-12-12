N=int(input())
a=[int(input()) for i in range(1,N+1)]
x=sorted(a)
max=[]
min=[]
for i in range(len(x)):
    if len(x)<=2:
        print("Not Possible\nNot possible" )
        break
    else:
        if x[i] not in min and len(min)<3:
            min.append(x[i])
        if x[-i-1] not in max and len(max)<3:
            max.append(x[-i-1])
max=max
min=min
if len(max)<=2 and len(min)<=2:
    print("Not possible\nNotPossible")
else:
    print(max)
    print(min)

