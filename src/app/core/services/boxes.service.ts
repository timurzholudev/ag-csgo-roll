import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Boxes, OpenBoxInput } from "../../store/box/model";

@Injectable({
  providedIn: "root"
})
export class BoxesService {

  constructor(
    private apollo: Apollo
  ) {
  }

  getBoxes() {
    return this.apollo
    .query<Boxes>({
      query: gql`
        query {
          boxes(free: false, first: 50, purchasable: true, openable: true) {
            edges {
              node {
                id
                name
                iconUrl
                cost
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
      `
    })
  }

  openBoxes({ boxId, amount, multiplierBoxBet = 0.6 }: OpenBoxInput) {
    return this.apollo
    .mutate({
      mutation: gql`
        mutation OpenBox($input: OpenBoxInput!) {
          openBox(input: $input) {
            boxOpenings {
              id
              itemVariant {
                id
                name
                iconUrl
                value
              }
            }
          }
        }
      `,
      variables: {
       input: {
         boxId,
         amount,
         multiplierBoxBet
       }
      }
    })
  }

}
