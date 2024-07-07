import React from 'react';
import './about.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function About() {
  const data = [
    { name: 'NORTH A', value: 412452 },
    { name: 'AFRICA', value: 317601 },
    { name: 'EUROPE', value: 367281 },
    { name: 'ASIA', value: 267318 },
    { name: 'ANTARCTICA', value: 212178 },
    { name: 'SOUTH A', value: 189133 },
  ];

  return (
    <section className='about'>
      <h1 className='heading'>About Us</h1>
      <div className="about-description">
        <div className="explanation">
          <h1>Griffins</h1>
          <h2>Furnitures</h2>
          <p>Griffins Furniture is a renowned furniture shop known for its premium quality and stylish furniture offerings. Located in Nairobi, Kenya, Griffins Furniture stands out for its wide range of products, including sofas, beds, tables, and home decor items that cater to diverse tastes and preferences. With a commitment to craftsmanship and customer satisfaction, Griffins Furniture has built a strong reputation for reliability, excellence in design, and attentive service. Whether furnishing a modern apartment or a classic home, Griffins Furniture is a go-to destination for customers seeking timeless pieces that blend functionality with aesthetic appeal.</p>
        </div>
        <div className="pie">
          <h3>Customers According to Location</h3>
          <div className="pie-content">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-text">
              <span>+110m buyers</span>
              <p> all over the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
