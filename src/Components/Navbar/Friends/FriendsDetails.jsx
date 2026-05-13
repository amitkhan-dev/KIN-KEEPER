import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();

  const expectedDetails = friends.find((friend) => friend.id == id);

  if (!expectedDetails) return <div className="p-10 text-center">Friend not found!</div>;

  const handleAction = (type) => {
  
    toast.success(`${type} with ${expectedDetails.name} added!`, {
      style: { background: '#2d4f43', color: '#fff' }
    });
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-4 md:p-10">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Profile & Actions */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-gray-100 ring-offset-2">
                <img src={expectedDetails.img} alt={expectedDetails.name} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#1a2b3c]">{expectedDetails.name}</h2>
            
            <div className="flex flex-col items-center gap-2 mt-3">
              <span className="px-4 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">
                {expectedDetails.status}
              </span>
              <span className="px-4 py-1 bg-green-100 text-[#2d4f43] text-[10px] font-bold rounded-full uppercase">
                {expectedDetails.tags}
              </span>
            </div>
            
            <p className="mt-6 text-gray-500 italic text-sm">"{expectedDetails.note}"</p>
            <p className="text-xs text-gray-400 mt-2 font-medium uppercase">Preferred: {expectedDetails.preferred}</p>
          </div>

          <div className="space-y-2">
            <button className="btn btn-block bg-white hover:bg-gray-50 text-[#1a2b3c] border-gray-100 normal-case shadow-sm">
              <span>🔔</span> Snooze 2 Weeks
            </button>
            <button className="btn btn-block bg-white hover:bg-gray-50 text-[#1a2b3c] border-gray-100 normal-case shadow-sm">
              <span>📦</span> Archive
            </button>
            <button className="btn btn-block bg-white hover:bg-red-50 text-red-500 border-gray-100 normal-case shadow-sm">
              <span>🗑️</span> Delete
            </button>
          </div>
        </div>

        {/* Right Column - Stats & Interaction */}
        <div className="lg:col-span-8 space-y-6">
          
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#1a2b3c]">{expectedDetails.daysSinceContact}</h3>
              <p className="text-gray-400 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#1a2b3c]">{expectedDetails.goalDays}</h3>
              <p className="text-gray-400 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-[#2d4f43]">{expectedDetails.nextDue}</h3>
              <p className="text-gray-400 text-sm mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[#2d4f43] text-lg">Relationship Goal</h4>
              <p className="text-gray-500 mt-2">Connect every <span className="font-bold text-black">{expectedDetails.goalDays} days</span></p>
            </div>
            <button className="btn btn-sm btn-ghost bg-gray-50 text-gray-500 px-4">Edit</button>
          </div>

        
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#2d4f43] text-lg mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => handleAction('Call')} 
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl mb-2">📞</span>
                <span className="font-medium">Call</span>
              </button>
              
              <button 
                onClick={() => handleAction('Text')} 
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl mb-2">💬</span>
                <span className="font-medium">Text</span>
              </button>
              
              <button 
                onClick={() => handleAction('Video')} 
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl mb-2">🎥</span>
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;