import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function Pie (){
const data = [
  { name: 'NORTH A', value: 400 },
  { name: 'AFRICA', value: 300 },
  { name: 'EUROPE', value: 300 },
  { name: 'ASIA', value: 200 },
  { name: 'ANTANTICA', value: 278 },
  { name: 'SOUTH A', value: 189 },
];

  return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
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
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
export default Pie;