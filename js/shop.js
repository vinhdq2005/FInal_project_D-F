// log in page
let login = document.querySelector(".account");
let loginPage = document.querySelector("#login");
let loginContainer = document.querySelector(".login-container");

function showLogin() {
  loginPage.classList.add("open");
}

function hideLogin() {
  loginPage.classList.remove("open");
}

loginPage.addEventListener("click", hideLogin);
login.addEventListener("click", showLogin);

loginContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// cart
let openCarticon = document.querySelector(".cart-icon");
let closeCarticon = document.querySelector(".close-cart");
let cartNavbar = document.querySelector(".cart");
let cartContainer = document.querySelector(".cart-container");

function showCart() {
  cartNavbar.classList.add("open-cart");
}
function closeCart() {
  cartNavbar.classList.remove("open-cart");
}

openCarticon.addEventListener("click", showCart);
closeCarticon.addEventListener("click", closeCart);
cartContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// product content
let dataFood = [
  {
      background: "https://product.hstatic.net/1000303672/product/191008_kho_ga_cay_la_chanh__125g__hu__mau_nap_nhom_-_110625_-_01_f207b52b2a97453d91caedeafe67c0ed.jpg",
      name: "Khô gà",
      price: "49.999đ",
      rate: "4.9",
      numberPrice: 49999,
      inCart: 0
  },
  {
      background: "https://salt.tikicdn.com/ts/product/3a/80/f2/307f31b665dd14ad84b837fe4c5c19a0.jpg",
      name: "Khô bò",
      price: "49.999đ",
      rate: "4.0",
      numberPrice: 49999,
      inCart: 0
  },
  {
      background: "https://vnn-imgs-f.vgcloud.vn/2021/04/28/14/che-buoi-2.jpg",
      name: "Chè bưởi",
      price: "19.999đ",
      rate: "4.5",
      numberPrice: 19999,
      inCart: 0
  },
  {
      background: "https://i.ytimg.com/vi/rGvRHF8h-wM/maxresdefault.jpg",
      name: "Chè sầu",
      price: "49.999đ",
      rate: "4.5",
      numberPrice: 49999,
      inCart: 0
  },
  {
      background: "https://cdn.tgdd.vn/Files/2020/03/23/1243844/lam-nem-chua-ran-chien-xu-chuan-vi-ha-noi-tai-nha-202003230644441198.jpg",
      name: "Nem chua rán",
      price: "5.000đ/cái",
      rate: "4.0",
      numberPrice: 5000,
      inCart: 0
  },
  {
      background: "https://vtv1.mediacdn.vn/zoom/550_339/2019/11/8/1512474034-837-bua-sang-chac-da-voi-com-chien-ca-hoi-mem-toi-bo-duong-mg8357-1512473926-width660height440-1573183256236739605317.jpg",
      name: "Cơm rang",
      price: "49.999đ",
      rate: "5.0",
      numberPrice: 49999,
      inCart: 0
  },
  {
      background: "https://ameovat.com/wp-content/uploads/2016/05/15.jpg",
      name: "Phở gà",
      price: "30.000đ",
      rate: "4.5",
      numberPrice: 30000,
      inCart: 0
  },
  {
      background: "https://maythucphamtoanphat.vn/uploads/images/nau-pho-ngon-bang-noi-nau-pho.jpg",
      name: "Phở bò",
      price: "30.000đ",
      rate: "4.5",
      numberPrice: 30000,
      inCart: 0
  },
  {
      background: "https://cokhiviendong.com/wp-content/uploads/2019/01/kinnh-nghi%E1%BB%87m-m%E1%BB%9F-qu%C3%A1n-g%C3%A0-r%C3%A1n-7.jpg",
      name: "Gà rán",
      price: "15.000đ/cái",
      rate: "4.0",
      numberPrice: 15000,
      inCart: 0
  },
  {
      background: "https://media.vov.vn/sites/default/files/styles/large/public/2020-10/bun_dau_mam_tom_1.jpg",
      name: "Bún đậu",
      price: "30.000đ",
      rate: "4.5",
      numberPrice: 30000,
      inCart: 0
  }
]
let dataDrink = [
  {
    background: "https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e",
    name: "Coca-cola",
    price: "15.000đ",
    rate: "5.0",
    numberPrice: 15000,
    inCart: 0
  },
  {
    background:
      "https://minhcaumart.vn/media/com_eshop/products/sprite-lon-cao-330ml-MCM.jpg",
    name: "Sprite",
    price: "15.000đ",
    rate: "4.5",
    numberPrice: 15000,
    inCart: 0
  },
  {
    background:
      "https://cdn.tgdd.vn/Products/Images/2443/76453/bhx/nuoc-ngot-fanta-vi-cam-lon-330ml-201812281420358633.jpg",
    name: "Fanta",
    price: "15.000đ",
    rate: "4.5",
    numberPrice: 15000,
    inCart: 0
  },
  {
    background:
      "https://cdn.tgdd.vn/Products/Images/3226/76519/bhx/nuoc-tang-luc-sting-sleek-huong-dau-320ml-202107142008425331.jpg",
    name: "Sting",
    price: "15.000đ",
    rate: "4.8",
    numberPrice: 15000,
    inCart: 0
  },
  {
    background:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/361/770/products/nuoc-ngot-pepsi-thai-lon-330ml.jpg?v=1570675810693",
    name: "Pepsi",
    price: "15.000đ",
    rate: "4.8",
    numberPrice: 15000,
    inCart: 0
  },
  {
    background:
      "https://cdn.tgdd.vn/Products/Images/2282/148785/bhx/bia-heineken-sleek-330ml-202003250703333577.JPG",
    name: "Heniken",
    price: "20.000đ",
    rate: "4.8",
    numberPrice: 20000,
    inCart: 0
  },
  {
    background:
      "https://sc04.alicdn.com/kf/U686e0155620b4e02a37af526df81598dG.jpg",
    name: "Saigon",
    price: "20.000đ",
    rate: "4.8",
    numberPrice: 20000,
    inCart: 0
  },
  {
    background:
      "https://www.habeco.com.vn/photo/12d05318-7e1d-4306-bd85-57f325cac52b.jpg",
    name: "Hanoi",
    price: "20.000đ",
    rate: "4.8",
    numberPrice: 20000,
    inCart: 0
  },
  {
    background:
      "http://cdn.shopify.com/s/files/1/0373/2648/7597/products/sapporopremium_1200x1200.jpg?v=1597133922",
    name: "Sapporo",
    price: "50.000đ",
    rate: "4.8",
    numberPrice: 50000,
    inCart: 0
  },
  {
    background:
      "http://cdn.shopify.com/s/files/1/0373/2648/7597/products/2._tiger__b3d67312661a4870ba760e02daf5aac1_grande_f26bd483-1078-44f4-9d73-af91649da00a_1200x1200.jpg?v=1595421630",
    name: "Tiger",
    price: "20.000đ",
    rate: "4.8",
    numberPrice: 20000,
    inCart: 0
  },
];

