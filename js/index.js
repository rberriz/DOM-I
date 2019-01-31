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

// Nav Bar
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.getElementsByTagName('a')
navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[5].textContent = siteContent['nav']['nav-item-6']


// navItems.textContent = siteContent(['nav']['nav-item-1'])
// navItems.classList.add('nav-item')
// navItems.textContent = 'test';

// HEADER
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src'])

let ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//BODY

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let contentHeaders = document.querySelectorAll('.text-content h4')
contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

let contentBody = document.querySelectorAll('.text-content p');
contentBody[0].textContent = siteContent['main-content']['features-content'];
contentBody[1].textContent = siteContent['main-content']['about-content'];
contentBody[2].textContent = siteContent['main-content']['services-content'];
contentBody[3].textContent = siteContent['main-content']['product-content'];
contentBody[4].textContent = siteContent['main-content']['vision-content'];

// CONTACT

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

// FOOTER
let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright'];



