

export function clear(){
    const content = document.getElementById('content');
    content.innerHTML = ''

}
export function home(){

    const content = document.getElementById('content');

    const home_container = document.createElement('div');
    home_container.classList.add('home-container');

    const headLine = document.createElement('div');
    headLine.classList.add("headLine");
    headLine.textContent = "Restaurant Basic";

    const description = document.createElement('div');
    description.classList.add("description");
    description.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat aspernatur dolorem, asperiores similique amet ipsum non autem doloremque hic culpa ducimus facilis labore veniam. Eos explicabo quaerat debitis accusantium!";

    home_container.appendChild(headLine);
    home_container.appendChild(description);

    content.appendChild(home_container);
    


}
export function menu(){
    const content = document.getElementById('content');

    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container')

    const menu_title = document.createElement('div');
    menu_title.classList.add("menu-title");
    menu_title.textContent = "Menu";

    //drinks title
    const drink_title = document.createElement('div');
    drink_title.classList.add("drink-title");
    drink_title.textContent = "Drinks"
    //drinks menu


    const drinks_container = document.createElement('div');
    drinks_container.classList.add("drinks-container");

    const drink_card_1 = document.createElement('div');
    drink_card_1.classList.add('card')
    drink_card_1.textContent = "Sweet Tea";

    const drink_card_2 = document.createElement('div');
    drink_card_2.classList.add('card')
    drink_card_2.textContent = "Coca-Cola";

    drinks_container.appendChild(drink_card_1);
    drinks_container.appendChild(drink_card_2);

    // food title
    const food_title = document.createElement('div');
    food_title.classList.add("food-title");
    food_title.textContent = "Food";

    // food menu
    const food_container = document.createElement('div');
    food_container.classList.add("food-container");

    const food_card_1 = document.createElement('div');
    food_card_1.textContent = "Tacos";
    food_card_1.classList.add('card');

    const food_card_2 = document.createElement('div');
    food_card_2.textContent = "Steak";
    food_card_2.classList.add('card')

    food_container.appendChild(food_card_1);
    food_container.appendChild(food_card_2);

    //adding to menu

    menu_container.appendChild(menu_title);
    menu_container.appendChild(drink_title);
    menu_container.appendChild(drinks_container);
    menu_container.appendChild(food_title);
    menu_container.appendChild(food_container);

    content.appendChild(menu_container);
    


}

export function contact(){
    const content = document.getElementById('content');

    // three cards with owner 1, 2 ,3 info

    const card_container = document.createElement('div');
    card_container.classList.add('card-container');


    
    const contact_card_1 = document.createElement('div');
    contact_card_1.classList.add('contact-card');
    
    const contact_card_name  = document.createElement('div');
    contact_card_name.textContent = "Owner 1";

    const contact_card_tel  = document.createElement('div');
    contact_card_tel.textContent = "555-555-5555";

    const contact_card_email  = document.createElement('div');
    contact_card_email.textContent = "owner1@email.com";

    contact_card_1.appendChild(contact_card_name);
    contact_card_1.appendChild(contact_card_tel);
    contact_card_1.appendChild(contact_card_email);

    const contact_card_2 = document.createElement('div');
    contact_card_2.classList.add('contact-card');
    
    const contact_card_2_name  = document.createElement('div');
    contact_card_2_name.textContent = "Owner 2";

    const contact_card_2_tel  = document.createElement('div');
    contact_card_2_tel.textContent = "555-555-5556";

    const contact_card_2_email  = document.createElement('div');
    contact_card_2_email.textContent = "owner2@email.com";

    contact_card_2.appendChild(contact_card_2_name);
    contact_card_2.appendChild(contact_card_2_tel);
    contact_card_2.appendChild(contact_card_2_email);
    
    card_container.appendChild(contact_card_1);
    card_container.appendChild(contact_card_2);

    content.appendChild(card_container);
}