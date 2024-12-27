function createCharacterWidget(characterId) {
    const character = charactersData.character_list.find(c => c.id === characterId);

    if (character) {
        const body = document.getElementById('body-container');

        document.getElementById('body-container').classList.add('no-scroll');

        if (document.getElementById('character-widget')) {
            document.getElementById('character-widget').remove();
        }

        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'character-widget';

        widgetContainer.innerHTML = `
            <div id="widget-content">
                <div id="widget-picture-and-info">
                    <img src="${character.wanted_img}" alt="character image" id="character-img">
                    <div id="img-info-subdiv">
                        <h2 id="widget-h2">${character.name}</h2>
                        <p class="widget-text"><b>Имя игрока:</b> ${character.creator}</p>
                        <p class="widget-text"><b>Раса:</b> ${character.race}</p>
                        <p class="widget-text"><b>Класс:</b> ${character.class}</p>
                        <p class="widget-text"><b>Возраст:</b> ${character.age}</p>
                        <p class="widget-text"><b>Рост:</b> ${character.height}</p>
                        <p class="widget-text"><b>Вес (без брони):</b> ${character.weight}</p>
                        <p class="widget-text"><b>Внешность:</b> ${character.appearance}</p>
                        <p class="widget-text"><b>Особые приметы:</b> ${character.special_signs}</p>
                        <p class="widget-text"><b>Черты характера:</b> ${character.personality_trait}</p>
                        <p class="widget-text"><b>Идеал:</b> ${character.ideal}</p>
                        <p class="widget-text"><b>Привязанность:</b> ${character.bond}</p>
                        <p class="widget-text"><b>Слабость:</b> ${character.flaw}</p>
                    </div>
                    <img src="./assets/pngfind.com-x-png-1320307.png" alt="close button" id="widget-close-btn">
                </div>
                <p id="widget-backstory" class="widget-text">
                    <b>Предыстория:</b> <br><br> ${character.backstory}
                </p>
            </div>
        `;
        body.appendChild(widgetContainer);

        const closeButton = document.getElementById('widget-close-btn');
        closeButton.addEventListener('click', () => {
            widgetContainer.remove();
            document.getElementById('body-container').classList.remove('no-scroll');
            document.getElementById('body-container').classList.remove('no-pointer-events');
        });
    }
}