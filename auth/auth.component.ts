import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login.model';
import { PostService } from '../post.service';
import { User } from '../user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;


  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmitsignup() {
    const firstname = this.signupForm.value.firstname;
    const lastname = this.signupForm.value.lastname;
    const password = this.signupForm.value.password;
    const email = this.signupForm.value.email;
    const mobile = this.loginForm.value.mobile;

    //preparing object of user
    const user: User = new User(
      firstname,
      lastname,
      password,
      email,
      mobile
    );

    this.router.navigate(["/post-list"]);
    }

    
    onSubmitlogin() {
      const username = this.signupForm.value.username;
      const userpassword = this.signupForm.value.userpassword;

      //preparing object of user
      const login: Login = new Login(
        username,
        userpassword
      );

      this.router.navigate(["/post-list"]);

    }  


  
}

