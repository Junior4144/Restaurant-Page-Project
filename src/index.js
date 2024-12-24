import "./styles.css"
import {home, clear, menu} from '../src/page-load'


const home_btn = document.querySelector('.home-btn')
const menu_btn = document.querySelector('.menu-btn')
const about_btn = document.querySelector('.about-btn')


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

about_btn.addEventListener('click', () =>{
    clear();
    home();
    //refresh
})


