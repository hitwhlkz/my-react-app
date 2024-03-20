import React from 'react';
import ProductsTable from './components/ProductsTable';
import productsData from './data/products'; // 导入产品数据

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      clickedRow: null,
    };
  }

  handleRowClick = (id, title) => {
    console.log(`You've clicked ${id} - ${title}`);
    this.setState({ clickedRow: id });
  };

  render() {
    const { products, clickedRow } = this.state;
    return (
      <div>
        <h1>Product Table</h1>
        <ProductsTable products={products} onRowClick={this.handleRowClick} />
        {clickedRow && <p>You clicked row with ID: {clickedRow}</p>}
      </div>
    );
  }
}

export default App;