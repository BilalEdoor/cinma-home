const mainheading = document.body;

const hero = document.createElement('div');
mainheading.appendChild(hero);
hero.setAttribute('class' , 'page_sec')

const sec1 = document.createElement('section')
const elem1 = document.createElement('h2');
const container1 = document.createElement('div');
container1.setAttribute('class','landing__container')
elem1.style.cssText = " font-size: 40px; font-weight: bold;";
const photo = document.createElement('div');
photo.setAttribute('class','home-img') ;
sec1.appendChild(photo);
photo.style.float ='right'
photo.innerHTML = '<img class="HOME=IMG" src="./Images/0850B817-EAA8-4F02-9761-CE857BDABAF6.JPG"alt="">';

// *****************************************************


// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
gsap.from(".typing-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".social-icons", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".main-img img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});

gsap.from(".home-img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});


// *****************************************************

elem1.textContent = 'About us';
hero.appendChild(sec1);
sec1.appendChild(container1)
container1.appendChild(elem1)
const para1 = document.createElement('p');
para1.textContent = 'Hello, I am the student Bilal Muhammad Mahmoud Edoor, I study in the Faculty of Information Technology and Computer Engineering, specializing at Palestine Polytechnic University. This site provides an introduction to myself, the skills I possess, and some of the projects I have worked on.';
para1.style.cssText = "font-size: 18px;"


container1.appendChild(para1);
sec1.setAttribute('id',"section1")
sec1.setAttribute('data-nav',"section 1")
sec1.setAttribute('class',"your-active-class")


const sec2 = document.createElement('section')
const elem2 = document.createElement('h2');
const container2 = document.createElement('div');
container2.setAttribute('class','landing__container')
elem2.textContent = 'Our movies';
elem2.style.cssText = " font-size: 40px; font-weight: bold;";

////----------------------------------------------------------------------------------

hero.appendChild(sec2);
sec2.appendChild(container2);
container2.appendChild(elem2)
sec2.setAttribute('id',"section2")
sec2.setAttribute('data-nav',"section 2")
sec2.setAttribute('class',"cards-container")


//create a cards
const C  = document.createElement('div');
C.setAttribute('class','cards')
sec2.appendChild(C);


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

for (let i = 0; i < cardData.length; i++) {
  const card = cardData[i];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.setAttribute = ("data-aos","fade-up")
 cardElement.setAttribute = ( "data-aos-duration","1000")
  const bannerImage = document.createElement('div');
  bannerImage.classList.add('banner-image');
  // bannerImage.innerHTML = `<img src="${card.imageSrc}" alt="">`;

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










const sec5 = document.createElement('section')
const elem5 = document.createElement('h2');
const container5 = document.createElement('div');
container5.setAttribute('class','landing__container')


elem5.textContent = 'Series';
elem5.style.cssText = " font-size: 40px; font-weight: bold;";

hero.appendChild(sec5);
sec5.appendChild(container5)
container5.appendChild(elem5)


sec5.setAttribute('id',"section5")
sec5.setAttribute('class',"cards_container")

sec5.setAttribute('data-nav',"section 5")



//------------------------------------------------------------


const C1  = document.createElement('div');
C1.setAttribute('class','cards')
sec5.appendChild(C1);

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
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'watch The episode',
    pagewatch: ''
  },
  // Add more card data objects with different images, titles, and descriptions
];

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

gsap.from(".card", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});

//------------------------------------------------------------

const sec3 = document.createElement('section')
const elem3 = document.createElement('h2');
const container3 = document.createElement('div');
container3.setAttribute('class','landing__container')
elem3.style.cssText = " font-size: 40px; font-weight: bold;";


elem3.textContent = 'Favorite';
hero.appendChild(sec3);
sec3.appendChild(container3);
container3.appendChild(elem3)
const para3 = document.createElement('p');
para3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
container3.appendChild(para3);
sec3.setAttribute('id',"section3")
para3.style.cssText = "font-size: 18px;"




const sec4 = document.createElement('section')
const elem4 = document.createElement('h2');
const container4 = document.createElement('div');
container4.setAttribute('class','landing__container')


elem4.textContent = 'Contact us';
elem4.style.cssText = " font-size: 40px; font-weight: bold;";

hero.appendChild(sec4);
sec4.appendChild(container4)
container4.appendChild(elem4)
const para4 = document.createElement('p');
para4.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
para4.style.cssText = "font-size: 18px;"

container4.appendChild(para4);
sec4.setAttribute('id',"section4")
sec4.setAttribute('data-nav',"section 4")

function goToNextPage() {
  window.location.href = "./loginpage.html"; // استبدل newpage.html باسم الصفحة المستهدفة
}


function openhome() {
  const loginButton = document.getElementById('loginButton');
  const usernameInput = document.getElementById('login__input');
  const passwordInput = document.getElementById('button login__submit');


  if (usernameInput == "bilal" && passwordInput == "1234") {
  // إضافة مستمع للأحداث لزر تسجيل الدخول والخروج
loginButton.addEventListener('click', () => {
  window.location.href = "./project2.html";
   
})

  }
  

}

  const btn = document.getElementsByClassName('.theme-button');
  btn.addEventListener('click',function (){
    const root = document.querySelector('html');
    root.classList.toggle('dark');

    if (root.classList.contains('dark')) {
      btn.textContent = 'Light Mode';
    } else {
      btn.textContent = 'Dark Mode';
    }
  });


  
 