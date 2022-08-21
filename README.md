# Rectilinear Router

Rectilinear router in typescript. This will help you find a rectilinear path
between two or more points.

A rectilinear path is a path composed of straight lines and 90 degree turns, it
is common to route this way for schematics or PCBs.

This uses [rtms-ts](https://github.com/seveibar/rtms-ts) under the hood for fast
computation of the minimal rectilinear steiner tree.

## Usage

```ts
import findRectilinearRoute from "rectilinear-router"

const route = await findRectilinearRoute({
  // terminals are points that the route must go through
  terminals: [
    [0, 400],
    [0, 200],
    [300, 0],
    [800, 800],
    [600, 1000],
    [500, 500],
    [200, 700],
    [700, 300],
  ],
})

// route
// [
//   { from: [300, 200], to: [300, 300] },
//   { from: [500, 700], to: [500, 800] },
//   { from: [600, 800], to: [500, 800] },
//   { from: [0, 400], to: [0, 200] },
//   { from: [300, 0], to: [300, 200] },
//   { from: [800, 800], to: [600, 800] },
//   { from: [600, 1000], to: [600, 800] },
//   { from: [500, 500], to: [500, 300] },
//   { from: [500, 500], to: [500, 700] },
//   { from: [700, 300], to: [500, 300] },
//   { from: [500, 300], to: [300, 300] },
//   { from: [0, 200], to: [300, 200] },
//   { from: [200, 700], to: [500, 700] },
// ]
```

![example route](https://user-images.githubusercontent.com/1910070/185801423-b057accb-4a87-428d-9b9f-a39badaea970.jpeg)
