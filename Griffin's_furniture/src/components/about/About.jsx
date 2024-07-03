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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus, provident nobis modi ipsam nemo quos inventore ab, consequatur impedit eligendi tempora ipsum. Nemo neque impedit laboriosam ipsum dignissimos quam porro? Consectetur placeat, aperiam suscipit voluptatum doloremque commodi odio rem veritatis officia corporis autem laboriosam tempora iste. Et, magnam dolorem.</p>
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
              <span>+110m</span>
              <p>customers all over the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
