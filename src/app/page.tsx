import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center mx-auto text-gray-900">
      <Image
        src="/logo-joobly.svg"
        alt="Joobly Logo"
        className="-mt-20 z-50"
        width={500}
        height={300}
        priority
      />
      <div className="absolute top-0 flex flex-col xl:flex-row">
          <Image
            src="/job-seekers.svg"
            alt="Joobly Logo"
            className="z-0 opacity-15"
            width={1000}
          height={600}
            priority
          />
          <Image
            src="/job-posters.svg"
            alt="Joobly Logo"
            className="z-0 opacity-15"
            width={800}
            height={500}
            priority
          />
      </div>
        <h1 className="text-4xl font-bold italic z-50">Coming soon!</h1>
    </main>
  );
}
