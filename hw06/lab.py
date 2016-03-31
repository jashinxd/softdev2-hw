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
    [ for char in password if char in UC_LETTERS or char in 

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
