if __name__ == '__main__':
    n = int(input().strip())
    
    students = []
    
    for _ in range(n):
        name = input().strip()
        score = float(input().strip())
        students.append([name, score])
    
    students.sort(key=lambda x: x[1])
    
    second_lowest_grade = sorted(set(score for name, score in students))[1]
    
    second_lowest_students = sorted([name for name, score in students if score == second_lowest_grade])
    
    for name in second_lowest_students:
        print(name)
