const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Create a new row
  const newRow = document.createElement('section');
  newRow.classList.add('table-section');

  // Add values to the row
  newRow.innerHTML = `
    <div>${title.value}</div>
    <div>${author.value}</div>
    <div>${year.value}</div>
  `;

  // Append the new row to the book list
  bookList.appendChild(newRow);

  // Clear the input fields
  title.value = '';
  author.value = '';
  year.value = '';
});
