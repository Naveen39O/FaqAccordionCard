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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Refreshed my memory in selecting DOM elements using class name.
I got stuck here in applying the style to the respective element.
Reason for this is I forgot that getElementsByClassName returns all the elements with the mentioned className.
After debugging using console log I found the issue. Then I passed the index of the respective selected element to style it.
```js
    const selectedAnswer = document.getElementsByClassName("answer")[idx];
    const selectedQuery = document.getElementsByClassName("query")[idx];
    const selectedArrow = document.getElementsByClassName("arrow-icon")[idx];
```
Dynamically added and removed classes to the elements that were selected using arrow icon.
With this I was able to hide/show the answer to the Faq that user wanted to know.
Rotate the arrow icon when clicked.
```js
    if(isHidden){
      selectedAnswer.classList.remove("hide");
      selectedQuery.classList.add("query-highlight");
      selectedArrow.classList.add("arrow-icon-invert");
      setIsHidden(false);
    } else{
      selectedAnswer.classList.add("hide");
      selectedQuery.classList.remove("query-highlight");
      selectedArrow.classList.remove("arrow-icon-invert");
      setIsHidden(true);
    }
```

Rotate the arrow icon when clicked.
```css
.arrow-icon-invert{
  transform: rotate(180deg);
}
```

Set the initial width of the Faq query using flex-basis property.
```css
.query{
  font-size: 13px;
  flex-basis: 265px;
}
```

First time I used linear gradient to generate the background in the challenge.
```css
  background-image: linear-gradient($soft-violet, $soft-blue);
```

Learnt to import svg images
```js
import illustrationMobile from "../images/illustration-woman-online-mobile.svg";
```

I have used react-device-detect package to findout if the screen used is either Mobile or not, so that I can render respective illustration image according to the screen size.
```js
import {isMobile} from 'react-device-detect';
{isMobile?
  <img className="illus-mobile" src={illustrationMobile} alt=""/>
  : <img className="illus-desktop" src={IllustrationDesktop} alt=""/>
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
