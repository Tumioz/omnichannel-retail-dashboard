import { useState, useEffect } from 'react';

// Componentizing the row shows strong React fundamentals
function ProductRow({ product, onRefresh }) {
  const [newPrice, setNewPrice] = useState(product.price);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch(`http://localhost:5000/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: parseFloat(newPrice) })
      });
      
      if (response.ok) {
        onRefresh(); // Refresh the parent table data
        alert('Price updated successfully!');
      }
    } catch (error) {
      console.error("Failed to update price", error);
      alert('Failed to update price.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <tr style={{ borderBottom: '1px solid #ccc' }}>
      <td style={{ padding: '10px 0' }}>{product.sku}</td>
      <td>{product.name}</td>
      <td>
        R <input 
            type="number" 
            value={newPrice} 
            onChange={(e) => setNewPrice(e.target.value)} 
            style={{ width: '80px', marginRight: '10px', padding: '5px' }}
          />
      </td>
      <td>{product.in_stock} units</td>
      <td>
         <button 
           onClick={handleUpdate} 
           disabled={isUpdating}
           style={{ padding: '5px 15px', cursor: 'pointer' }}
         >
           {isUpdating ? 'Saving...' : 'Update'}
         </button>
      </td>
    </tr>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchProducts(); // Load data on first render
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Omnichannel Retail Dashboard</h1>
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ paddingBottom: '10px' }}>SKU</th>
            <th>Name</th>
            <th>Price (ZAR)</th>
            <th>Stock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow 
              key={product.id} 
              product={product} 
              onRefresh={fetchProducts} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;