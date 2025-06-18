import React, {useRef, useState} from "react";
import {toPng} from "html-to-image";
import TweetPreview from "./components/TweetPreview";
import TweetSetup from "./components/TweetSetup";

const Dashboard = () => {
  const tweetRef = useRef(null);
  const [tweetData, setTweetData] = useState({
    name: "Name",
    username: "Username",
    tweet:
      "Just discovered this amazing fake tweet generator! Perfect for my design mockups 🚀",
    time: "2:04 PM",
    date: "Dec 15, 2024",
    comments: "12",
    retweets: "5",
    likes: "45",
    bookmarks: "4",
    views: "1.2k",
    verified: false,
    profileImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  const handleInputChange = (field, value) => {
    setTweetData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDownload = async () => {
    if (tweetRef.current) {
      try {
        const dataUrl = await toPng(tweetRef.current, {cacheBust: true});
        const link = document.createElement("a");
        link.download = "tweet.png";
        link.href = dataUrl;
        link.click();
      } catch (err) {
        alert(err, "Failed to download image.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-10">
      <div className="mx-auto px-4 flex flex-col ">
        {/* tweet preview */}
        <div className="max-w-7xl mx-auto w-full lg:py-12 py-8 rounded-2xl shadow-2xs bg-white ">
          <TweetPreview
            tweetData={tweetData}
            setTweetData={setTweetData}
            tweetRef={tweetRef}
            handleDownload={handleDownload}
          />
        </div>
        {/* Tweet Setup */}
        <div className="max-w-7xl mx-auto w-full lg:py-12 py-8 ">
          <TweetSetup
            tweetData={tweetData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
