import React from "react";
import {
    FaLeaf,
    FaUsers,
    FaGlobeAmericas,
    FaHeart
} from "react-icons/fa";

const Benefits = () => {

    const benefits = [
        {
            icon: <FaLeaf />,
            text: "Less food waste"
        },
        {
            icon: <FaUsers />,
            text: "Healthier communities"
        },
        {
            icon: <FaGlobeAmericas />,
            text: "A cleaner planet"
        },
        {
            icon: <FaHeart />,
            text: "A more food secure future"
        }
    ];

    return (
        <div className="benefits-section">

            {benefits.map((item, index) => (
                <div className="benefit-item" key={index}>

                    <div className="benefit-icon">
                        {item.icon}
                    </div>

                    <p>{item.text}</p>

                </div>
            ))}

        </div>
    );
};

export default Benefits;