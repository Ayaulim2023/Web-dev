arr = [1,2,3,4,5,6]
cnt = 0
for i in range(len(arr)):
    if arr[i] % 3 == 0:
        cnt+=1

print(cnt)