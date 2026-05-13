import React, { use } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

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
            <FriendCard friend={friend} key={friend.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;