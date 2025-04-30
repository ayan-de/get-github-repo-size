"use client";

import RepoInput from "./components/Repoinput";

export default function Home() {
  const handleRepoUrlSubmit = (url: string) => {
    console.log("Repo URL submitted:", url);
    // You can now parse the repo and fetch data
  };
  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-pink-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 drop-shadow">
        Get Github repo size
      </h1>
      <RepoInput onSubmit={handleRepoUrlSubmit} />
    </main>
  );
}
