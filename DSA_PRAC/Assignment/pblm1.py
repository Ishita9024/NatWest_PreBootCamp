for i in range(int(input())):
    N=int(input())
    height=[int(input()) for i in range(0,N)]
    for i in range(0,len(height)):
        power=1
        j=i
        while height[j-1]<height[i] and j!=0:
                power+=1
                j-=1
        print(power,end=" ")