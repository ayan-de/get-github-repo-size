"use client";

type DisplaySizeProps = {
  sizeInKB: number | null;
};

export default function DisplaySize({ sizeInKB }: DisplaySizeProps) {
  if (sizeInKB === null) return null;

  const sizeInMB = (sizeInKB / 1024).toFixed(2);

  return (
    <div className="mt-6 text-center text-purple-700 font-semibold text-4xl px-50 py-50">
      Repo Size: {sizeInKB} KB ({sizeInMB} MB)
    </div>
  );
}
