
def func(n):
    if n[0]=="ishu":
        return n[0]
    return func(n[1:len(n)])
print(func(["sad","happy","smile","ishu"]))

