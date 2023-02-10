export interface Boxes {
  edges: Box[],
  pageInfo: PageInfo
}

export interface PageInfo {
  endCursor: string,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  startCursor: string
}

export interface Box {
  node: BoxNode
}

export interface BoxNode {
  id: string,
  name: string,
  iconUrl: string,
  cost: number
}
