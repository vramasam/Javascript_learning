import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

// Arrow function
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
})

// Normal function
describe('Our first test', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  })
})

// Using JSDOM test case
describe('index.html', () =>{
  // done here to avoid asynchronous call
  it('should say h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // define JSDOM
    // You can optionally provide an array of Javascript files
    // to load into the JSDOM environment as the second paramater.
    // But note that any of the file utilizes fetch, you need to use isomorphic-fetch
    // instead, because fetch is a browser feature,so it wont be available by default
    // in the Node environment. ommitting here the second parameter for any JS
    jsdom.env(index, function(err, window){
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Users");
        // done here to avoid asynchronous call
        done();
        window.close();
    });
  })
})
