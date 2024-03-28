def make_chocolate(small, big, goal):
    # Calculate the maximum number of big bars needed
    max_big = goal // 5
    if max_big > big:
        big_needed = big
    else:
        big_needed = max_big
    
    # Calculate the remaining goal after using big bars
    remaining_goal = goal - (big_needed * 5)
    
    # Check if the remaining goal can be achieved with small bars
    if remaining_goal <= small:
        return remaining_goal
    else:
        return -1
