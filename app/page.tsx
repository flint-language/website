import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Image
        src="/logo.png"
        alt="Logo"
        width={256}
        height={256}
        className="rounded-full mb-6"
        priority
      />
      <h1 className="text-4xl font-bold text-black dark:text-white text-center">
        🚧 Work in progress 🚧
      </h1>
    </main>
  );
}