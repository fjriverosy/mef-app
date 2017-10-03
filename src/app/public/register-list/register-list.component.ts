import { Component, OnInit } from '@angular/core';
import { RegisterListService } from './services/register-list.service';
import { Register } from './models/register.model';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {
  isLoading = true;
  registers: Array<Register>;
  constructor(private _registerListService: RegisterListService) { }

  ngOnInit() {
    this._registerListService.getAll().subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
      }, err => {
        console.log('lol');
      },
      () => {
        console.log('Finalizado!');
      }
    );
  }

}
