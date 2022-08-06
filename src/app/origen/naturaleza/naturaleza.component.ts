import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-naturaleza',
  templateUrl: './naturaleza.component.html',
  styleUrls: ['./naturaleza.component.css']
})
export class NaturalezaComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content,{ centered: true });
  }

  ngOnInit(): void {
  }
}
