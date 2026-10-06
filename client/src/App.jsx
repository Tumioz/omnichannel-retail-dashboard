// client/src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Omnichannel Retail Dashboard</h1>
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th>SKU</th>
            <th>Name</th>
            <th>Price (ZAR)</th>
            <th>Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{product.sku}</td>
              <td>{product.name}</td>
              <td>R {product.price}</td>
              <td>{product.in_stock} units</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;