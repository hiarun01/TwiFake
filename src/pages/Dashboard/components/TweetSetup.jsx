import {Input} from "@/components/ui/input";
import React from "react";

const TweetSetup = ({tweetData, handleInputChange}) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xs p-8 border border-gray-100 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-black mb-2 lg:text-left text-center">
        Customize Tweet
      </h2>
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={tweetData.profileImage}
          alt="Profile preview"
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              tweetData.name
            )}&background=1DA1F2&color=fff`;
          }}
        />
        <div className="flex-1 flex flex-col gap-2">
          <Input
            type="text"
            value={tweetData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="p-2 rounded-md border border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 "
            placeholder="Display Name"
          />
          <Input
            type="text"
            value={tweetData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className="p-2 rounded-md text-gray-900 text-sm"
            placeholder="Username"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1 text-gray-500">
          Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                handleInputChange("profileImage", event.target.result);
              };
              reader.readAsDataURL(file);
            }
          }}
          className="w-full p-2 rounded-md border border-gray-200 text-gray-900 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors text-sm"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="verified"
          checked={tweetData.verified}
          onChange={(e) => handleInputChange("verified", e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-400 border-gray-300"
        />
        <label
          htmlFor="verified"
          className="text-sm font-medium text-gray-700 flex items-center gap-1"
        >
          Verified Badge
        </label>
      </div>
      {/* Tweet Content */}
      <div>
        <label className="block text-xs font-medium mb-1 text-gray-500">
          Tweet Content
        </label>
        <textarea
          value={tweetData.tweet}
          onChange={(e) => handleInputChange("tweet", e.target.value)}
          rows={3}
          maxLength={280}
          className="w-full p-3 rounded-md border border-gray-200 text-gray-900 resize-none"
          placeholder="What's happening?"
        />
        <div
          className={`text-right text-xs mt-1 ${
            tweetData.tweet.length > 280 ? "text-red-500" : "text-gray-400"
          }`}
        >
          {tweetData.tweet.length}/280
        </div>
      </div>
      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Time
          </label>
          <Input
            type="text"
            value={tweetData.time}
            onChange={(e) => handleInputChange("time", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.time}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Date
          </label>
          <Input
            type="text"
            value={tweetData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.date}
          />
        </div>
      </div>
      {/* Engagement Stats */}
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Comments
          </label>
          <Input
            type="text"
            value={tweetData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.comments}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Retweets
          </label>
          <Input
            type="text"
            value={tweetData.retweets}
            onChange={(e) => handleInputChange("retweets", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.retweets}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Likes
          </label>
          <Input
            type="text"
            value={tweetData.likes}
            onChange={(e) => handleInputChange("likes", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.likes}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Views
          </label>
          <Input
            type="text"
            value={tweetData.views}
            onChange={(e) => handleInputChange("views", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.views}
          />
        </div>
        <div className="w-full">
          <label className="block text-xs font-medium mb-1 text-gray-500">
            Bookmarks
          </label>
          <Input
            type="text"
            value={tweetData.bookmarks}
            onChange={(e) => handleInputChange("bookmarks", e.target.value)}
            className="w-full p-2 rounded-md text-gray-900"
            placeholder={tweetData.bookmarks}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetSetup;
