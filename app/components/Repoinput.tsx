"use client";

import { useState } from "react";

type RepoInputProps = {
  onSubmit: (url: string) => void;
};

export default function RepoInput({ onSubmit }: RepoInputProps) {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim()) return;
    onSubmit(repoUrl.trim());
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg max-auto bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg"
    >
      <input
        type="text"
        placeholder="URL here https://github.com/ayan-de/get-github-repo-size"
        className="w-full border border-pink-300 text-purple-600 placeholder-purple-500 rounded-2xl px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-pink-400	focus:border-pink-400	bg-white/80	"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl px-6 py-3 font-semibold hover:brightness-110 transition-all shadow-md"
      >
        Get Repo Size
      </button>
    </form>
  );
}
