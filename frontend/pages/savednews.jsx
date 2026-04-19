import React, { useState } from "react";

function SavedNews() {
  const [savedNews, setSavedNews] = useState([
    {
      id: 1,
      title: "Breaking News About Technology",
      source: "BBC News",
      time: "2:00 PM",
    },
    {
      id: 2,
      title: "Sports Championship Highlights",
      source: "FOX News",
      time: "4:30 PM",
    },
    {
      id: 3,
      title: "Finance and Business Growth Report",
      source: "CNN News",
      time: "6:15 PM",
    },
  ]);

  
  const handleRemove = (id) => {
    const updatedNews = savedNews.filter(
      (news) => news.id !== id
    );

    setSavedNews(updatedNews);
  };

  return (
    <div className="min-h-screen bg-[#f8f6fb] flex justify-center p-6">

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-lg p-10">

      
        <h1 className="text-3xl font-bold mb-8">
          Saved News
        </h1>

        
        <div className="space-y-6">

          {savedNews.map((news) => (
            <div
              key={news.id}
              className="border rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2">
                📰 {news.title}
              </h2>

              <p className="text-gray-500 mb-4">
                Source: {news.source} | Updated: {news.time}
              </p>

              <div className="flex gap-4">

                <button
                  className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700"
                >
                  Read More
                </button>

                <button
                  onClick={() => handleRemove(news.id)}
                  className="border border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-50"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default SavedNews;