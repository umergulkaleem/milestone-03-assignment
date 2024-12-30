"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-gray-200 p-6">
      <Link href="/">
        <h1 className="ml-5 text-blue-600 underline">
          Click Here To Back Home
        </h1>
      </Link>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-800">
          The Majestic Mount Fuji: Japan's Iconic Peak
        </h1>
      </div>
      <div className="flex justify-center mb-6">
        <Image
          src="/mountfuji.jpg"
          alt="Mount Fuji"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
        Mount Fuji, or Fuji-san as it's reverently called in Japan, is more than
        just a mountain—it's a cultural and spiritual symbol that has inspired
        art, poetry, and pilgrimage for centuries. Standing at 3,776 meters,
        Mount Fuji is Japan's highest peak and an active stratovolcano that last
        erupted in 1707.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
        <strong>Why Visit Mount Fuji?</strong>
        <br />
        <strong>Natural Beauty:</strong> The iconic snow-capped peak, visible
        from Tokyo on clear days, offers unparalleled beauty, especially during
        sunrise and sunset.
        <br />
        <strong>Cultural Significance:</strong> It is a UNESCO World Heritage
        Site and a sacred site for Shintoism and Buddhism.
        <br />
        <strong>Adventure & Leisure:</strong> Whether you're an avid hiker ready
        to conquer the summit or a leisure traveler wanting to explore the
        surrounding lakes and hot springs, Mount Fuji caters to all.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
        <strong>Top Experiences at Mount Fuji:</strong>
        <br />
        <strong>Climb the Summit:</strong> Embark on the climbing season from
        July to September for an unforgettable adventure.
        <br />
        <strong>Visit the Fuji Five Lakes:</strong> Enjoy water activities,
        camping, and scenic views.
        <br />
        <strong>Explore the Aokigahara Forest:</strong> Also known as the Sea of
        Trees, this forest offers fascinating caves and serene hikes.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
        Embark on a journey to Japan's revered peak, and discover the stories
        and secrets this iconic landmark holds. Whether you seek adventure,
        culture, or serene landscapes, Mount Fuji offers experiences that will
        enrich your soul and ignite your wanderlust.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-800">Comments</h2>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 mt-4 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Add Comment
        </button>
        <ul className="mt-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 border-b">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
