#!/usr/bin/node
// a script that prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    let count = 0;
    const films = JSON.parse(body).results;
    for (const result of films) {
      for (const character of result.characters) {
        if (character.includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
