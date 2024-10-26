function fetchJSON() {
    fetch('js/sample.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('bounty-cards');

    data.wanted_list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'bounty-card';

      const img = document.createElement('img');
      img.className = 'bounty-image';
      img.src = item.image_url;
      img.alt = item.name;

      const name = document.createElement('h2');
      name.className = 'bounty-name';
      name.textContent = item.name;

      const reward = document.createElement('p');
      reward.className = 'bounty-reward';
      reward.textContent = `Награда: ${item.reward} ${item.currency}`;

      const issued_by = document.createElement('p');
      issued_by.className = 'bounty-issued-by';
      issued_by.textContent = `Issued by: ${item.issued_by} `;


      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(reward);
      card.appendChild(issued_by);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
};

document.addEventListener('DOMContentLoaded', fetchJSON);
