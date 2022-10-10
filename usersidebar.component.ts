import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({

  selector: 'app-usersidebar',

  templateUrl: './usersidebar.component.html',

  styleUrls: ['./usersidebar.component.css']

})

export class UsersidebarComponent implements OnInit {



  constructor(private rt:Router) { }



  ngOnInit(): void {

  }



  logout(){
  }
}