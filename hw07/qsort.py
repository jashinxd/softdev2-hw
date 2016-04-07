def qsort(l):
    if (len(l) == 0):
        return l
    pivot = l[0]
    lower = qsort([x for x in l[1:] if x <= pivot])
    upper = qsort([x for x in l[1:] if x > pivot])
    return lower + [l[0]] + upper

print qsort([9,2,3,5,1,3,1])

