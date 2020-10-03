---
layout: post
title:  "Prefix Searching and PATRICIA Trees"
date:   2020-08-29 08:00:00 +0200
categories: [algorithms, javascript, java]
---

**PATRICIA** stands for **P**ractical **A**lgorithm **T**o **R**etrieve **I**nformation **C**oded **I**n **A**lphanumeric.

That's a bit of a mouthful but basically it's a binary radix tree. More information can be found on the [wikipedia page](https://en.wikipedia.org/wiki/Radix_tree) and there's a lot of other information out there.

How it works is by bitwise comparison of alphanumeric keys.

Any generic node is defined as follows:

```
value: int
left: node
right: node
bit: int
```

The field `bit` holds the bit where the difference occurs between this node and the node's parent.

Here's a practical example. Suppose we have the following terms:

```
['PETER', 'PIPER', 'PICKED', 'A', 'PECK', 'OF', 'PICKLED', 'PEPPERS']
```

Converting the terms to binary (ascii, 8 bit character representation) we have the following:

```
PETER   01010000 01000101 01010100 01000101 01010010 00001010
PIPER   01010000 01001001 01010000 01000101 01010010
PICKED  01010000 01001001 01000011 01001011 01000101 01000100
A       01000001
PECK    01010000 01000101 01000011 01001011
OF      01001111 01000110
PICKLED 01010000 01001001 01000011 01001011 01001100 01000101 01000100
PEPPERS 01010000 01000101 01010000 01010000 01000101 01010010 01010011
```

We have effectively changed the alphabet from a 26 letter (A-Z) alphabet used by a standard trie to two symbols (0,1). Get ready for some quality ascii art.

Building this tree goes as follows:

1. Start with an empty root node.
2. Insert `PETER`. This is the first node and will go to the left of the empty root.

```
     [root]
       /
   PETER 
```

3. Insert `PIPER`. This term differs from `PETER` at bit index (0-based) 12. It will go to the left of `PETER`.

```
      [root]
        /
    PETER
     /
 PIPER  
```

4. Insert `PICKED`. This term differs from `PIPER` at bit index 19. It will go to the right of `PIPER` (left of `PIPER` is `PETER`).

```
      [root]
        /
    PETER
     /
 PIPER
    \
     PICKED
```

5. Insert `A`. This term differs from `PETER` at bit index 3. Time to change things up a bit. `A` goes to the left of `PETER` and `PIPER` moves to the right (previously null).


```
      [root]
        /
    PETER
     /  \
    A    PIPER
              \
               PICKED
```

6. Insert `PECK`. This will go to the left of `PIPER`.

```
      [root]
        /
      PETER
     /    \
    A      PIPER
               /\
           PECK PICKED
```

7. Insert `OF`. The tree changes a bit again.

```
      [root]
        /
      PETER
     /
    A
   /\
 OF  PIPER
      / \
   PECK PICKED
```

8. Insert `PICKLED`.

```
      [root]
        /
      PETER
     /
    A
   /\
 OF  PIPER
      / \
   PECK PICKED
        /
  PICKLED
```

9. Insert `PEPPERS`.

```
      [root]
        /
      PETER
     /
    A
   /\
 OF  PIPER
      /   \
   PECK   PICKED
     \        /
  PEPPERS   PICKLED
```

This was a bit long, hopefully someone can find it useful. 

A practical example of this kind of thing is for fast lookups of words with a common prefix. See also [this javascript snippet](https://gist.github.com/wrburnham/953f8588f9bc3555f01f0f4762e4181c).
