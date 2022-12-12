a=[[1,2,3],[4,5,6],[7,8,9]]
s=[]
top=0
side=0
rows=len(a)
columns=len(a)
while side<columns and top<rows:
    for i in range(side,columns):
        s.append(a[rows-1][i])
    rows-=1
    for i in range(rows-1,top-1,-1):
        s.append(a[i][rows])
    columns-=1
    for i in range(columns-1,side-1,-1):
        s.append(a[top][i])
    top+=1
    for i in range(top,rows):
        s.append(a[i][side])
    side+=1
print(*s)
