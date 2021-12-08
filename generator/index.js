'use strict';

require('dotenv').config()
const axios = require('axios')
const fs = require('fs');

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

const Volumes = {
  "generating-ideas": ["The Personal MBA", "How to be a Capitalist without any Capital by Nathan Latka", "The $100 Startup", "The Consulting Bible by Alan Weiss", "How I built this by Guy Raz", "Will it fly?", "Zero to One", "The Innovator's DNA", "Made to Stick: Why Some Ideas Survive and Others Die"],
  "getting-first-100-customers": ["The Minimalist Entrepreneur by Sahil Lavingia",
    "Lean B2B: Build Products Businesses Want",
    "The Mom Test",
    "Crossing the Chasm, 3rd Edition: Marketing and Selling Disruptive Products to Mainstream Customers",
    "The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company",
    "The Lean Startup by Eric Ries",
    "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
    "Refactoring UI",
    "Lean UX: Designing Great Products with Agile Teams",
    "The design of everyday things"],

  "scaling": [
    "The Sales Bible",
    "Hooked: How to Build Habit-Forming Products",
    "Traction",
    "Subscribed by Tien Tzuo",
    "Hacking Growth: How Today's Fastest-Growing Companies Drive Breakout Success",
    "Endless Referrals by Bob Burg",
    "Launch",
    "The Automatic Customer",
    "Good to Great: Why Some Companies Make the Leap...And Others Don't",
    "Predictable Revenue: Turn Your Business Into a Sales Machine with the $100 Million Best Practices of Salesforce.com"],

  "marketing": [
    "Invisible Influence: The Hidden Forces that Shape Behavior",
    "Building a StoryBrand: Clarify Your Message So Customers Will Listen",
    "Contagious: Why Things Catch On",
    "Guerilla Marketing: Easy and Inexpensive Strategies for Making Big Profits from Your Small Business",
    "How To Get To The Top Of Google in 2021: The Plain English Guide to SEO",
    "Purple Cow: Transform Your Business by Being Remarkable by Seth Godin",
    "The Challenger Sale: Taking Control of the Customer Conversation",
    "Hacking Growth",
    "Everybody Writes",
    "The Copywriter's Handbook: A Step-by-Step Guide to Writing Copy That Sells"
  ],

  "raising-money": [
    "Venture Deals by Brad Feld and Jason Mendelson",
    "Secrets of Sand Hill Road: Venture Capital and How to Get It",
    "Pitch Anything: An Innovative Method for Presenting, Persuading, and Winning the Deal (Business Skills and Development)",
    "Art of Public Speaking by Dale Carnegie",
    "Profit First",
    "Zero To Sold",
    "Never Split The Difference",
    "Crack the Funding Code",
    "Six Figure Crowdfunding: The No Bullsh*t Guide to Running a Life-Changing Campaign",
    "What Every Angel Investor Wants You to Know: An Insider Reveals How to Get Smart Funding for Your Billion Dollar Idea"
  ],

  "becoming-a-leader": [
    "The Hard Thing about Hard Things by Ben Horowitz",
    "The Black Swan by Nassim Nicholas Taleb",
    "Start with why",
    "Can't hurt me: Master your mind and defy the odds",
    "The Startup Way by Eric Ries",
    "Radical Candor by Kim Scott",
    "Rework",
    "How to Win Friends & Influence People",
    "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
    "The 48 Laws of Power"
  ]
  ,
  "productivity": [
    "Principles by Ray Dalio",
    "Atomic Habits by James Clear",
    "Almanack of Naval Ravikant",
    "Creative Confidence",
    "Nudge by Richard Thale",
    "The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich",
    "Getting Things Done: The Art of Stress-Free Productivity",
    "The 80/20 Principle: The Secret to Achieving More with Less",
    "The Art Of Creative Thinking",
    "Thinking, Fast And Slow"
  ]
}

const books = {}
const saveBooks = async () => {
  for (const key in Volumes) {
    let booksInCategory = []
    for (const bookTitle of Volumes[key]) {
      const volume = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=1`)

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

  fs.writeFileSync('./generator/data.json', JSON.stringify(books));
}

saveBooks()
