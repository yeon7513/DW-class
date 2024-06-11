'use strict';

async function fetchAndPrint() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const result = await response.json();
  const parent = document.querySelector('#list-parent');

  result.forEach((el) => {
    parent.innerHTML += `
      <a
        href="#"
        class="list-group-item list-group-item-action d-flex gap-3 py-3"
        aria-current="true"
      >
        <div class="rounded-circle flex-shrink-0">${el.id}</div>
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div class="text-truncate">
            <h6 class="mb-0">${el.title}</h6>
            <p class="mb-0 opacity-75 text-truncate">
              ${el.body}
            </p>
          </div>
          <small class="opacity-50 text-nowrap">${el.userId}</small>
        </div>
      </a>
    `;
  });
}

fetchAndPrint();
