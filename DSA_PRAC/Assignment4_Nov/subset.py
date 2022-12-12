N=int(input())
a=[int(input()) for i in range(1,N+1)]
su=int(input("enter the sum "))
sub=[]
temp=False
for i in range(0,len(a)):
    for j in range(i,len(a)):
        m=a[i:j+1]
        if sum(m)==su:
            print("yes")
            temp=True
            break
if temp==False:
    print("No")
