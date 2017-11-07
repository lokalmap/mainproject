import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss']
})
export class MyInventoryComponent implements OnInit {
  public modalRef:BsModalRef;
  constructor(private modalService: BsModalService) { }
  public openModal(template: TemplateRef<any>) {
    console.log("++++++++++++");
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

}
