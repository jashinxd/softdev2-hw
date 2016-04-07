nums = []
for x in range(8):
    nums.append(x)

squares = []
for x in range(8):
    nums.append(x**2)

print "[x for x in range(8)]:"
print [x for x in range(8)]
print ""
print "[x*x for x in range(8)]:"
print [x*x for x in range(8)]
print ""
print "[(x, x*x, x*x*x) for x in range(8)]"
print [(x, x*x, x*x*x) for x in range(8)]
print ""

p = "myNoobPass1234"
print "[x for x in p]:"
print [x for x in p]
print "\n"
print "[x for x in \"1234\"]:"
print [x for x in "1234"]
print ""

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print "[x for x in p if x in UC_LETTERS]:"
print [x for x in p if x in UC_LETTERS]
print "[1 for x in p if x in UC_LETTERS]:"
print [1 for x in p if x in UC_LETTERS]
print "[1 if x in UC_LETTERS else 0 for x in p]"
print [1 if x in UC_LETTERS else 0 for x in p]

"""
YOUR TASK The First:
Write a function that uses list comprehension to return whether a password meets a
minimum threshold: it contains a mixture of upper- and lowercase letters, and at
least one number.
"""
def checkPass(password):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS=UC_LETTERS.lower()
    upper = [1 if char in UC_LETTERS else 0 for char in password]
    lower = [1 if char in LC_LETTERS else 0 for char in password]
    number =[1 if char.isdigit() else 0 for char in password]
    return True if 1 in upper and 1 in lower and 1 in number else False
    
print("checkPass(\"Hello\")")
print(checkPass("Hello"))
print("checkPass(\"12345\")")
print(checkPass("12345"))
print("checkPass(\"helloworld\")")
print(checkPass("helloworld"))
print("checkPass(\"12345HI\")")
print(checkPass("12345HI"))
print("checkPass(\"HelloWorld1\")")
print(checkPass("HelloWorld1"))
    
"""
  YOUR TASK The Second:
  Write a function that uses list comprehension to return a password's strength rating\
  . This function should return a low integer for a weak password and a higher integer\
   for a stronger password. (Suggested scale: 1-10)
   Consider these criteria:
   * mixture of upper- and lower-case
   * inclusion of numerals
   * inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *
"""

def checkStrength(password):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS=UC_LETTERS.lower()
    SPEC_CHARS = ".?!&#,;:-_*"
    passLen = len(password)
    if passLen == 1:
        return 1;
    score = 0
    upper = [1 for char in password if char in UC_LETTERS]
    lower = [1 for char in password if char in LC_LETTERS]
    number = [1 for char in password if char.isdigit()]
    spec = [1 for char in password if char in SPEC_CHARS]
    return int(float(len(upper) + len(number) + len(spec)) / passLen * 10)  

def checkStrength2(p):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS=UC_LETTERS.lower()
    SPEC_CHARS = ".?!&#,;:-_*"
    NUMERALS = '123456789'
    l = [1 if x in UC_LETTERS else
          2 if x in LC_LETTERS else
           3 if x in NUMERALS else
            0 for x in p ]
    return 1 in l and 2 in l and 3 in l

p2 = 'password'
p3 = 'passw0rd'
p4 = 'Password'

print p2 + ': ' + str( checkStrength2(p2) )
print p3 + ': ' + str( checkStrength2(p3) )
print p4 + ': ' + str( checkStrength2(p4) )

"""
print("checkStrength(\"Hello\")")
print(checkStrength("Hello"))
print("checkStrength(\"12345\")")
print(checkStrength("12345"))
print("checkStrength(\"helloworld\")")
print(checkStrength("helloworld"))
print("checkStrength(\"12345HI\")")
print(checkStrength("12345HI"))
print("checkStrength(\"HelloWorld1\")")
print(checkStrength("HelloWorld1"))
"""
