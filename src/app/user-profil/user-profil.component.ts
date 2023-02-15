import { Component } from '@angular/core';
import { User } from '../model/User';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {

  user = new User('Doe', 'Charly', 24, "", 'https://randomuser.me/api/portraits/lego/2.jpg');

  isHidden: boolean = false;


  toggle(): void{
    this.isHidden = !this.isHidden
  }

}
