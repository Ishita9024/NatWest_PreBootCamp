def f(n):
    if len(n)==0:
        return ""
    else:
         return  f(n[1:len(n)])+(n[0])
print(f("abcde"))