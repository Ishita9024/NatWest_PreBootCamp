# def f(n):
#     if n==0 or n==1:
#         return n
#     return f(n-1)+f(n-2)
# print(f(5))



def s(a,n):
    for i in range(0,n-1):
        if a[i]>a[i+1]:
            a[i],a[i+1]=a[i+1],a[i]
    if n>0:
        return s(a,n-1)
a=[1,2,3,54,23]
n=len(a)
s(a,n)
print(a)