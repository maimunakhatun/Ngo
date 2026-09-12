import React from 'react'

const Productlist = ({ item }) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {item.map((products) => (
          <div key={products.id} className="col-lg-2 col-md-4 col-sm-12 text-center mb-4">
            <div className="product-card">
              <div style={{background:'#fff', borderRadius:'30px', padding:'10px', height:'130px'}}>
                <img src={products.img} alt={products.name} height={'100%'} width={'100%'} style={{objectFit:'contain'}} />
              </div>
              <div style={{background:'#0a5c26', color:'white', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'15px auto'}}>{products.id}</div>
              <h5 className="text-center" style={{fontSize:'15px'}}>{products.name}</h5>
              <p className="text-center" style={{fontSize:'12px', color:'#666'}}>{products.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Productlist