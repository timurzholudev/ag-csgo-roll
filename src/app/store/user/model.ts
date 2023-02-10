export interface User {
  id: string;
  name: string;
  avatar: string
  wallets: Wallet[]
}

export interface Wallet {
  id: string,
  name: string
  amount: number,
  currency: string
}
