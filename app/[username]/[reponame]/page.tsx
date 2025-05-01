// app/[username]/[reponame]/page.tsx
// import { notFound } from "next/navigation";

export default async function RepoSizePage({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const { username, reponame } = params;

  //   const res = await fetch(
  //     `https://api.github.com/repos/${username}/${reponame}`,
  //     {
  //       next: { revalidate: 60 }, // cache this page for 60 seconds
  //       headers: {
  //         Accept: "application/vnd.github+json",
  //         // Optionally add GitHub token for higher rate limits
  //         // Authorization: `Bearer YOUR_GITHUB_TOKEN`
  //       },
  //     }
  //   );

  //   if (!res.ok) return notFound();

  //   const repo = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-pink-200 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-700 drop-shadow mb-4">
        📦 {username}/{reponame}
      </h1>
      <p className="text-2xl text-purple-800 font-semibold">
        {/* Repo Size: {repo.size} KB ({(repo.size / 1024).toFixed(2)} MB) */}
        Repo Size: 1024 KB ({(2000 / 1024).toFixed(2)} MB)
      </p>
    </main>
  );
}
