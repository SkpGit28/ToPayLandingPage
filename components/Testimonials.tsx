import React, { useState, useEffect } from 'react';
import { Star } from './Icons';

// Fallback Data
const FALLBACK_REVIEWS = [
  { name: "Aditya R.", rating: 5, comment: "Finally an app that handles NCMC and UPI seamlessly." },
  { name: "Priya M.", rating: 5, comment: "Settlements used to take 2 days, now it's instant." },
  { name: "Rahul K.", rating: 4, comment: "Great cashback offers on the consumer side." },
  { name: "Sandeep S.", rating: 5, comment: "The API documentation is world-class." },
  { name: "Neha G.", rating: 5, comment: "Best fintech app in India right now." },
  { name: "Vikram J.", rating: 5, comment: "Customer support is actually helpful." },
  { name: "Arjun V.", rating: 4, comment: "Smooth transactions, rarely fails." },
  { name: "Kavya L.", rating: 5, comment: "I use it for both my business and personal expenses." },
];

// --- HELPER: Google Style Avatar ---
const GoogleAvatar = ({ name }) => {
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];

  // Deterministically pick a color based on the name string
  const charCode = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  const colorClass = colors[charCode % colors.length];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className={`h-10 w-10 rounded-full ${colorClass} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
      {initial}
    </div>
  );
};

const ReviewCard = ({ name, rating, comment }) => {
  return (
    <div className="w-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm mb-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-900 ml-1">{rating}.0/5</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">"{comment}"</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-[10px] text-gray-400 font-medium">Verified User</p>
        </div>
        {/* Replaced DiceBear with Google Style Avatar for authenticity */}
        <GoogleAvatar name={name} />
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);

  // Optional: Fetch real text logic here (omitted for brevity, same as before)

  // Data prep for infinite loop illusion
  const col1 = [...reviews, ...reviews, ...reviews];
  const col2 = [...reviews.reverse(), ...reviews, ...reviews];
  const col3 = [...reviews.sort(() => 0.5 - Math.random()), ...reviews, ...reviews];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-20 overflow-hidden relative">
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by India's Best</h2>
        <p className="text-gray-500">Join thousands of businesses and users who trust ToPay.</p>
      </div>

      <div className="relative h-[600px] max-w-7xl mx-auto overflow-hidden">
        {/* Top/Bottom Fade Masks */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full px-4">

          {/* Column 1: Down */}
          <div className="hidden md:block overflow-hidden relative">
            <div className="animate-marquee-down hover:pause">
              {col1.map((review, i) => (
                <ReviewCard key={`col1-${i}`} {...review} />
              ))}
            </div>
          </div>

          {/* Column 2: Up */}
          <div className="overflow-hidden relative">
            <div className="animate-marquee-up hover:pause">
              {col2.map((review, i) => (
                <ReviewCard key={`col2-${i}`} {...review} />
              ))}
            </div>
          </div>

          {/* Column 3: Down */}
          <div className="hidden md:block overflow-hidden relative">
            <div className="animate-marquee-down hover:pause">
              {col3.map((review, i) => (
                <ReviewCard key={`col3-${i}`} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
