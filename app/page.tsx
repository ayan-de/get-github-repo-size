"use client";

import RepoInput from "./components/Repoinput";

export default function Home() {
  const handleRepoUrlSubmit = (url: string) => {
    console.log("Repo URL submitted:", url);
    // You can now parse the repo and fetch data
  };
  return (
    <main>
      <h1>Get github repo size</h1>
      <RepoInput onSubmit={handleRepoUrlSubmit} />
    </main>
  );
}
