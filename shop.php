<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D&F Shop</title>
    <link
    href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <link
    rel="shortcut icon"
    href="./assets/img/Logo-DF.png"
    type="image/x-icon"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"
  />
  </head>
  <body>
    <div id="container">
      <div id="header">
        <img src="./assets/img/Logo-DF.png" alt="" class="brand-logo" />
        <ul id="nav">
          <!-- <div class="underline"></div>
          <div class="underline"></div>
          <div class="underline"></div> -->
          <li><a href="./index.php">Home</a></li>
          <li style="border-bottom: 5px solid #000;"><a href="#">Shop</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">More</a></li>
        </ul>

        <div id="header-option">
          <div class="search-bar">
            <form action="" id="search" >
              <input type="text" placeholder="" name="foodName"/>
              <i class="fas fa-search"></i>
            </form>
          </div>
          <div class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span>Cart </span>
            <p>0</p>
          </div>
          <div class="account">
            <i class="fas fa-user-circle"></i>
            <p>Log in</p>
          </div>
        </div>
      </div>
      
      <div id="content">
        <div class="heading-content">
          <h3 class="heading-text">Shop</h3>
          <div class="filter-btn">
            <button class="food-filter-btn" id="food-btn">
              Food
            </button>
            <button class="drink-filter-btn" id="drink-btn">
              Drink
            </button>
          </div>
        </div>
        <div style="width: 100%">
          <div id="product-container">
            <div class="product-list">
              <ul id="product-box" class="product-box">

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="social">
          <div class="network-icon">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="network-icon">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="network-icon">
            <i class="fab fa-tiktok"></i>
          </div>
          <div class="network-icon">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="network-icon">
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <span><i class="far fa-copyright"></i> Copyright by D&F</span>
      </div>
    </div>
    <div id="login" class="login">
      <div class="login-container">
        <div class="login-left"></div>
        <div class="login-right">
          <h5 class="login-header">Log in</h5>
          <form action="" class="login-form">
            <input type="text" class="username" placeholder="Login" />
            <input type="password" class="password" placeholder="Password" />
            <div class="remember-account">
              <input type="checkbox" name="" class="remember-box" id="" />
              <label for="remember-box">Remember me</label>
            </div>
            <input type="submit" value="Login" class="submit-btn" />
          </form>
          <p class="login-text">Or join with</p>
          <div class="connect-social">
            <div class="network-icon">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </div>
            <div class="network-icon">
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="network-icon">
              <a href="#"><i class="fab fa-google"></i></a>
            </div>
          </div>
          <p class="login-text">Not a member yet? <a href="#">Sign up!</a></p>
        </div>
      </div>
    </div>
    <div id="chat">
      <a href="#"><i class="fas fa-comment-lines"></i> Let's chat</a>
    </div>
    <div class="cart">
      <div class="cart-container">
        <div class="cart-content">
          <div class="cart-heading">
            <i class="far fa-chevron-right close-cart"></i>
            <h3 class="heading-text">Cart</h3>
          </div>
          <div class="cart-product">
            <!-- <div class="product">
              <div class="image-product-cart">

              </div>
              <div class="product-content-cart">
                <h3 class="name-product-cart">I'm a product</h3>
                <p class="price-product-cart">49.999d</p>
                <div class="quantity">
                  <input type="number" min="0" value="1">
                </div>
              </div>
            </div> -->
          </div>
          <div class="submit-cart">
            <div class="total-price">
              <h3 class="total">Total: </h3>
              <!-- <p class="total-price-cart">0</p> -->
            </div>
            <div class="viewcart-btn">
              <button class="view-cart">View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="viewmore_conatainer">

    </div>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>
    <script src="./js/shop.js"></script>
    
  </body>
</html>
