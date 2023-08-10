#3 is fizz
#5 is buzz
#3 and 5 is fizzbuzz

#create a loop
for number in range(0,16):
    if (number % 3) == 0 and (number % 5)==0:
        print("fizzbuzz")
    elif (number % 3)==0:
        print("fizz")
    elif (number % 5)==0:
        print("buzz")
    else:
        #print current number
        print(number)