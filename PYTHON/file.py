Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

def BSearch(LB, UB, Val):
    while LB <= UB:
        Mid = (LB+UB) // 2
        if Arr[Mid] == Val:
            return Mid
        elif Arr[Mid] < Val:
            LB = Mid + 1
        else:
            UB = Mid - 1
    return -1

x = int(input("Enter value to search for: "))
n = BSearch(0, 9, x)
if n == -1:

    print("Value not found...")
else:
    print("Value found at: ", n)
# end of program