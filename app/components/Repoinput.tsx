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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Paste Github repo URL here https://github.com/ayan-de/get-github-repo-size"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button type="submit">Get Repo Size</button>
    </form>
  );
}
