import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;

  get currentPlayer(): string {
    return this.xIsNext ? 'Player 1 (X)' : 'Player 2 (O)';
  }

  makeMove(index: number): void {
    if (!this.squares[index] && !this.winner) {
      this.squares[index] = this.currentPlayer;
      this.xIsNext = !this.xIsNext;
      this.calculateWinner();
    }
  }

  calculateWinner(): void {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

for (const line of lines) {
  const [a, b, c] = line;
  if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
    this.winner = this.squares[a];
    return;
  }
}

if (!this.squares.some(square => square === null)) {
  this.winner = 'Draw';
} else {
  this.winner = null; // Nenhum vencedor ainda
}
}

  restartGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }
}