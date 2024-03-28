if __name__ == '__main__':
    n = int(input().strip())
    
    integer_list = tuple(map(int, input().strip().split()))
    
    print(hash(integer_list))
