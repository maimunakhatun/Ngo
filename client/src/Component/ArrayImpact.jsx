import React from "react";
import {
  FaSeedling,
  FaUsers,
  FaLeaf,
  FaStore,
  FaCloud
} from "react-icons/fa";

const ImpactArray = () => {
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
  );
};

export default ImpactArray;