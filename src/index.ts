import test from "ava"
import * as rsmt from "rsmt-ts"

interface Params {
  terminals: [number, number][]
}

export const findRectilinearRoute = async ({
  terminals,
}: Params): Promise<
  Array<{ from: [number, number]; to: [number, number] }>
> => {
  const solution = await rsmt.rsmt(terminals)
  const pointsWithSteiners = solution.terminals.concat(solution.steiners)
  const edgesWithSteiners = rsmt.getEdges(pointsWithSteiners)
  const mst = rsmt.mst(edgesWithSteiners)
  const solutionEdges = mst.map(({ p1, p2, len }) => ({
    from: pointsWithSteiners[p1],
    to: pointsWithSteiners[p2],
  }))
  return solutionEdges
}

export default findRectilinearRoute
