import React, { use } from 'react';
import { Link } from 'react-router-dom';

const friendsPromis = fetch("/data.json").then((res) => res.json());


const Friends = () => {

  const friends = use(friendsPromis);


  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1a2b3c] mb-8">Your Friends</h2>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link Link to ={`${friend.id}`} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center border border-gray-100 hover:shadow-md transition-shadow">
              
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
        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${(friend.status)}`}>{friend.status}</span>

    </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;