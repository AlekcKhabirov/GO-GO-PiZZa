const toppingsToogle=()=> {
    const toppingsButton=document.querySelector('.toppings__button');
    const toppingsList=document.querySelector('.toppings__list');

    toppingsButton.addEventListener('click',()=>{
        if(!toppingsList.classList.contains('toppings__list_show')){
            toppingsList.classList.add('toppings__list_show');
            toppingsButton.classList.add('toppings__button_active');
            
            toppingsList.style.maxHeight =toppingsList.scrollHeight+'px';
        }
        else{
            toppingsButton.classList.remove('toppings__button_active');
            toppingsList.style.maxHeight=null;

            setTimeout(()=>{
                toppingsList.classList.remove('toppings__list_show');}
                ,300);
        }
    } );     
}
/*       3    */
const getPizzas= async()=>{
    try {
        const response = await fetch(`https://shrub-pineapple-rosemary.glitch.me/api/products`);
        if (!response.ok) {
            throw new Error('failed you fetch pizza products');      
        } 
        return await response.json();/*       4    */
       /* const data= await response.json();
        console.log('data:',data);*/
    } catch (erorr) {
        console.error(`error fetching error pizza products:, ${error}`);
    }

        
    
    
}
 /*    2       */
const  renderPizzas=async()=>{
    const pizzas = await  getPizzas();/*    5       */
   /* console.log('pizzas:',pizzas);*/
    const pizzaLIst= document.querySelector('.pizza__list');
    
   /* console.log(pizzaLIst);           */
    pizzaLIst.textContent="";

    const createCard=(data)=>{
        const card =document.createElement('article');
        card.classList.add('card', 'pizza__card');
        card.innerHTML=
        `
        <picture>
        <source srcset="${data.images[1]}" type="image/webp">
        <img class="card__image" src="${data.images[0]}" alt="${data.name.ru}" >
        </picture>
       
        <div class="card__content">
                       
            <h3 class="card__title">${data.name['ru']}</h3>          

            <div class="card__info">
                <span class="card__price">${data.price["30cm"]} р</span>

                <span >/</span>

                <span class="card__weigth">30см.</span>
            </div>
    
            <button class="card__button" data-id="${data.id}">Выбрать</button> 
         </div>
        
        `;
        return card;
    };
/*      6     */
    const items =pizzas.map((data)=>{
        console.log('data:',data);
       /* console.log('index:',index);,index,arr
        console.log('arr:',arr);*/

        const item =document.createElement('li');
        item.classList.add('pizza__item');
        /*item.textContent=data.name.en;           */

        const card =createCard(data);
        item.append(card);
        return item;
    })
   pizzaLIst.append(...items);   
   pizzaLIst.append(...card);/*       7    */
}

const init=()=>{
    toppingsToogle();
    renderPizzas();/*    1       */
}

init();/*           */ /* можно через точку          */