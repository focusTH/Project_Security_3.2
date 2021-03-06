import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodecopyComponent } from './codecopy/codecopy.component';
import { RSADEComponent } from './rsa-de/rsa-de.component';
import { RSAENComponent } from './rsa-en/rsa-en.component'; 
import { MonoalphabeticCipherENComponent } from './monoalphabetic-cipher-en/monoalphabetic-cipher-en.component';
import { MonoalphabeticCipherDEComponent } from './monoalphabetic-cipher-de/monoalphabetic-cipher-de.component';
import { ShiftCipherDEComponent } from './shift-cipher-de/shift-cipher-de.component';
import { ShiftCipherENComponent } from './shift-cipher-en/shift-cipher-en.component';
import { VigenereCipherENComponent } from './vigenere-cipher-en/vigenere-cipher-en.component';
import { VigenereCipherDEComponent } from './vigenere-cipher-de/vigenere-cipher-de.component';
import { HomeComponent } from './home/home.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'codecopy', component: CodecopyComponent},

  { path: 'rsa-en', component: RSAENComponent},
  { path: 'rsa-de', component: RSADEComponent},

  { path: 'monoalphabetic-en', component: MonoalphabeticCipherENComponent},
  { path: 'monoalphabetic-de', component: MonoalphabeticCipherDEComponent},

  { path: 'shift-de', component: ShiftCipherDEComponent},
  { path: 'shift-en', component: ShiftCipherENComponent},

  { path: 'vigenere-en', component: VigenereCipherENComponent},
  { path: 'vigenere-de', component: VigenereCipherDEComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
