import React from 'react'
import { FaBowlRice, FaPeopleGroup, FaHandshake, FaBullhorn } from "react-icons/fa6"

const Getproduct = ({ item }) => {

  const getIcon = (type) => {
    if(type === 'bowl') return <FaBowlRice />;
    if(type === 'volunteer') return <FaPeopleGroup />;
    if(type === 'partner') return <FaHandshake />;
    if(type === 'spread') return <FaBullhorn />;
  }

  return (
    <div className="container-fluid product-wrapper">
      <div className="row justify-content-center">
        {item.map((products) => (
          <div key={products.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div 
              className="product-card-main get-card-height"
              style={{ background: products.bg }}
            >
              <div 
                className="product-img-box get-icon-bg"
                style={{ background: products.btn }}
              >
                <span className="get-icon">{getIcon(products.img)}</span>
              </div>

              <h5 className="product-title">{products.name}</h5>
              <p className="product-desc">{products.price}</p>

              <div 
                className="product-arrow"
                style={{ background: products.btn }}
              >
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Getproduct