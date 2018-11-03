import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getData();
    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    this.userService.addUser(userForm.value);
    this.resetForm(userForm);
    this.toastr.success('Submited Succesfully', 'User Registered');
  }

  resetForm(userForm?: NgForm){
    if(userForm){
      userForm.reset();
      this.userService.selectedUser = {
        $key: null,
        name: '',
        mail: ''
      };
    }

  }
}
