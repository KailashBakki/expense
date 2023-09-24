import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Txn, TxnRequest, User } from '../interface/user';
const httpOptions= {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private url: string = "http://localhost:8080/split/";
  constructor(private http :HttpClient) { }

  getTransactions_user(id:any): Observable<Txn[]>{
    let current: string = this.url+"users/getTransacts/"+id;//"http://localhost:8080/split/users/getTransacts/21";
    console.log(current);
    return this.http.get<Txn[]>(current);
  }

  // getCredit_user(id:any): Txn{
    // let a:Txn[] = localStorage this.getTransactions_user(id);
    // if()
    // localStorage.get(ApiServicesService.prototype)
    // return null;
    // return Txn
  // }

  getUserId(mail: string): Observable<User>{//getting userid by email
    let current: string = this.url+"users/getUserId/"+mail;
    return this.http.get<User>(current);
  }

  createUser(user: User): Observable<User>{//create user by userRequest
    let current: string = this.url+"users/create";
    return this.http.post<User>(current,user,httpOptions);
  }

  createTxn(txn: TxnRequest): Observable<Txn>{//create txn by txnRequest
    let current: string = this.url+"transacts/make";
    return this.http.post<Txn>(current,txn,httpOptions);
  }

  // updateTxn(id: number): Observable<Txn>{
  //   let current:string= this.url + "/transacts/update"+id ;
  //   return this.http.put<Txn>(current,,httpOptions);
  // }
  updateTxn(id: number, transactRequest: TxnRequest): Observable<Txn> {
    const endpoint = `${this.url}transacts/update/${id}`;

    return this.http.put<Txn>(endpoint, transactRequest, httpOptions);
  }

  getTxnByID(id:number):Observable<Txn>{
    let current:string=  this.url+`transacts/get/`+ id;//getting transaction details of a particular ID
    return this.http.get<Txn>(current);
  }

  
}
