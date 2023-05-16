import { form } from "./formPg";
import { ProductivtyMthdsPage } from "./productivityMthds";
import { templates } from "./templates";
import { home } from "./home";
import { setData } from './dateSections/storage.js'

export function header() {
    let header = document.createElement('header')
    document.body.appendChild(header).setAttribute('id', 'header')

    let nav = document.createElement('nav')


    let btnArray = ['home', 'templates', 'productivty methods', 'about us'];

    function navGenerator(container) {
        for (let i = 0; i < 4; i++) {
            let navBtn = document.createElement('button');
            container.appendChild(navBtn).setAttribute('id', `nav-btn${i + 1}`)
            navBtn.classList.add('nav-btn');
            navBtn.textContent = btnArray[i]
        }
    }

    let profile = document.createElement('div');
    let logInBtn = document.createElement('button');
    let startFreeBtn = document.createElement('button');
    header.appendChild(profile).setAttribute('id', 'user-profile')
    profile.appendChild(logInBtn).setAttribute('id', 'nav-btn5')
    profile.appendChild(startFreeBtn).setAttribute('id', 'nav-btn6')
    logInBtn.setAttribute('class', 'nav-btn')
    startFreeBtn.setAttribute('class', 'nav-btn')

    logInBtn.textContent = 'log in';
    startFreeBtn.textContent = 'start for free';
    navGenerator(nav)
    header.appendChild(nav).setAttribute('id', 'nav');


    if (!localStorage.getItem('fName')) {
        document.getElementById('nav-btn5').style.display = 'flex';
        document.getElementById('nav-btn6').style.display = 'flex';
    }
    else {
        document.getElementById('nav-btn5').style.display = 'none';
        document.getElementById('nav-btn6').style.display = 'none';
        let userName = document.createElement('span')
        let userPic = document.createElement('div')
        profile.appendChild(userName).setAttribute('id', 'user-name');
        profile.appendChild(userPic).setAttribute('id', 'user-pic');

        if (window.innerWidth < 1200) {
            profile.addEventListener('click', () => {
                if (nav.style.display === 'none') {
                    console.log('Im here')
                    nav.style.display = 'flex'
                }
                else {
                    nav.style.display = 'none';
                }
            })
        }
    }

    setData()
    //===================================================================================================================================================
    let barIcon = document.createElement('div');
    header.appendChild(barIcon).setAttribute('id', 'bar-icon');


    let homeBtn = document.getElementById('nav-btn1');
    homeBtn.addEventListener('click', function () {
        document.body.textContent = '';
        start()
    });

    let templatesBtn = document.getElementById('nav-btn2');
    templatesBtn.addEventListener('click', function () {
        document.body.textContent = ''
        console.log("Ive been clicked")
        templates()
    });

    let resourcesBtn = document.getElementById('nav-btn3');
    resourcesBtn.addEventListener('click', () => {
        document.body.textContent = '';
        ProductivtyMthdsPage();
    })

}


export function start() {
    //adding header

    if (!localStorage.getItem("fName")) {
        header()

        let startPage = document.createElement('div')
        let content = document.createElement('div');
        let h1 = document.createElement('h1');
        let para = document.createElement('p')
        let picContainer = document.createElement('img');
        let startBtn = document.createElement('button');

        document.body.appendChild(startPage).setAttribute('id', 'start-page');

        startPage.appendChild(content).setAttribute('id', 'start-content')
        content.classList.add('content');

        content.appendChild(h1)
        content.appendChild(para)

        h1.textContent = 'welcome to DoIt';
        para.textContent = `You can't keep today's hour for tomorrow – we all 
        know that, but still tend to procrastinate. Benjamin Franklin warns that
         time is a scarce resource, and if it's wasted, it cannot be recovered later. 
         This is why mindful planning and work on productivity are so important, DoIt will help
         you to manage your time, get started now!
        `

        startPage.appendChild(picContainer).setAttribute('src', './images/6272295.jpg')

        content.appendChild(startBtn).setAttribute('id', 'start-button')
        startBtn.textContent = 'get started'

        startBtn.addEventListener('click', form)
    }
    else {
        home()
    }
}

