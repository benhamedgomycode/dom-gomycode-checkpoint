
let removeBtn = document.getElementsByClassName('delete-btn');

let item = document.getElementsByClassName('item');

for(i=0; i<removeBtn.length; i++){
    let rmbtn=removeBtn[i]
    rmbtn.addEventListener('click', function(){
             rmbtn.parentNode.parentNode.parentNode.remove();
})
};

let userInput = document.getElementsByClassName("user-input");
let plusButton = document.getElementsByClassName("plus-btn");
for (i=0; i<plusButton.length;i++){
    let plus = plusButton[i];
    plus.addEventListener('click', function(){
        let input = plus.parentNode.children[1];
        let value =  parseInt(input.getAttribute('value'));
        let price = plus.parentNode.parentNode.children[4].children[0];
        let result = plus.parentNode.parentNode.children[5].children[0];

        let pricetot = 1
        if (value < 100) {
            value = value + 1;
            pricetot = parseInt( price.textContent)*value; 
        } else {
            value =100;
        }

        input.setAttribute('value', value);
        result.innerHTML = pricetot;

    })
};



let minusButton = document.getElementsByClassName("minus-btn");
for (i=0; i<minusButton.length;i++){
    let minus = minusButton[i];
    minus.addEventListener('click', function(){
        let input = minus.parentNode.children[1];
        let value =  parseInt(input.getAttribute('value'));
        let price = minus.parentNode.parentNode.children[4].children[0];
        let result = minus.parentNode.parentNode.children[5].children[0];

        if (value > 1) {
            value -= 1;
            pricetot = parseInt( price.textContent)*value; 
        } else {
            value = 0;
            pricetot = price.textContent;
        }
          
        input.setAttribute('value', value);
        result.innerHTML = pricetot;
    })
}

let likeButton = document.getElementsByClassName("like-btn");
for (i=0; i<likeButton.length; i++){
    let like = likeButton[i];
    like.addEventListener('click',function(){
        like.classList.toggle("is-active");
    })
}