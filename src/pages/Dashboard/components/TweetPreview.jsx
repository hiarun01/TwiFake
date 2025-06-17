import {Button} from "@/components/ui/button";
import {
  BarChart3,
  Bookmark,
  DownloadIcon,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Verified,
} from "lucide-react";
import React from "react";

const TweetPreview = ({tweetData, setTweetData}) => {
  return (
    <div className="max-w-lg mx-auto flex flex-col items-center">
      <div className="w-full bg-white border border-gray-100 p-6 relative  transition">
        {/* Profile and Header */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={tweetData.profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-200 shadow"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                tweetData.name
              )}&background=1DA1F2&color=fff`;
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col ">
              <div className=" flex justify-items-start items-center gap-2">
                <span className="font-bold text-gray-900 cursor-pointer">
                  {tweetData.name}
                </span>
                {tweetData.verified && (
                  <Verified className="w-5 h-5 text-blue-500 fill-current" />
                )}
              </div>

              <span className="text-gray-500 text-base text-sm truncate">
                @{tweetData.username}
              </span>
            </div>
          </div>
          <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        {/* Tweet Text */}
        <div className="text-gray-900 text-[16px] leading-6 whitespace-pre-wrap mb-4 break-words">
          {tweetData.tweet}
        </div>
        {/* Timestamp and Views */}
        <div className="text-gray-500 text-sm pb-3 border-b border-gray-100">
          <span>
            {tweetData.time} · {tweetData.date}
          </span>
        </div>
        {/* Engagement Stats */}
        <div className="flex flex-wrap justify-between gap-4 py-4 border-b border-gray-100 text-sm">
          <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">{tweetData.comments}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
            <Repeat2 className="w-5 h-5" />
            <span className="font-semibold">{tweetData.retweets}</span>
          </div>

          <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">{tweetData.likes}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
            <BarChart3 className="w-5 h-5" />
            <span className="font-semibold">{tweetData.views}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
            <Bookmark className="w-5 h-5" />
            <span className="font-semibold">{tweetData.bookmarks}</span>
          </div>
        </div>
      </div>

      <Button className="mt-6 font-semibold py-5 px-5 rounded-lg items-center gap-2 shadow-sm transition">
        <DownloadIcon />
        Download
      </Button>
    </div>
  );
};

export default TweetPreview;
