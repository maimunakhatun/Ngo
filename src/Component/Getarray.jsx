import React from 'react'
import Getproduct from './Getproduct'

const Getarray = () => {
  const GetProducts = [
    { 
      id: 1, 
      img: 'bowl', 
      name: 'Donate Food', 
      price: 'Share surplus food from your home, business or events. Help us feed those in need.',
      bg: '#e9f5e9',
      btn: '#1a7a2e'
    },
    { 
      id: 2, 
      img: 'volunteer', 
      name: 'Volunteer', 
      price: 'Give your time and skills. Join our team and be a part of real change.',
      bg: '#fff1e6',
      btn: '#e67e22'
    },
    { 
      id: 3, 
      img: 'partner', 
      name: 'Partner With Us', 
      price: 'We collaborate with individuals, organizations and businesses to expand our impact.',
      bg: '#e8f0fe',
      btn: '#145a8a'
    },
    { 
      id: 4, 
      img: 'spread', 
      name: 'Spread the Word', 
      price: 'Follow us, share our mission and help us reach more people.',
      bg: '#f9e8ff',
      btn: '#7b2d8b'
    }
  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Getproduct item={GetProducts} />
        </div>
      </div>
    </div>
  )
}
export default Getarray