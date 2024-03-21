import React from 'react';
import PropTypes from 'prop-types';

const ProductsTable =React.memo(({ products, onRowClick }) => {
  const renderStars = (rate) => {
    const starUrl = 'https://geelao-oss.oss-cn-hangzhou.aliyuncs.com/db/202203301749709.svg';
    const roundedRate = Math.round(rate);
    const stars = [];
    for (let i = 0; i < roundedRate; i++) {
      stars.push(<img key={i} src={starUrl} alt="star" style={{ width: '20px', height: '20px' }} />);
    }
    return stars;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map(item => (
          <tr key={item.id} onClick={() => onRowClick(item.id, item.title)}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td><img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} /></td>
            <td>{renderStars(item.rating.rate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default ProductsTable;
