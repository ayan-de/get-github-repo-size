"use client";

import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";

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
      className="flex flex-col gap-6 w-full max-w-xl max-auto bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl"
    >
      {" "}
      <div className="flex items-center border rounded-2xl bg-white/80 px-5 py-4 w-full">
        <LinkIcon className="text-purple-500 w-6 h-6 mr-3" />
        <input
          type="text"
          placeholder="https://github.com/ayan-de/get-github-repo-size"
          className="w-full text-lg bg-transparent text-purple-600 placeholder-purple-500 rounded-2xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400	focus:border-pink-400	"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl px-6 py-3 font-semibold hover:brightness-110 transition-all shadow-md mx-auto"
      >
        Get Repo Size
      </button>
    </form>
  );
}
