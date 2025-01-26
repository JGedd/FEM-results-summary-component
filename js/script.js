fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      const summaryItem = document.querySelectorAll('.summary-item')[index];

      summaryItem.querySelector(
        '.summary-icon'
      ).innerHTML = `<img src="${item.icon}" alt="${item.category} icon">`;

      summaryItem.querySelector('.summary-item-title').textContent =
        item.category;

      summaryItem.querySelector(
        '.summary-score'
      ).innerHTML = `<span>${item.score}</span> / 100`;
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
