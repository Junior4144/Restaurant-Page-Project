import "./styles.css"
import {home, clear, menu, contact} from '../src/page-load'


const home_btn = document.querySelector('.home-btn')
const menu_btn = document.querySelector('.menu-btn')
const contact_btn = document.querySelector('.contact-btn')


home_btn.addEventListener('click', () =>{
    clear();
    home();
    //refresh
})
menu_btn.addEventListener('click', () =>{
    clear();
    menu();
    //refresh
})

contact_btn.addEventListener('click', () =>{
    clear();
    contact();
    //refresh
})


home();