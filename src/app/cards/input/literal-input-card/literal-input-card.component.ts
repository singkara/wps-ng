import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComplexDataInput, LiteralDataDomains, LiteralDataInput} from 'wps-ng';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-literal-input-card',
  templateUrl: './literal-input-card.component.html',
  styleUrls: ['./literal-input-card.component.css']
})
export class LiteralInputCardComponent implements OnInit {
  @Input() title: string;
  @Input() input: string;
  @Input() literalDataDomains: LiteralDataDomains[];
  type = 'Literal Data';
  @Output() literalValue: number;
  @Output() messageEvent  = new EventEmitter<any>();
  private readonly literalInput: LiteralDataInput;



  constructor( private toastr: ToastrService) {
     this.literalInput = new LiteralDataInput('literalInput', null, null, '0.05');
     const literalInput1 = new LiteralDataInput('duration', null, null, '1010');

  }

  ngOnInit(): void {
  }

  sendResponse(){
    this.toastr.error('Some Message', 'title');
    this.messageEvent.emit(this.literalInput);
  }
}
