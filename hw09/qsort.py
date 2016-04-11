def qsort(l):
    # Check if length of list == 0
    if (len(l) <= 0):
        return l;
    # Pivot is l[0]
    pivot = l[0]
    # Recursively sort
    lower = qsort([x for x in l[1:] if x <= pivot])
    upper = qsort([x for x in l[1:] if x > pivot])
    return lower + [l[0]] + upper

print qsort([9,2,3,5,1,3,1])
