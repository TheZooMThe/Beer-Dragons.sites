
let charactersData = {};


async function loadAllCharacters() {

    const charactersResponse = await fetch('js/sample.json');
    charactersData = await charactersResponse.json();

    const container = document.getElementById('characters');


    for (const character of charactersData.character_list ) {
      const card = document.createElement('div');
      card.className = 'bounty-card';
      card.addEventListener('click', () => createCharacterWidget(character.id));

      const img = document.createElement('img');
      img.className = 'bounty-image';
      img.src = character.wanted_img;
      img.alt = character.name;

      const name = document.createElement('h2');
      name.className = 'bounty-name';
      name.textContent = character.name;

      const span = document.createElement('span');
      span.className = 'bounty-span';

      const race = document.createElement('p');
      race.className = 'bounty-race';
      race.textContent = `Раса: ${character.race}`;

      const bountyClass = document.createElement('p');
      bountyClass.className = 'bounty-class';
      bountyClass.textContent = `Класс: ${character.class} `;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(span);
      card.appendChild(race);
      card.appendChild(bountyClass);
      container.appendChild(card);
    }



};

document.addEventListener('DOMContentLoaded', loadAllCharacters);