let dataAll = dataFood.concat(dataDrink);

function renderData(data) {
  let cardProduct = document.querySelector("#product-box");

  cardProduct.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let html = `<li class="splide__slide"><div>
        <div class="sale-product">
          <div class="image-sale-product" style="background: url('${data[i].background}') bottom center / cover no-repeat ;">
              <div class="product-quickview">
                  <p id="viewmoreIcon${i}">Quick View</p>
              </div>
          </div>
          <div class="name">
              <p class="name-product">${data[i].name}</p>
              <p class="rating"><i class="fas fa-star"></i> ${data[i].rate}</p>
          </div>
          <div class="price">
              <p class="price-product">${data[i].price}</p>
              <button class="addtocartbtn">Add to cart</button>
          </div>
      </div>
    </div></li>`;
    cardProduct.innerHTML += html;
  }
  for (let i = 0; i < data.length; i++) {
    document
      .querySelector(`#viewmoreIcon${i}`)
      .addEventListener("click", () => {
        console.log(data[i]);
        renderViewMore(data[i]);
      });
  }
}

renderData(dataAll);

let renderViewMore = (data) => {
  let dom = document.querySelector(".viewmore_conatainer");
  dom.innerHTML = "";

  let html = `      <div class="viewmore viewmore-open">
    <div class="viewmore-container">
      <div style="background-image: url('${data.background}');"class="viewmore-left"></div>
      <div class="viewmore-right">
        <div onclick="closeMore()" class="close-icon">
          <i class="far fa-times"></i>
        </div>
        <p class="small-heading-text">${data.name}</p>
        <p class="body-text price">${data.price} VNĐ</p>
        <p class="body-text quantity">Quantity</p>
        <form action="" class="viewmore-form">
          <input type="number" class="quantity-btn" />
          <input type="submit" class="submit-btn" value="Add to cart" />
        </form>
        <p class="body-text details"><a href="">View More Details</a></p>
      </div>
    </div>
  </div>`;
  dom.innerHTML = html;
};

