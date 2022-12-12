sub=[]
a="bcaca"
for i in range(0,len(a)):
    for j in range(i,len(a)):
        sub.append(a[i:j+1])
print(sub)