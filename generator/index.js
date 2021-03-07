'use strict';

const axios = require('axios')
const fs = require('fs');

const Volumes = {
  "generating-ideas": ["How to be a capitalist without any capital", "will it fly", "the art of creative thinking"], "doing-market-research": ["interviewing users", "the $100 startup", "build-better-products", "the mom test"],
  "getting-first-100-customers": ["show your work", "the only thing that matters", "the lean startup", "the mom test"],
  "raising-funding": ["the art of the pitch", "mastering the vc game", "zero to sold", "confessions of a public speaker"]
}

const books = {}
const saveBooks = async () => {
  for (const key in Volumes) {
    let booksInCategory = []
    for (const bookTitle of Volumes[key]) {
      const volume = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=AIzaSyBnRqncd8WcJsBDMBEoZ9_-jYLraA7A268&maxResults=1`)

      const { data } = volume

      if (data && data.items && data.items.length > 0) {
        const book = await axios.get(data.items[0].selfLink)
        booksInCategory.push(book.data)
      } else {
        console.info(`${bookTitle} not found`)
      }
    }
    books[key] = booksInCategory
  }

  fs.writeFileSync('data.json', JSON.stringify(books));
}

saveBooks()
