import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EthereumService} from '../services/ethereum.service';
import {Eth} from '../models/eth.model';
import {NgForm} from '@angular/forms';
import {Balance} from '../models/balance.model';
import {RawTx} from "../models/rawTx";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  eth: Eth;
  address: String;
  message: String;
  balance: Balance;
  rawTx: RawTx;
  constructor(private router: Router, private service: EthereumService) { }

  ngOnInit() {
  }
  createEth() {
    this.service.createEth().subscribe(res => {
        this.eth = res.json();
      },
      err => console.log('Error creating Ether account'));
  }
  checkBalance(form: NgForm) {
    this.address = form.value.ethAddress;
    this.service.checkBalance(this.address).subscribe(res => {
        this.balance = res.json();
      },
      err => console.log('Error getting balance for ' + this.address));
  }
  sendTx(form: NgForm) {
    this.rawTx = form.value;
    console.log(this.rawTx);
    this.service.sendTx(this.rawTx).subscribe(res => {
        this.message = 'Transaction succes';
        },
        err => this.message = 'Something went wrong :(' );
  }
}
