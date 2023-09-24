import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EMPTY, catchError, switchMap } from 'rxjs';
import { TxnRequest, User } from 'src/app/interface/user';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {//implements OnInit {
  public user1 : User={"userId":22,"username":"emmma_watson","email":"emma.wat@eg.com"};
  public user2 : User={"userId":23,"username":"emmma_watsonq","email":"emma.theree@eg.com"};
  public txns:TxnRequest={"description":"movieTickets19999","amount":500.123,"isPaid":false,"fromUser":this.user1,
  "toUser":this.user2};//last_updated:new Date().toString()};

  public txnsR:TxnRequest={"description":"movieTickets19999","amount":500.123,"isPaid":true,"fromUser":this.user1,
  "toUser":this.user2}//,last_updated:new Date().toString()};
  public txReq: TxnRequest={
    "description": "pppppp",
    "amount": 777.123,
    "fromUser": {
        "userId": 22,
        "username": "emmma_watson",
        "email": "emma.wat@eg.com"
    },
    "toUser": {
        "userId": 23,
        "username": "emmma_watsonq",
        "email": "emma.theree@eg.com"
    },
     "isPaid": true
}


  hide : boolean = true;
  loginForm: FormGroup;
  email: string = '';
  constructor(private api:ApiServicesService,
    private router: Router, 
    private fb: FormBuilder){
      {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]]
        });
      }
    }
  ngOnInit(): void {
    this.api.getTransactions_user(20).subscribe((a)=>(console.log(a)));
    // this.api.getUserId("emma.smith@example.com").subscribe((a)=>(console.log(a)));
    // this.api.createUser({"username":"emmma_watson","email":"emma.wat@eg.com"})
    // this.api.createUser(this.user2)
    // .subscribe((x)=>(console.log(x)));
    console.log(this.txns);
    // this.api.createTxn(this.txns).subscribe((x)=>(console.log(x)));

    this.api.updateTxn(31,this.txReq).subscribe((x)=>(console.log(x)));
  }
  // updateTransaction(id: number, transactRequest: TxnRequest): void {
  //   this.yourService.updateTxn(id, transactRequest)
  //     .subscribe(x => {
  //       console.log('Transaction updated successfully:', x);
  //       // Handle the response as needed
  //     },
  //     error => {
  //       console.error('Error updating transaction:', error);
  //       // Handle errors
  //     });
  // }

  


  // constructor(private userService: UserService, private router: Router) { }

  onLogin(): void {
    if (this.loginForm.invalid) {
      alert('Please provide a valid email address.');
      return;
    }
    const email = this.loginForm.value.email;

    // Call the service to get the user by email
    this.api.getUserId(this.email).subscribe(
      (user) => {
        // Check if user exists
        if (user) {
          // User exists, navigate to the home page or perform login actions
          this.router.navigate(['/home']);
        } else {
          // User does not exist, show error message
          alert('Account not found. Please create an account.');
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }
}
