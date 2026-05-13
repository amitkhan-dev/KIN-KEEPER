import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
  const getStatusColor = (status) => {
  return status === 'Overdue' ? 'bg-red-500 text-white' 
      : status === 'Almost Due' ? 'bg-orange-400 text-white' 
      : status === 'On-Track' ? 'bg-[#2d4f43] text-white' 
      : 'bg-gray-200 text-gray-700';
};
  return (
    <Link to ={`/friendsDetails/ ${friend.id}`} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center border border-gray-100 hover:shadow-md transition-shadow">
              
      <div className="avatar mb-4">
        <div className="w-20 rounded-full ring ring-[#e5e7eb] ring-offset-base-100 ring-offset-2">
          <img src={friend.img} alt={friend.name} />
        </div>
      </div>
        <h3 className="text-lg font-bold text-[#1a2b3c]">{friend.name}</h3>
        <p className="text-xs text-gray-400 mb-4">{friend.time}</p>
      <div className="flex gap-2 mb-3">
        {friend.tags.map ((tag, index) => (
          <span key={index} className="px-3 py-1 bg-green-100 text-[#2d4f43] text-[10px] font-bold rounded-full uppercase tracking-wider">{tag}</span>
        ))}
      </div>
        {/* Dynamic Status Badge */}
        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(friend.status)}`}>{friend.status}</span>

    </Link>
  );
};

export default FriendCard;