N=int(input())
a=[int(input()) for i in range(1,N+1)]
k=int(input("enter the divisible number "))
sub=[]
for i in range(0,len(a)):
    for j in range(i,len(a)):
        sub.append(a[i:j+1])
print(sub)     

# subarr=[]
# for i in range(len(sub)):
#     sum=0
#     for j in range(len(sub[i])):
#         sum+=sub[i][j]
#     if sum%k!=0:
#         subarr.append(sub[i])
#     else:
#         pass
# print(subarr)

# max=0
# for i in subarr:
#     if len(i)>max:
#         max=len(i)
# count=0
# for i in subarr:
#     if len(i)==max:
#         count+=1


# print(count)