import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { User } from "../../store/user/model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(
    private apollo: Apollo
  ) {
  }

  getUser() {
    return this.apollo
    .query<User>({
      query: gql`
        query {
          currentUser {
            id
            name
            avatar
            wallets {
              id
              name
              amount
              currency
            }
          }
        }
      `
    })
  }

  walletUpdate() {
    return this.apollo
    .subscribe({
      query: gql`
        subscription OnUpdateWallet {
          updateWallet {
            wallet {
              id
              amount
              name
            }
          }
        }
      `,
      variables: {
        repoName: `kamilkisiela/apollo-angular`
      }
    })
  }

}
