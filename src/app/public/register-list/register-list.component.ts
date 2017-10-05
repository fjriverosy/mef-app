import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule, FormControl, FormGroup, ReactiveFormsModule, NgModel } from '@angular/forms';
import { RegisterListService } from './services/register-list.service';
import { Register } from './models/register.model';


@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
  providers: [RegisterListService]
})
export class RegisterListComponent implements OnInit {
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'dni';
  public sortOrder = 'asc';
  register = new Register();
  isLoading = false;
  registers: Array<Register>; // se crea un arreglo de registros (importado desde modelo y desde servicio de registros)
  constructor(private _registerListService: RegisterListService) { }

  ngOnInit() {
    // this.onGetAll();
   // this.onCleanTable();
  }
  onCleanTable() {
    this._registerListService.getAll().subscribe( // se invoca el
      (data: Register[]) => {
        // next
        this.registers = [];
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
      }
    );

  }
  // Metodo que recibe todos los registros invocando el metodo getAll() del register Service.
  onGetAll() {
    this._registerListService.getAll().subscribe( // se invoca el
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
      }
    );
  }

  onGetAllRegisters() {
    this._registerListService.getAll().subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
      }
    );
  }
  onGetRegistersByDNI(dni) {
    console.log(dni);
    this.register = ({'dni': dni});
    this._registerListService.getByDni(this.register).subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
        this.register = new Register();
      }
    );
  }
  onGetXLSByDNI(dni) {
    console.log(dni);
    this.register = ({'dni': dni});
    this._registerListService.getXlsByDni(this.register).subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
        this.register = new Register();
      }
    );
  }

  onGetRegistersByExactName(nombre) {
    console.log(nombre);
    this.register = ({'nombre': nombre});
    this._registerListService.getByExactName(this.register).subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
        this.register = new Register();
      }
    );
  }
  onGetXLSByExactName(nombre) {
    console.log(nombre);
    this.register = ({'nombre': nombre});
    this._registerListService.getXlsByName(this.register).subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
        this.register = new Register();
      }
    );
  }

  onGetRegistersByCoincidenceName(nombre) {
    console.log(nombre);
    this.register = ({'nombre': nombre});
    this._registerListService.getByName(this.register).subscribe(
      (data: Register[]) => {
        // next
        this.registers = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = true;
      },
      () => {
        console.log('Finalizado!');
        this.register = new Register();
      }
    );
  }
}
