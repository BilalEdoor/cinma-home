// add componants at section 1
// Create the header element
const header = document.createElement('header');

// Create the logo element
const logo = document.createElement('a');
logo.href = '#';
logo.textContent = 'Cinma in home';
logo.classList.add('logo');
logo.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
header.appendChild(logo);

// Create the navigation menu
const nav = document.createElement('nav');
const navMenu = document.createElement('div');
navMenu.classList.add('nav_menu');
nav.classList.add('nav_menu');
navMenu.id = 'nav_menu';

// Create the navigation list
const navMenuList = document.createElement('ul');
navMenuList.classList.add('nav_menu_list');

// Create navigation items
const navItems = [
  { href: '#', text: 'Home' },
  { href: '#section1', text: 'About us' },
  { href: '#section2', text: 'Our movies' },
  { href: '#section3', text: 'Series' },
  { href: '#section4', text: 'Favorite' },
  { href: '#section5', text: 'Contant us' },
];

navItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('nav_menu_item');

  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
  a.classList.add('nav_menu_link');
  li.appendChild(a);

  navMenuList.appendChild(li);
});
const lgnbtn = document.createElement("div")
lgnbtn.classList.add("loginbtn")
navMenuList.appendChild(lgnbtn)
lgnbtn.innerHTML =` <li class="nav_menu_item"><button class="login-button">Login</button> </li> `
const l = document.querySelector(".login-button");
navMenu.appendChild(navMenuList);
nav.appendChild(navMenu);
header.appendChild(nav);


// Append the header to the body
document.body.appendChild(header);

const sec1 = document.querySelector("#section1")
const elem1 = document.createElement('h2');
const photo = document.createElement('div');
photo.setAttribute('class','home-img') ;
sec1.appendChild(photo);
photo.style.float ='right'
//insrt image home
photo.innerHTML = '<img class="home-img" src="">';
const container1 = document.querySelector(".container1")
elem1.textContent = 'About us';
container1.appendChild(elem1)
const para1 = document.createElement('p');
para1.textContent = 'Hello, I am the student Bilal Muhammad Mahmoud Edoor, I study in the Faculty of Information Technology and Computer Engineering, specializing at Palestine Polytechnic University. This site provides an introduction to myself, the skills I possess, and some of the projects I have worked on.';
elem1.style.cssText = " font-size: 40px; font-weight: bold;";
para1.style.cssText = "font-size: 18px;"


container1.appendChild(para1);


const sec2 = document.querySelector("#section2")
const elem2 = document.createElement('h2');
elem2.style.cssText = " font-size: 40px; font-weight: bold;";

const container2 = document.querySelector(".container2")
elem2.textContent = 'Our Movis';
container2.appendChild(elem2)

//create a cards
const C  = document.createElement('div');
C.setAttribute('class','cards')
sec2.appendChild(C);

//array contains my movies
const cardData = [
 
  {
    imageSrc: 'https://cimalek.art/wp-content/uploads/2024/11/hRuo0CXc5XINxVnMIA2r5fjzqVD.jpg',
    title: 'LET GO',
    description: '2024',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: 'https://i-egybest.com/wp-content/uploads/2024/11/g78K3d8sValhalla-371x520.jpg',
    title: 'Viking Valhalla',
    description: '2022',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: 'https://i-egybest.com/wp-content/uploads/2024/11/2NeC5N5AMV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_FMjpg_UX1000_-.jpg_UY1200--351x520.jpg',
    title: 'Loki',
    description: '2021',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
    title: 'udacity p1',
    description: 'HTML , CSS',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
     title: 'Lucky Baskhar',
    description: 'Cinma in home app',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
     title: 'Lucky Baskhar',
    description: 'Cinma in home app',
    buttonText: 'watch ',
    watchpage:''
  },
  {
    imageSrc: '',
     title: 'Lucky Baskhar',
    description: 'Cinma in home app',
    buttonText: 'watch ',
    watchpage:''
  },
];
//in this loop i am trying to get the image src, description, title and button text of each object in the array

