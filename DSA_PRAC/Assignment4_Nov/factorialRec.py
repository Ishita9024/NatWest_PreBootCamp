def f(n):
    if n==0 or n==1:
        return n
    return f(n)*f(n-1)
print(f(4))