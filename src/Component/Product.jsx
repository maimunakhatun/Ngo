import React from 'react'


const Productlist = ({ item }) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-center">
        {item.map((products) => (
          <div key={products.id} className="col-lg-2 col-md-4 col-sm-12 text-center mb-4">
            <div className="product-card">
              <img src={products.img} alt={products.name} />
              <div className="id-circle">{products.id}</div>
            </div>
            <h5 className="product-name">{products.name}</h5>
            <p className="product-price">{products.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Productlist