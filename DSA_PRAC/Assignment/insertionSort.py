a=[2,3,1,3,8,56,7]
for i in range(1,len(a)):
    key=a[i]
    j=i
    while j!=0 and key<a[j-1]:
        a[j],a[j-1]=a[j-1],a[j]
        j-=1
print(a)

