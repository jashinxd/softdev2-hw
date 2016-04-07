def inc(x):
    return x + 1

f = inc
print f(10)

# Q1: How would you explain to your ducky what this Scheme code does?
# (lambda (a b) (+ a b))
# The scheme code will create a function that takes two variables and adds them together.

# Q2: How would you explain to your ducky what this Scheme code does?
# (define foo (lambda (a b) (+ a b)))
# The scheme code will assign the variable foo to the previously explained function. 

def h(x):
    return lambda y: x + y

print h(1) # Prints memory address of lambda y: x + y
print h(2) # Prints memory address of lambda y: x + y
print h(1)(3) # Runs h(x) with x = 2 and y = 3
print h(2)(5) # Runs h(x) with x = 2 and y = 5

b=h(1)
#print b(3)

# Q3: Which of the four h() calls above would you say also created closures?
# All four  would create closures.

def f(x):
    def g(y):
        return x + y
    return g
                
print f(1) # Prints memory address of g(y)
print f(2) # Prints memory address of g(y)
print f(1)(3) # Runs f(x) with x = 1 and y = 3
print f(2)(5) # Runs f(x) with x = 2 and y = 5

a=f(1)
b=h(1)

print a
print b


"""
=======================================================
TASK:
Write a closure with outer function named 'repeat'
such that the function calls shown below will yield the outputs shown.

print r1(2) -> hellohello
print r2(2) -> goodbyegoodbye
print repeat('cool')(3) -> coolcoolcool
=======================================================
"""
def repeat(s1):
    def times(i):
        return i * s1
    return times

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat("cool")(3)
