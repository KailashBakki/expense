import { Timestamp } from "rxjs";

export interface User{
    username: string;
    email :string;
    userId? : number
}

export interface Txn{
    txnId : number;
    description : string;
    amount : number;
    isPaid: boolean;
    fromUser: User;
    toUser: User;
    last_updated?: string;
}
export interface TxnRequest{
    // txnId? : number;
    description : string;
    amount : number;
    isPaid: boolean;
    fromUser: User;
    toUser: User;
    // last_updated: string;
}