# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Javascript
- Flexbox

### What I learned

DOM APIs such as Element.classList. Here's its definition from MDN Web Docs:

The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

toggle method was used to toggle between active class and non active class for elements that represent questions.

### Continued development

I tried to use a background-image overflow trick to make the box illustration to overflow the card container but using that trick caused the questions to be non responsive to clicking. I am going to try with css position properties and use html img tags instead of using css background-image property.

### Useful resources

- [How to Overflow a Background Image Using CSS3](https://www.exratione.com/2011/09/how-to-overflow-a-background-image-using-css3/) - This explains how to fake background-image to overflow
- [How TO - Collapsibles/Accordion](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion) - I copied this code to create the accordian faq section

## Author

- Frontend Mentor - [@lahn0528](https://www.frontendmentor.io/profile/lahn0528)
