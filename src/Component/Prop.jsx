import react from 'react'
 


const Props = ({ img, name, description }) => {
  return (
    <>
    <div className="prop-card">
      <img src={img} alt={name} />

      <h5>{name}</h5>

      <p>{description}</p>
    </div>
    </>
  )
}

export default Props
        
    
