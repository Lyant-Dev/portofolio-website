# Lyant Dev — Portfolio

My personal portfolio website, built from scratch to show potential clients what I build and who I build it for.

🔗 **Live:** [lyant-dev-portfolio.netlify.app](https://lyant-dev-portfolio.netlify.app/)

## About

I'm a self-taught programmer focused on building websites for small to medium-sized businesses, mostly in food and beverage. I also build easy-to-use apps that help business owners solve everyday problems, such as WhatsApp order systems and profit trackers.

I'm still learning (currently deepening my backend skills), but everything in this repository is real, working, and built by me.

## Features

- **Working contact form:** sends messages straight to my inbox via EmailJS, with sending, success, and error states. The send button is disabled while a message is being sent.
- **Responsive layout:** adapts at three breakpoints (880px, 768px, 480px), with a slide-in hamburger menu on small screens.
- **Project showcase:** each card reveals a hover overlay and links to the live demo.
- **"My Journey" timeline:** alternates left and right on desktop, collapses to a single column on mobile.
- **Scroll animations and smooth scrolling** between sections (AOS).
- **Optimized images:** resized to the dimensions they are actually displayed at, then compressed.

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties)
- Vanilla JavaScript
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [EmailJS](https://www.emailjs.com/) for the contact form
- [Remix Icon](https://remixicon.com/) and Google Fonts (Inter, Rubik)
- Hosted on Netlify

## What I Learned

- **Horizontal animations can break the layout.** AOS `fade-left` and `fade-right` start elements outside the viewport, which created horizontal overflow and shifted the whole page. Switching to vertical animations fixed it.
- **The viewport meta tag is not optional.** Without it, phones render a desktop-width layout and media queries never fire. I only caught it by testing the live site on a real phone.
- **Compression is not the same as resizing.** My photos were small in kilobytes but still thousands of pixels wide. Resizing them to the size they are displayed at raised my local Lighthouse performance score from 74 to 96.
- **Handling async code properly.** The contact form uses a promise with `.then()`, `.catch()`, and `.finally()` so the button always becomes usable again, even when sending fails.

## Run Locally

This is a static site, so there is nothing to install.

```bash
git clone https://github.com/Lyant-Dev/portofolio-website.git
cd portofolio-website
```

Then open `index.html` in your browser, or use the Live Server extension in VS Code.

> The contact form uses my own EmailJS account. If you fork this project, replace the public key, service ID, and template ID in `assets/app/app.js` with your own.

## Contact

- X: [@lyant__r](https://x.com/lyant__r)
- GitHub: [Lyant-Dev](https://github.com/Lyant-Dev)
- Instagram: [himlyant](https://www.instagram.com/himlyant)

