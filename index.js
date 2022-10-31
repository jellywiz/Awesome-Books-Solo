import {
  // eslint-disable-next-line max-len
  inputTitle, inputAuthor, btn, listLink, addLink, contactLink, booksSection, addBookSection, contactSection,
} from './modules/elements.js';
import { SettingBooks } from './modules/bookset.js';
import { Book } from './modules/book.js';
import { DateTime } from './modules/luxon.js';

document.getElementsByClassName('time')[0].innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

addLink.addEventListener('click', () => {
  booksSection.classList.add('active');
  addBookSection.classList.add('active');
  contactSection.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  booksSection.classList.add('active');
  contactSection.classList.add('active');
  addBookSection.classList.remove('active');
});

listLink.addEventListener('click', () => {
  booksSection.classList.remove('active');
  contactSection.classList.remove('active');
  addBookSection.classList.remove('active');
});

const call = new SettingBooks();
if (localStorage.getItem('bookItems')) {
  const localBooks = JSON.parse(localStorage.getItem('bookItems'));
  localBooks.bookColl.forEach((item) => {
    call.add(new Book(item.title, item.author));
  });
}

btn.addEventListener('click', () => {
  call.add(new Book(inputTitle.value, inputAuthor.value));
});