for (let i = 0; i < cardData.length; i++) {
  const card = cardData[i];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.setAttribute = ("data-aos","fade-up")
 cardElement.setAttribute = ( "data-aos-duration","1000")
  const bannerImage = document.createElement('div');
  bannerImage.classList.add('banner-image');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerHTML = `<h1>${card.title}</h1><p>${card.description}</p>`;

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  buttonWrapper.innerHTML = `<a href=""><button class="btn fill">${card.buttonText}</button></a>`;

  cardElement.appendChild(bannerImage);
  cardElement.appendChild(wrapper);
  cardElement.appendChild(buttonWrapper);

  C.appendChild(cardElement);

  cardElement.style.cssText =  `background-image: url("${card.imageSrc}") ` 
}

//section 3 _ series
const sec3 = document.querySelector("#section3")
const elem3 = document.createElement('h2');
elem3.style.cssText = " font-size: 40px; font-weight: bold;";

const container3 = document.querySelector(".container3")
elem3.textContent = 'Series';
container3.appendChild(elem3)

//create a cards
const C1  = document.createElement('div');
C1.setAttribute('class','cards')
sec3.appendChild(C1);

//array of my series
const cardData5 = [
  {
    imageSrc:'',
    title: 'Lucky Baskhar',
    description: '',
    buttonText: 'watch The episode',
  },
  {
    imageSrc: '',
    title: 'Bilal Stor',
    description: 'React Js',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  {
    imageSrc: '',
    title: 'Assembler',
    description: 'Python',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  {
    imageSrc: '',
    title: 'Address Book',
    description: 'OOP using JAVA',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  {
    imageSrc: '',
    title: 'udacity p1',
    description: 'HTML , CSS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },

  {
    imageSrc: '',
    title: 'Series',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  // Add more card data objects with different images, titles, and descriptions
];
//in this loop i am trying to get the image src, description, title and button text of each object in the array

for (let i = 0; i < cardData5.length; i++) {
  const card = cardData5[i];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.setAttribute = ("data-aos","fade-up")
 cardElement.setAttribute = ( "data-aos-duration","1000")
  const bannerImage = document.createElement('div');
  bannerImage.classList.add('banner-image');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerHTML = `<h1>${card.title}</h1><p>${card.description}</p>`;

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  buttonWrapper.innerHTML = `<a href=""><button class="btn fill">${card.buttonText}</button></a>`;

  cardElement.appendChild(bannerImage);
  cardElement.appendChild(wrapper);
  cardElement.appendChild(buttonWrapper);

  C1.appendChild(cardElement);
  cardElement.style.cssText =  `background-image: url("${card.imageSrc}") ` 
  

}
//animation of card
gsap.from(".card", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});



const sec4 = document.querySelector("#section4")
const elem4 = document.createElement('h2');

const container4 = document.querySelector(".container4")
sec4.appendChild(container4)
elem4.textContent = 'Faviorte';
container4.appendChild(elem4)

const para4 = document.createElement('p');
para4.textContent = 'Hello, I am the student Bilal Muhammad Mahmoud Edoor, I study in the Faculty of Information Technology and Computer Engineering, specializing at Palestine Polytechnic University. This site provides an introduction to myself, the skills I possess, and some of the projects I have worked on.';
container4.appendChild(para4);
elem4.style.cssText = " font-size: 40px; font-weight: bold;";
para4.style.cssText = "font-size: 18px;"


const sec5 = document.querySelector("#section5")
const elem5 = document.createElement('h2');

const container5= document.querySelector(".container5")
elem5.textContent = 'Contact Us';
container5.appendChild(elem5)

const para5 = document.createElement('p');
para5.textContent = 'Hello, I am the student Bilal Muhammad Mahmoud Edoor, I study in the Faculty of Information Technology and Computer Engineering, specializing at Palestine Polytechnic University. This site provides an introduction to myself, the skills I possess, and some of the projects I have worked on.';
container5.appendChild(para5);
elem5.style.cssText = " font-size: 40px; font-weight: bold;";
para5.style.cssText = "font-size: 18px;"

//when i clicl on login button it will redirect to login page
function goToNextPage() {
  window.location.href = ".loginpage.html";
}
lgnbtn.addEventListener('click', goToNextPage)
//check for user name and passwoed correct or not
function openhome() {
  const usernameInput = document.getElementById('login__input');
  const passwordInput = document.getElementById('button login__submit');


  if (usernameInput == "bilal" && passwordInput == "1234") {
  //if correct open main page 
    window.location.href = "./project2.html";
}}


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();   
 // Prevent default behavior of following the link

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'   

      });
    }
  });
});

 