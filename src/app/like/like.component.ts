import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{
  private likesCount : number;
  private isSelected : boolean;

  constructor () {}
  ngOnInit(): void {
    this.likesCount = 0;
    this.isSelected = false;
  }

  get likesCountGet(): number {
    return this.likesCount;
  }
  get isSelectedGet(): boolean {
    return this.isSelected;
  }

  onClick() {
    // if (this.isSelected) {
    //   this.likesCount--;
    // } else {
    //   this.likesCount++;}

  }
  onToggle(){
    this.likesCount += (this.isSelected) ? -1 : 1;
    this.isSelected =! (this.isSelected);
    console.log(`likesCount: ${this.likesCountGet}, isSelected: ${this.isSelectedGet}`);
  }

}
