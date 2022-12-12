a=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
s=[]
for j in range(len(a)-1,-1,-1):
    s.append(a[j][0])
for j in range(1,len(a)-1):
    s.append(a[0][j])
for j in range(0,len(a)-1):
    s.append(a[j][len(a)-1])
for j in range(len(a)-1,0,-1):
    s.append(a[len(a)-1][j])
print(s)
 