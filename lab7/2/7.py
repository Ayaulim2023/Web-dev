if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().split()))

    arr.sort(reverse=True)

    runner_up_index = 1
    while arr[runner_up_index] == arr[0]:
        runner_up_index += 1

    print(arr[runner_up_index])
