"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const onclickbutton = () => {
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
      <div className="bg-gray-200 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-800">
            The Enigmatic Princess of Hope: Balochistan's Natural Marvel
          </h1>
        </div>
        <div className="flex justify-center mb-6">
          <Image
            src="/princess of hope.jpg"
            alt="Princess of Hope"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Journey to Pakistan's Balochistan province, and you'll encounter the
          striking landscape of Hingol National Park. Amidst its rugged terrain
          stands an awe-inspiring rock formation known as the Princess of Hope.
          This natural sculpture, named by Hollywood actress Angelina Jolie
          during her visit, resembles a poised woman looking out over the
          horizon.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
          <strong>Why Visit the Princess of Hope?</strong>
          <br />
          <strong>Stunning Landscapes:</strong> The contrast between the rocky
          desert and the Arabian Sea is truly breathtaking.
          <br />
          <strong>Cultural Significance:</strong> The formation stands as a
          testament to the region's geological history and cultural legends.
          <br />
          <strong>Adventure:</strong> Perfect for explorers and photographers
          seeking unique natural wonders.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
          <strong>Top Experiences at Hingol National Park:</strong>
          <br />
          <strong>Marvel at the Rock Formations:</strong> Besides the Princess
          of Hope, admire the Sphinx of Balochistan.
          <br />
          <strong>Wildlife Safari:</strong> Discover the diverse fauna,
          including ibex, chinkara, and various bird species.
          <br />
          <strong>Coastal Beauty:</strong> Enjoy the pristine beaches along the
          Makran Coastal Highway.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
          Embark on a journey to Pakistan's desert marvel, and discover the
          stories and secrets this iconic landmark holds. Whether you seek
          adventure, culture, or serene landscapes, the Princess of Hope offers
          experiences that will enrich your soul and ignite your wanderlust.
        </p>
      </div>
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
          onClick={onclickbutton}
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
