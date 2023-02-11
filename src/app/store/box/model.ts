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

export interface OpenBoxInput {
  boxId: string,
  amount: number,
  multiplierBoxBet?: number
}

export interface OpenBox {
  boxOpenings: BoxOpening[];
}

export interface BoxOpening {
  id: string;
  itemVariant: ItemVariant;
}

export interface ItemVariant {
  id: string;
  name: string;
  iconUrl: string;
  value: number;
}
