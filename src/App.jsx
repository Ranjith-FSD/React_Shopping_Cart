import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  // const [show, setShow] = useState(false);
  const data = [
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590000452/sharad-seedless-grapes-1-kg-product-images-o590000452-p590116963-0-202203171004.jpg?im=Resize=(420,420)",
      productName: "Sharad Seedless Grapes ",
      quantity: "500 g",
      price: "49",

    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590001265/watermelon-kiran-1-pc-approx-2300-g-3000-g-product-images-o590001265-p590041413-0-202203142036.jpg?im=Resize=(420,420)",
      productName: "Watermelon Kiran ",
      quantity: "Big 1 pc(Approx. 2800 g - 4000 g)",
      price: "79",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590009674/kiwi-imported-3-pcs-pack-product-images-o590009674-p590317377-0-202203171126.jpg?im=Resize=(420,420)",
      productName: "Kiwi Imported",
      quantity: "3 pcs (Pack)",
      price: "120",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590009369/dates-imported-approx-450-g-550-g-product-images-o590009369-p602482562-0-202306211757.jpg?im=Resize=(420,420)",
      productName: "Dates Imported",
      quantity: "(Approx. 450 g - 550 g)",
      price: "189",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590006806/mosambi-3-kg-pack-product-images-o590006806-p590032918-0-202203150754.jpg?im=Resize=(420,420)",
      productName: "Mosambi",
      quantity: "3 kg(pack)",
      price: "190",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590003068/sapota-6-pcs-pack-approx-450-g-550-g-product-images-o590003068-p590309513-0-202208101342.jpg?im=Resize=(420,420)",
      productName: "Sapota ",
      quantity: "6 pcs (Pack) (Approx 450 g -550 g)",
      price: "59",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590001887/musk-melon-1-pc-approx-600-g-900-g-product-images-o590001887-p591217775-0-202204111800.jpg?im=Resize=(420,420)",
      productName: "Musk Melon",
      quantity: "1 pc (Approx. 600 g - 900 g)",
      price: "39",
    },
    {
      productImages:
        "https://www.jiomart.com/images/product/original/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg?im=Resize=(420,420)",
      productName: "Pineapple Queen",
      quantity: "1 pc (Approx 700 g - 1200 g)",
      price: "79",
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              Fresh Mart
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Fruits</h1>
            <p class="lead fw-normal text-white-50 mb-0">Fresh Fruits</p>
          </div>
        </div>
      </header>

      <div className="cart-value">
        <Badge bg="success">CART {count}</Badge>
      </div>

      <div className="card-container">
        {data.map((product, index) =>
          <Cards
            index={index}
            product={product}
            setCount={setCount}
            count={count}
          />
        )}
      </div>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; RanjithKumar <span>2024</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Cards({ product, index, setCount, count }) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(!show);
    setCount(count + 1);
  }
  function removeFromCart() {
    setShow(!show);
    setCount(count - 1);
  }
  return (

    <Card key={index} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.productImages} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.quantity}</Card.Text>
        <Card.Text>
          <span>&#8377;</span>
          {product.price}
        </Card.Text>

        {!show ? (
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        ) : (
          ""
        )}

        {show ? (
          <Button variant="danger" onClick={removeFromCart}>
            Remove Cart
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>

  );
}