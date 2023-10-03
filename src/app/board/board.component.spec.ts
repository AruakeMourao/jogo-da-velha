import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './BoardComponent';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
@Component({
 				selector: 'app-board',
templateUrl: './board.component.html',
styleUrls: ['./board.component.css']
})
export class BoardComponent {
squares: string[] = Array(9).fill(null);
xIsNext: boolean = true;
get currentPlayer(): string {
 	 	return this.xIsNext ? 'X' : 'O';
  			}
makeMove(index: number): void {
if (!this.squares[index]) {
this.squares[index] = this.currentPlayer;
this.xIsNext = !this.xIsNext;
}
  			}
}

