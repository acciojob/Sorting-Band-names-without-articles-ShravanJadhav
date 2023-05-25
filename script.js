//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names
  const cleanedBandNames = bandNames.map(name => {
    let words = name.toLowerCase().split(' ');
    if (articles.includes(words[0])) {
      words.shift();
    }
    return words.join(' ');
  });

  // Sort band names in lexicographic order
  cleanedBandNames.sort();

  // Display sorted band names in the ul tag with li items
  const ul = document.getElementById('band');
  cleanedBandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
}

sortBandNames(bandNames);

