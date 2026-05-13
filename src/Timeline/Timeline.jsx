import React, { useState } from 'react';
import { useTimeline } from './TimelineContext';

const Timeline = () => {
  const { activities } = useTimeline();
  const [filterType, setFilterType] = useState('All');

  
  const sortedActivities = [...activities].sort((a, b) => {
    if (filterType === 'All') return 0;
    if (a.type === filterType && b.type !== filterType) return -1;
    if (a.type !== filterType && b.type === filterType) return 1; 
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1a2b3c] mb-6">Timeline</h2>
          <select 
            className="select select-bordered w-full max-w-xs bg-white text-gray-500 font-normal focus:outline-none focus:border-gray-300"
            onChange={(e) => setFilterType(e.target.value)}
            defaultValue="All">
            <option value="All">Filter Timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-3">
          {sortedActivities.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center border border-dashed border-gray-300">
              <p className="text-gray-500">No activities recorded yet.</p>
            </div> 
            ) : 
            (sortedActivities.map((item) => (
              <div 
                key={item.id} 
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${item.type === filterType ? "bg-green-50 border-green-200 ring-1 ring-green-100": "bg-white border-gray-100"
                }`}>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-2xl">{item.icon}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1a2b3c">
                    {item.type} <span className="font-normal text-gray-400 ml-1 text-base">with {item.person}</span>
                  </h4>
                  <p className="text-sm text-gray-400 font-medium">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;