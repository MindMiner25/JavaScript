let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
}

// Reading

// 1. Iteration
let pointer = structuredClone(list);

while (true) {
    alert(pointer.value);
    pointer = pointer.next == null ? null : pointer.next;
    if (pointer == null) break; 
}

// TC :- O(n) 
// SC :- O(1)

// 2. Recursion

pointer = structuredClone(list);

let readList = (list) => {
    alert(list.value);
    list.next == null ? null : readList(list.next);
};

readList(pointer);

// TC :- O(n)
// SC :- O(n)

// Printing list in reverse order

pointer = structuredClone(list);

let ReadList = (list) => {
    list.next == null ? null : ReadList(list.next);
    alert(list.value);
};

ReadList(pointer)

