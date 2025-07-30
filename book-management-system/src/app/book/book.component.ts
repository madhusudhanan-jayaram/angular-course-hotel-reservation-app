import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../model/book.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  title: string = 'Book Management System';
  newBookTitle: string = '';
  newAuthor: string = '';
  books: Book[] = [];

  addBook() {
    const book: Book = {
      id: this.books.length + 1,
      title: this.newBookTitle,
      author: this.newAuthor
    };
    alert('Book added successfully!');
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.newBookTitle = '';
    this.newAuthor = '';
  }
  ngoOnInit() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
    alert('Book deleted successfully!');
  }
}
