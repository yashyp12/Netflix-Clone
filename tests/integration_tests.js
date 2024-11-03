const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

// Create a JSDOM instance
const dom = new JSDOM(html);
const { document } = dom.window;

// Sample integration tests for the project

describe('Sample Integration Tests', function() {
  it('should have a title "Netflix-Clone"', function() {
    const title = document.querySelector('title').textContent;
    assert.strictEqual(title, 'Netflix-Clone');
  });

  it('should have a navigation bar with a logo', function() {
    const logo = document.querySelector('nav img');
    assert.ok(logo);
  });

  it('should have a hero section with a call-to-action', function() {
    const hero = document.querySelector('.hero');
    assert.ok(hero);
  });

  it('should have a footer with links and contact information', function() {
    const footer = document.querySelector('footer');
    assert.ok(footer);
  });

  // Add more integration tests as needed
});
