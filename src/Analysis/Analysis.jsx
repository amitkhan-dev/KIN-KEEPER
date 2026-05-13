import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../Timeline/TimelineContext';

const Analysis = () => {
  const { activities } = useTimeline();

  const getChartData = () => {
    const counts = {
      Text: 0,
      Call: 0,
      Video: 0,
    };
    activities.forEach((activity) => {
      if (counts.hasOwnProperty(activity.type)) {
        counts[activity.type]++;
      }
    });

    return [
      { name: 'Text', value: counts.Text },
      { name: 'Call', value: counts.Call },
      { name: 'Video', value: counts.Video },
    ];
  };

  const chartData = getChartData();

  const isEmpty = chartData.every(item => item.value === 0);

  const COLORS = ['#8b5cf6', '#1e3a34', '#10b981'];

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm w-full max-w-lg mx-auto my-10">
      <h3 className="text-xl font-bold text-[#1a2b3c] mb-6">Friendship Analytics</h3>
      <p className="font-medium text-[16px] mb-4">Total Interactions: {activities.length}</p>

      {/* Chart Container */}
      <div className="h-[300px] w-full">
        {isEmpty ? (
          <div className="h-full flex items-center justify-center text-gray-400 italic border-2 border-dashed border-gray-100 rounded-xl">
            No interactions recorded yet
          </div>) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={8}
                dataKey="value"
                animationDuration={800}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Analysis;