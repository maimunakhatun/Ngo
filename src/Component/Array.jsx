<<<<<<< HEAD
import React from "react";
import {
    FaSeedling,
    FaUsers,
    FaLeaf,
    FaStore,
    FaCloud
} from "react-icons/fa";


const ArrayList = () => {
    const stats = [
        {
            icon: <FaSeedling />,
            number: "12,500+",
            title: "Meals Saved",
            description: "Good food, not waste."
        },
        {
            icon: <FaUsers />,
            number: "2,800+",
            title: "People Supported",
            description: "Stronger communities."
        },
        {
            icon: <FaLeaf />,
            number: "8.5 Tons",
            title: "Food Waste Reduced",
            description: "A cleaner, greener planet."
        },
        {
            icon: <FaStore />,
            number: "45+",
            title: "Partner Restaurants & Cafes",
            description: "Together we make a difference."
        },
        {
            icon: <FaCloud />,
            number: "18.2 Tons",
            title: "CO₂ Emissions Avoided",
            description: "Small steps, big impact."
        }
    ];
    return (
        <>
        <div className="container impct">
        <div className="stats-section">

            {stats.map((item, index) => (
                <div className="stat-item" key={index}>

                    <div className="stat-icon">
                        {item.icon}
                    </div>

                    <h2>{item.number}</h2>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                </div>
            ))}

        </div>
        </div>
        </>
    )
}


export default ArrayList
=======
import React from 'react'
import Productlist from './Product'

const Arraylist = () => {
  const Products = [
    { id: 1,
         img: '/id1.jpeg',
          name: 'Food is Donated',
           price: 'Restaurants, cafes, grocery stores donate safe, surplus food instead of throwing it away.' },
    { id: 2,
         img: '/id2.jpeg', 
         name: 'Food is Collected', 
         price: 'Our team collects the food at the right time and ensures it is safe.' },
    { id: 3, 
        img: '/id3.jpeg',
         name: 'Food is Sorted & Packed', 
         price: 'The food is sorted, checked for quality, and packed with care.' },
    { id: 4, 
        img: '/id4.jpeg', 
        name: 'Reaches Communities', 
        price: 'We partner with NGOs, community kitchens and volunteers.' },
    { id: 5, 
        img: '/id5.jpeg', 
        name: 'Creates a Bigger Impact',
         price: 'Less food waste, healthier communities, and a cleaner planet.' },
    {id:6, 
        img: '/id3.jpeg',
         name: 'Food is Sorted & Packed', 
         price: 'The food is sorted, checked for quality, and packed with care.' }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Productlist item={Products} />
        </div>
      </div>
    </div>
  )
}
export default Arraylist
>>>>>>> 95749df661b9b8b7477d17d6b170e3498854cba0
