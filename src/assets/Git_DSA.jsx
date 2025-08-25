import React, { useEffect, useState } from "react";

const Git_DSA = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [gfgError, setGfgError] = useState(null);

  useEffect(() => {
    // Fetch GitHub Data
    fetch("https://api.github.com/users/0001nsoni")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("GitHub API Error:", err));

    // Fetch LeetCode Data
    fetch("https://leetcode-stats-api.herokuapp.com/nsoni8005")
      .then((res) => res.json())
      .then((data) => setLeetcodeData(data))
      .catch((err) => console.error("LeetCode API Error:", err));

    // Fetch GFG Data using the provided endpoint
    fetch("https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=nsonii7v0")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalProblemsSolved !== undefined) {
          setGfgData(data);
        } else {
          setGfgError("Invalid GFG data format");
        }
      })
      .catch((err) => {
        console.error("GFG API Error:", err);
        setGfgError("Failed to fetch GFG data");
      });
  }, []);

  const totalSolved =
    (leetcodeData?.totalSolved || 0) +
    (gfgData?.totalProblemsSolved || 0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 px-6 bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 mb-12">
        GitHub & DSA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* GitHub Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            GitHub Overview
          </h2>
          {githubData ? (
            <ul className="space-y-2 text-gray-600">
              <li>⭐ <span className="font-bold">{githubData.public_repos}</span> Public Repos</li>
              <li>👨‍💻 <span className="font-bold">{githubData.followers}</span> Followers</li>
              <li>📌 <span className="font-bold">{githubData.following}</span> Following</li>
            </ul>
          ) : (
            <p>Loading GitHub data...</p>
          )}
        </div>

        {/* Language Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-md border flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Language Distribution
          </h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=0001nsoni&layout=compact"
            alt="GitHub Language Stats"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* DSA Progress (LeetCode + GFG) */}
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            DSA Progress
          </h2>
          
          {(leetcodeData || gfgData) ? (
            <>
              <p className="text-4xl font-bold text-green-500 mb-4">
                {totalSolved} Problems Solved
              </p>

              {/* LeetCode Stats */}
              {leetcodeData && (
                <div className="mb-6">
                  <h3 className="font-semibold text-purple-600 mb-2">LeetCode</h3>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-lg font-medium text-purple-800 mb-1">
                      Total: {leetcodeData.totalSolved}
                    </p>
                    <div className="flex justify-between text-gray-600">
                      <span className="text-green-600">{leetcodeData.easySolved} Easy</span>
                      <span className="text-yellow-600">{leetcodeData.mediumSolved} Medium</span>
                      <span className="text-red-600">{leetcodeData.hardSolved} Hard</span>
                    </div>
                  </div>
                </div>
              )}

              {/* GFG Stats */}
              <div>
                <h3 className="font-semibold text-green-600 mb-2">GeeksforGeeks</h3>
                
                {gfgData ? (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-lg font-medium text-green-800 mb-1">
                      Total: {gfgData.totalProblemsSolved}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>Basic: {gfgData.Basic || 0}</span>
                      <span>Easy: {gfgData.Easy || 0}</span>
                      <span>Medium: {gfgData.Medium || 0}</span>
                      <span>Hard: {gfgData.Hard || 0}</span>
                    </div>
                  </div>
                ) : gfgError ? (
                  <p className="text-red-500 text-sm">{gfgError}</p>
                ) : (
                  <p className="text-gray-600">Loading GFG data...</p>
                )}
              </div>
            </>
          ) : (
            <p>Loading DSA data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Git_DSA;