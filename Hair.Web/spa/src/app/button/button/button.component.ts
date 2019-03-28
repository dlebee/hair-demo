import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() color: string = 'default';
  @Input() size: string = 'sm';

  @Output() click = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    return `btn btn-${this.size} btn-${this.color}`;
  }

  onClicked($event) {
    this.click.emit($event);
  }
}
