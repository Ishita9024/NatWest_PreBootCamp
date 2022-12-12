# Make a single digit by doing sum (Formula=> (n*k)%9 if %==0 then answer should be 9
n=input("enter")
k=int(input())
s=n*k
while len(s)!=1:
    count=0
    for i in range(0,len(s)):
        count+=int(s[i])
    s=str(count)
print(s)




