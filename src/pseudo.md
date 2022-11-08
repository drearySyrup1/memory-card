- START with 4 tiles

1 4
2 6
3 8
4 10
5 12

# Score tracker

- Keep score in main state

# High score tracker

- keep best score in main state
- if score > best score then best score = score

# Display (MODERN FAMILY) cards with random order

- use css order propery (most likely)

# Each time user clicks on card reorder them

- from array of available numbers for css order property randomly pick out and delete it from the array.

# If user click on same card second time game is lost

- Track tiles clicked (probably with some unique id)

# If all tiles were clicked go to next level

- Every level adds 2 more tiles
- Reset clicked tiles array
