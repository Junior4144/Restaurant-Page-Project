

export function clear(){
    const content = document.getElementById('content');
    content.innerHTML = ''

}
export function home(){

    const content = document.getElementById('content');

    const headLine = document.createElement('div');
    const description = document.createElement('div');

    headLine.classList.add("headLine");
    description.classList.add("description");

    headLine.textContent = "Restaurant A";
    description.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat aspernatur dolorem, asperiores similique amet ipsum non autem doloremque hic culpa ducimus facilis labore veniam. Eos explicabo quaerat debitis accusantium!";

    content.appendChild(headLine);
    content.appendChild(description);


}
export function menu(){
    const content = document.getElementById('content');

    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container')

    const headLine = document.createElement('div');
    headLine.classList.add("headLine");
    headLine.textContent = "Menu";

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

    menu_container.appendChild(headLine);
    menu_container.appendChild(drink_title);
    menu_container.appendChild(drinks_container);
    menu_container.appendChild(food_title);
    menu_container.appendChild(food_container);

    content.appendChild(menu_container);
    


}

export function about(){

}