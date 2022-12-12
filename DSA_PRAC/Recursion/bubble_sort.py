# First Method
# def bubble(a,n):
#     for i in range(0,n-1):
#         if a[i]>a[i+1]:
#             a[i],a[i+1]=a[i+1],a[i]
#     if n>0:
#         bubble(a,n-1)
# a=[3,5,1,2,6]
# n=len(a)
# bubble(a,n)
# print(a)


#Second Method
def bubble(a,n):
    if n==0:
        return 
    else:
        for i in range(0,n-1):
            if a[i]>a[i+1]:
                a[i],a[i+1]=a[i+1],a[i]
    return bubble(a,n-1)
a=[3,5,1,2,6]
n=len(a)
bubble(a,n)
print(a)