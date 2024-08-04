
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})



// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";


})


reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(4, 219, 219)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})


blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(4, 219, 219)"
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})


contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})




    //----------------cart functionality------------
    function toggleCartPopup(){
        const cartPopup = document.getElementById('carts');
        cartPopup.classList.toggle('active');
    }

    function closecart(){
        const cartPopup = document.getElementById('carts');
        cartPopup.classList.remove('active');
    }


    function addToCart(itemName, itemPrice){
        const cartItems = document.getElementById('cart-item').getElementsByTagName('tbody')[0];
        const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent === itemName);
        
        if(existingItem){
            const itemCount =parseInt(existingItem.querySelector('.item-count').textContent) +1;
            existingItem.querySelector('.item-count').textContent = itemCount;

            const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
            existingItem.querySelector('.item-total').textContent =itemTotal.toFixed(2);           
        }
        else{
            const newRow = cartItems.insertRow();
            newRow.innerHTML = `
            <td>${itemName}</td>
            <td class='item-count'>1</td>
            <td class='item-price'>${itemPrice}</td>
            <td class='item-total'>${itemPrice}</td>
            <td><button id="removebtn" onclick="removeFromCart('${itemName}')">Delete</button></td>
            `;
        }
        updatetoCartCountAndTotal();
    }   

    //-------------------Remove item---------------
    function removeFromCart(itemName) {
        const cartItems = document.getElementById('cart-item').getElementsByTagName('tbody')[0];
        const itemToRemove = Array.from(cartItems.getElementsByTagName('tr')).find(item => item.cells[0].textContent === itemName);
        
        if (itemToRemove) {
            cartItems.removeChild(itemToRemove);
        }
        updatetoCartCountAndTotal();
    }

    //---------------------Checkout------------------
   
    function checkout() {
        var cartpopup = document.getElementById('checkoutbtn');
        cartpopup.classList.remove('active');

        var cartpopup = document.getElementById('popup');
        cartpopup.classList.add('active');
        cartpopup.innerHTML = `
            <form id="checkoutForm">
                Name&nbsp&nbsp: &nbsp<input type="text" id="Name"><br>
                Mobile&nbsp: &nbsp<input type="text" id="mobile"><br>
                Email&nbsp&nbsp&nbsp: &nbsp<input type="text" id="Email"><br><br>
        <button id="btn" type="submit" onclick="submitForm()">Submit</button>
            </form>
        `;
    }

    function submitForm() {
        let Name = document.getElementById('Name').value;
        let mob = document.getElementById('mobile').value;
        let email = document.getElementById('Email').value;

        if (Name === "" || mob === "" || email === "") {
            alert("Please fill all the fields");
        } else {
            alert("Form submitted successfully");
            document.getElementById('checkoutForm').remove();
            clearCart();
        }
    }
   

    function clearCart() {
        const cartItems = document.getElementById('cart-item').getElementsByTagName('tbody')[0];
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
        updatetoCartCountAndTotal();
        closecart();
    }
    
    
    
    //update total
    function updatetoCartCountAndTotal(){
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartItems = document.querySelectorAll('#cart-item tbody tr');
        let totalCount = 0;
        let total = 0;
        cartItems.forEach(item =>{
            const itemCount = parseInt(item.querySelector('.item-count').textContent);
            const itemTotal = parseInt(item.querySelector('.item-total').textContent);
            totalCount += itemCount;
            total += itemTotal;
        });
        cartCount.textContent = totalCount;
        cartTotal.textContent = total.toFixed(2);
    }
  
    

    
    // connect

    function connect(){
        let name = document.getElementById("names");
        let num = document.getElementById("number");

        if(name.value == "" && num.value == ""){
            alert("Fill Details")
        }else if (name.value == ""){
            alert("Enter your name")
        }else if (num.value == ""){
            alert("Enter Mobile number")
        }else{
            alert("Thanks for Connecting...");
        }

    }
