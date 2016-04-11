import random

def qsort(l):
    # Check if length of list == 0
    if (len(l) <= 0):
        return l;
    # Pivot is l[0]
    pivot = random.choice(l)
    # Recursively sort
    lower = qsort([x for x in l if x < pivot])
    upper = qsort([x for x in l if x > pivot])
    return lower + [pivot] * l.count(pivot) + upper

print qsort([9,9,9,2,3,5,1,3,1])
