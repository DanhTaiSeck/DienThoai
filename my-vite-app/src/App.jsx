import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dienthoai">
        <header>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/C-3gyOiGIPGviaZjj4w6384dyiVtGmL0Iv9HfRowUwQ.jpg"
              alt="Logo"
            />
            <input type="text" placeholder="Bạn muốn tìm" />
          </div>
          <div>
            <a href="#">Hotline: 1900 6063</a>
            <a href="#">Facebook</a>
            <a href="#">H2 Channel</a>
          </div>
        </header>
        <main>
          <h1>SMARTPHONE</h1>
          <p>Trang chủ &gt; Smartphone</p>
          <div className="button-group">
            <button>Samsung Galaxy</button>
            <button>iPhone Series 16</button>
            <button>iPhone Series 15</button>
            <button>iPhone Series 14</button>
            <button>iPhone Series 13</button>
            <button>iPhone Series 12</button>
            <button>iPhone Series 11</button>
            <button>iPhone SE 3</button>
            <button>Điện Thoại Oppo</button>
            <button>Điện Thoại Xiaomi</button>
            <button>iPhone 15e</button>
          </div>
          <div className="filter-group">
            <div>
              <span>Low position</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div>
              <span>08 Mỗi trang</span>
              <i className="fas fa-th-large"></i>
            </div>
          </div>
          <div className="product-grid">
            {[
              {
                img: "https://storage.googleapis.com/a1aa/image/7_xYqLHftIr9Th4z-S0T10lNmGGBQrSJ-IMEyl-5Te0.jpg",
                title: "iPhone 14e 128GB - Nguyên Seal - Chưa Active",
                price: "15.400.000 ₫",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/xVbj5wD0DDCstrbhVDeHfeVHJRWZKpyC7iy1Ysd2a64.jpg",
                title: "iPhone 14e 256GB - Nguyên Seal - Chưa Active",
                price: "18.300.000 ₫",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/CWSfmWrX-mSocPaZsGsBgX8CFi4eg3-i_8DV1CoCpHE.jpg",
                title: "iPhone 14e 512GB - Nguyên Seal - Chưa Active",
                price: "Liên hệ 19006063",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/71lWHv_lqt0GOtSYX0x81fenNhAHNMUfKzqj6aVHZlM.jpg",
                title:
                  "Samsung Galaxy Z Flip 6 2024 128/256GB Hàng Chính Hãng VN - New - Nguyên Seal Box",
                price: "17.500.000 ₫",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/wDPMHQ1xwokLhhIDGT6spIc1KyZFZpbONlBa9fjmKSo.jpg",
                title:
                  "Samsung Galaxy Z Fold 6 2024 128/256GB Hàng Chính Hãng VN - New - Nguyên Seal Box",
                price: "30.800.000 ₫",
              },
            ].map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.img} alt={product.title} />
                <div>
                  <span className="promo">KHUYẾN MÃI</span>
                  <h2>{product.title}</h2>
                  <p className="price">{product.price}</p>
                  <p className="installment">Hỗ trợ trả góp 0%</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a href="#">
            <i className="fas fa-phone-alt"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-messenger"></i>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
