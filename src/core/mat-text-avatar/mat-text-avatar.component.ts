import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mat-text-avatar',
  templateUrl: './mat-text-avatar.component.html',
  styleUrls: ['./mat-text-avatar.component.scss'],
})
export class MatTextAvatar implements OnInit {
  constructor() {}

  @Input()
  public name: string;
  @Input()
  public avatar: string;

  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
    '#FFB900',
    '#D83B01',
    '#B50E0E',
    '#E81123',
    '#B4009E',
    '#5C2D91',
    '#0078D7',
    '#00B4FF',
    '#008272',
    '#107C10',
  ];

  ngOnInit() {
    const arr = this.name.split(' ');
    if (arr.length >= 1) {
      this.initials = arr[0].charAt(0);
    }

    if (arr.length >= 2) {
      this.initials += arr[1].charAt(0);
    }
    //const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    const randomIndex = (this.initials.charCodeAt(0) % this.colors.length);
    this.circleColor = this.colors[randomIndex];
  }
}
