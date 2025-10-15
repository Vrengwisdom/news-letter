# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: https://github.com/Vrengwisdom/news-letter
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Desktop-first workflow


### What I learned

i  learned how to use the picture and source element to add multiple images for different scree sizes.

```html
<picture>
        <source media="(min-width: 884px)" srcset="./assets/images/illustration-sign-up-desktop.svg">
        <source media="(min-width: 768px)" srcset="./assets/images/illustration-sign-up-tablet.svg">
        <img src="./assets/images/illustration-sign-up-mobile.svg" alt="">
      </picture>
```

i learned how to  use javascript make the modal box open when the submit button is clicked and make it close when the dismiss button is clicked 

``` js
// show modal
function showModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

// close modal
const hide = document.getElementById("dismiss-btn");
hide.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
});
```

also learned how to validate form

``` js
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};
```

### Continued development

I.ll continue fucusing on mastering form valition
and also focus on mastering form styling

### Useful resources

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

## Author


- Frontend Mentor - [@vreng wisdom](https://www.frontendmentor.io/profile/vrengwisdom)
- Twitter - [@VRENGWizdom](https://www.twitter.com/VRENGWizdom)

