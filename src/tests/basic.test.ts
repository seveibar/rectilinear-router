import test from "ava"
import findRectilinearRoute from ".."

test("basic test", async (t) => {
  const points: [number, number][] = [
    { x: 0, y: 400 },
    { x: 0, y: 200 },
    { x: 300, y: 0 },
    { x: 800, y: 800 },
    { x: 600, y: 1000 },
    { x: 500, y: 500 },
    { x: 200, y: 700 },
    { x: 700, y: 300 },
  ].map(({ x, y }) => [x, y])

  const solutionEdges = await findRectilinearRoute({ terminals: points })

  t.deepEqual(solutionEdges, [
    { from: [300, 200], to: [300, 300] },
    { from: [500, 700], to: [500, 800] },
    { from: [600, 800], to: [500, 800] },
    { from: [0, 400], to: [0, 200] },
    { from: [300, 0], to: [300, 200] },
    { from: [800, 800], to: [600, 800] },
    { from: [600, 1000], to: [600, 800] },
    { from: [500, 500], to: [500, 300] },
    { from: [500, 500], to: [500, 700] },
    { from: [700, 300], to: [500, 300] },
    { from: [500, 300], to: [300, 300] },
    { from: [0, 200], to: [300, 200] },
    { from: [200, 700], to: [500, 700] },
  ])
})
