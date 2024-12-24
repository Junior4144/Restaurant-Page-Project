

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

    const menu = document.createElement('div');
    menu.classList.add('menu')

    const headLine = document.createElement('div');
    headLine.classList.add("headLine");
    headLine.textContent = "Menu";

    const drinksMenu = document.createElement('div');
    drinksMenu.classList.add("drinkMenu");


    
    const drink1 = document.createElement('div');
    drink1.textContent = "Sweet Tea";

    const drink2 = document.createElement('div');
    drink2.textContent = "Coca-Cola";

    drinksMenu.appendChild(drink1);
    drinksMenu.appendChild(drink2);

    menu.appendChild(headLine);
    menu.appendChild(drinksMenu);

    content.appendChild(menu)
    


}

export function about(){

}