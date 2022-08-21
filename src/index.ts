import test from "ava"
import * as rsmt from "rsmt-ts"

interface Params {
  terminals: [number, number][]
}

export const findRectilinearRoute = async ({
  terminals,
}: Params): Promise<
  Array<{
    from: [number, number]
    to: [number, number]
    fromTerminalIndex?: number
    toTerminalIndex?: number
  }>
> => {
  const coordsToIndex: any = {}
  for (let i = 0; i < terminals.length; i++) {
    coordsToIndex[terminals[i].toString()] = i
  }

  const solution = await rsmt.rsmt(terminals)
  const pointsWithSteiners = solution.terminals.concat(solution.steiners)
  const edgesWithSteiners = rsmt.getEdges(pointsWithSteiners)
  const mst = rsmt.mst(edgesWithSteiners)

  const solutionEdges = mst.map(({ p1, p2, len }) => {
    const edge: any = {
      from: pointsWithSteiners[p1],
      to: pointsWithSteiners[p2],
    }
    const fromTerminalIndex = coordsToIndex[pointsWithSteiners[p1].toString()]
    const toTerminalIndex = coordsToIndex[pointsWithSteiners[p2].toString()]
    if (fromTerminalIndex !== undefined)
      edge.fromTerminalIndex = fromTerminalIndex
    if (toTerminalIndex !== undefined) edge.toTerminalIndex = toTerminalIndex
    return edge
  })

  return solutionEdges
}

export default findRectilinearRoute
