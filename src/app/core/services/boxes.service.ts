import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Boxes } from "../../store/box/model";

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

}
