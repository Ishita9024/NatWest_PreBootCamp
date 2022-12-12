# def f(x,n):
#     if n==0:
#         return 1
#     return (x*f(x,n-1))
# print(f(9,3))
import math
 
# Function to check
# Log base 2
# def Log2(x):
#     return (math.log10(x) /
#             math.log10(2))
# print(Log2(16))
 
sum=0
n=2
m=1
k=4
x=17
i=1
while(True):
    if i%k==0:
        sum+=n
    elif i%k==0:
        sum+=(n+m)
    if sum>=x and i%k==0:
        print("YES")
        break
    i+=1
    if sum>=x and i%k!=0:
        print("No")
        break

