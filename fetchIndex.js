let charactersData = {};
let chroniclesData = {};

const chroniclesSub1 = document.getElementById('chronicles-sub-1');
const chroniclesSub2 = document.getElementById('chronicles-sub-2');
const charactersSub1 = document.getElementById('characters-sub-1');
const charactersSub2 = document.getElementById('characters-sub-2');




function getTwoRandomNumbers(min, max) {
    if (max - min + 1 < 2) {
        throw new Error("Range is too small to pick two unique numbers.");
    }

    const first = Math.floor(Math.random() * (max - min + 1)) + min;

    let second;
    do {
        second = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (second === first);
    return [first, second];
}

async function loadAllData() {
    const chroniclesResponse = await fetch('js/let_history.json');
    chroniclesData = await chroniclesResponse.json();
    const charactersResponse = await fetch('js/sample.json');
    charactersData = await charactersResponse.json();

    const length = charactersData.character_list.length;
    const shorterLength = length - 1;

    const [first, second] = getTwoRandomNumbers(0, shorterLength);




    chroniclesSub1.textContent = `${chroniclesData.events[0].year} ${chroniclesData.events[0].day} ${chroniclesData.events[0].month} - ${chroniclesData.events[0].description}`;
    chroniclesSub2.textContent = `${chroniclesData.events[1].year} ${chroniclesData.events[1].day} ${chroniclesData.events[1].month} - ${chroniclesData.events[1].description}`;

    charactersSub1.textContent = `${charactersData.character_list[first].name} - ${charactersData.character_list[first].race}, ${charactersData.character_list[first].class}`;
    charactersSub2.textContent = `${charactersData.character_list[second].name} - ${charactersData.character_list[second].race}, ${charactersData.character_list[second].class}`;

    charactersSub1.addEventListener('click', () => createCharacterWidget(charactersData.character_list[first].id));
    charactersSub2.addEventListener('click', () => createCharacterWidget(charactersData.character_list[second].id));

};

document.addEventListener('DOMContentLoaded', loadAllData);