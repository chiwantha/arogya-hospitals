import Image from "next/image";

export const metadata = {
  title: "Arogya Hospitals | Coming Soon",
  description:
    "Arogya Hospitals Pvt Ltd site is under maintenance. New look coming soon!",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-white text-gray-700 px-6 md:px-0">
      {/* Logo with subtle animation */}
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="Arogya Hospitals Logo"
          width={200}
          height={200}
          className="rounded-xl p-6 shadow-lg"
        />
      </div>

      {/* Main message */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-blue-800">
        Site Under Maintenance
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center max-w-xl">
        We are working on a new look for our website. Stay tuned — something
        great is coming soon!
      </p>

      {/* Optional contact info */}
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-600">
        For inquiries, contact:{" "}
        <span className="font-semibold text-blue-700">
          info@arogyahospitals.lk
        </span>
      </p>

      {/* Animated dots at the bottom */}
      <div className="flex space-x-2 mt-10">
        <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></span>
        <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></span>
      </div>
    </div>
  );
}
