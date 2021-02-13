const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CONSOLE.LOG ALIAS
let log = console.log;

// ADDING NAV TEXT CONTENT
let navLinks = document.querySelectorAll('nav > a');
function navLinkText(linkItem, linkNum) {
  switch (linkNum) {
    case 0:
      linkItem.textContent = 'Services';
      break;
    case 1:
      linkItem.textContent = 'Product';
      break;
    case 2:
      linkItem.textContent = 'Vision';
      break;
    case 3:
      linkItem.textContent = 'Features';
      break;
    case 4:
      linkItem.textContent = 'About';
      break;
    case 5:
      linkItem.textContent = 'Contact';
      break;
    default:
      console.log('error, defaulting');
      break;
  }
}

navLinks.forEach((e, i) => {
  navLinkText(e, i);
});

// SET H1 TEXT CONTENT
let hOne = document.getElementsByTagName('h1').item(0);
hOne.innerHTML = 'DOM<br> Is<br> Awesome';

// ADD BUTTON TEXT BELOW H1
let startButton = document.querySelector('.cta-text > button');
startButton.textContent = 'Get Started';

// UPDATE CTA IMG SRC
let ctaImg = document.getElementById('cta-img');
ctaImg.src = 'img/header-img.png';

// ADDING H4 TEXT CONTENT
let hFour = document.querySelectorAll('h4');
function hFourText(tag, pos) {
  switch (pos) {
    case 0:
      tag.textContent = 'Features';
      break;
    case 1:
      tag.textContent = 'About';
      break;
    case 2:
      tag.textContent = 'Services';
      break;
    case 3:
      tag.textContent = 'Product';
      break;
    case 4:
      tag.textContent = 'Vision';
      break;
    case 5:
      tag.textContent = 'Contact';
      break;
    default:
      log('error, defaulting');
      break;
  }
}

hFour.forEach((e, i) => {
  hFourText(e, i);
});

// SETTING TEXT-CONTENT <P> TEXT CONTENT
let textContP = document.querySelectorAll('div.text-content > p');
function contPText(tag, pos) {
  switch (pos) {
    case 0:
      tag.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
      break;
    case 1:
      tag.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
      break;
    case 2:
      tag.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
      break;
    case 3:
      tag.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
      break;
    case 4:
      tag.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
      break;
    default:
      log('error, defaulting');
      break;
  }
}

textContP.forEach((e, i) => contPText(e, i));

// ADDING CENTER IMG
let centerImg = document.querySelector('#middle-img');
centerImg.src = 'img/mid-page-accent.jpg';

// ADDING CONTACT INFO
let contactP = document.querySelectorAll('.contact > p');
function contactPtext(tag, pos) {
  switch (pos) {
    case 0:
      tag.innerHTML = '123 Way 456 Street<br>Somewhere, USA';
      break;
    case 1:
      tag.textContent = '1 (888) 888-8888';
      break;
    case 2:
      tag.textContent = 'sales@greatidea.io';
      break;
    default:
      log('error, defaulting');
  }
}

contactP.forEach((e, i) => contactPtext(e, i));

// ADDING FOOTER TEXT
let footerP = document.querySelector('footer > p');
footerP.textContent = 'Copyright Great Idea! 2018';