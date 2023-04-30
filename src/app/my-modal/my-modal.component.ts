import { Component, OnInit, NgZone } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


import {DadjokesService} from '../dadjokes.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  public dadJokesResponse: any;

  constructor(private dadJokes: DadjokesService, public activeModal: NgbActiveModal, private ngZone: NgZone) { }

  ngOnInit() {
    this.dadJokes.getRandomJokes().subscribe(
      (response) => {
        console.log(NgZone.isInAngularZone());
        this.dadJokesResponse = response;
        }
    )
  }
  

}