// view more
function closeMore() {
  let dom = document.querySelector(".viewmore_conatainer");
  dom.innerHTML = "";
}

// filter

let foodBtn = document.querySelector("#food-btn");
function openFood() {
  foodBtn.classList.add("click-food");
  drinkBtn.classList.remove("click-drink");
  renderData(dataFood);
}
foodBtn.addEventListener("click", openFood);

let drinkBtn = document.querySelector("#drink-btn");
function openDrink() {
  foodBtn.classList.remove("click-food");
  drinkBtn.classList.add("click-drink");
  renderData(dataDrink);
}
drinkBtn.addEventListener("click", openDrink);

// search
let form = document.querySelector("#search")
form.onsubmit = function(dataSearch) {
  dataSearch.preventDefault()
  let foodName = form.foodName.value.trim()
  
  let result = dataAll.filter((i) =>{
    return i.name.toLowerCase().includes(foodName.toLowerCase())
  })
  console.log(foodName);
  renderData(result)  
}



// add to cart
let carts = document.querySelectorAll('.addtocartbtn')

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', ()=> {
    cartNumbers(dataAll[i])
    totalCost(dataAll[i])
  })
}

function onLoadcartnumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')
  if (productNumbers) {
    document.querySelector('.cart-icon p').textContent = productNumbers

  }
}

function cartNumbers(dataAll) {
  let productNumbers = localStorage.getItem('cartNumbers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNumbers',productNumbers + 1)
    document.querySelector('.cart-icon p').textContent = productNumbers + 1

  }else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cart-icon p').textContent = 1
  }

  setItems(dataAll)
}

function setItems(dataAll) {
  let cartItems = localStorage.getItem('productInCart')
  // console.log(cartItems);
  cartItems = JSON.parse(cartItems)

  if (cartItems != null) {
    if (cartItems != undefined) {
      cartItems = {
        ...cartItems,
        [dataAll.name]: dataAll
      }
    }
    cartItems[dataAll.name].inCart += 1
  } else {
    dataAll.inCart = 1
    cartItems = {
      [dataAll.name]: dataAll
    }
  }


  localStorage.setItem("productInCart", JSON.stringify(cartItems))
}

function totalCost(dataAll) {
  let cartCost = localStorage.getItem('totalCost')
  if (cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setItem("totalCost", cartCost + dataAll.numberPrice)
    
  } else {
    localStorage.setItem("totalCost", dataAll.numberPrice)
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productInCart")
  cartItems = JSON.parse(cartItems)
  let cartProduct = document.querySelector(".cart-product")
  let cartTotal = document.querySelector(".total-price")
  let cartCost = localStorage.getItem('totalCost')


  if (cartItems && cartProduct) {
    cartProduct.innerHTML = ""
    Object.values(cartItems).map(item => {
      cartProduct.innerHTML += `
      <div class="product">
      <div class="image-product-cart" style="background: url('${item.background}') bottom center / cover no-repeat ;">

      </div>
      <div class="product-content-cart">
        <h3 class="name-product-cart">${item.name}</h3>
        <p class="price-product-cart">${item.price}</p>
        <div class="quantity">
          <input type="number" min="0" value="${item.inCart}">
        </div>
      </div>
      <div class="delete-icon">
        <i class="fas fa-times delete-product"></i>
      </div>
      </div>
    
      `
    })
    cartTotal.innerHTML += `<p class="total-price-cart">${cartCost}đ</p>`
  }
  
}

onLoadcartnumbers()
displayCart()


// cart number (css input number)
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
