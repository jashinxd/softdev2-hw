import time

def foo( i, j, s):
    print(str(i) + ", " + str(j) + ", " + str(s))

def wrapper( f ):
    def inner( *arg ):
        return f( *arg )
    return inner

closure = wrapper(foo)
print closure( -2, 3, 'hello' )


# Timing function

def timeThis(fn):
    def timefn( *arg ):
        time1 = time.time()
        fn( *arg )
        time2 = time.time()
        return "Time elapsed: " + str(time2 - time1) + " seconds"
    return timefn

def nameAndArgs(fn):
    def retNameAndArgs( *arg ):
        return "Name: " + fn.func_name + " Args: " + str(arg)
    return retNameAndArgs

@nameAndArgs
@timeThis
def combine(s1, s2, l1, l2):
    return s1 + s2 + str(l1) + str(l2) 

combineEX = combine("Jason", "Shin", ["pizza", 3, 5.2], ['p', 43])
print combineEX

#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>" # Should return string "<b>fn</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>" # Should return string "<i>fn</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML # Should print "<b><i>fn</i></b>"
