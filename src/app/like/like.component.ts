import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{
  private likesCount : number;
  private isSelected : boolean;

//Get user input from the $event object
  values = '';
// onKey(event: any) { // without type info
//  onKey(event: KeyboardEvent) { //with type info
//    this.values += event.target.value + ' | ';
//    this.values += event.key + ' | ';
//      this.values += (event.target as HTMLInputElement).value + ' | ';

//  }
  onKey(value: string) {
    this.values += value + ' | ';
  }
  value = '';
  onEnter(value: string) { this.value = value; }
//  !!!  Use template variables to refer to elements
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
