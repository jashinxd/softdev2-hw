def union(a, b):
    return a + [x for x in b if x not in a]  

print union([1,2,3],[2,3,4])

def intersection(a, b):
    return [x for x in a if x in b]

print intersection([1,2,3],[2,3,4])

def setDifference(a, b):
    return [x for x in a if x not in b]

print setDifference([1,2,3],[2,3,4])
print setDifference([2,3,4],[1,2,3])

def symDifference(a, b):
    return setDifference(a, b) + setDifference(b, a)

print symDifference([1,2,3],[2,3,4])

def cartProd(a, b):
    return [(x, y) for x in a for y in b]

print cartProd([1,2],['red', 'white'])
