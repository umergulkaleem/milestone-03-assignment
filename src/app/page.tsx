import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 p-4 ">
      <h1 className="text-3xl font-bold text-center text-indigo-800 my-4">
        Embark on Epic Adventures: From the Iconic Peaks of Mount Fuji to the
        Enigmatic Desert Marvels of Balochistan
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Dive into a world of wonder and discovery. Whether youre captivated by
        Japans majestic Mount Fuji or intrigued by the Princess of Hope in
        Balochistan, our travel blog guides you through iconic landmarks,
        thrilling adventures, and breathtaking landscapes. Unearth the stories,
        secrets, and serene beauty that these destinations hold. Your journey of
        a lifetime starts here!
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center mb-8">
        <Link href="/post1">
          <div className="mb-4 md:mb-0">
            <Image
              src="/mountfuji.jpg"
              alt="Mount Fuji"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2 className="text-xl font-semibold text-center text-indigo-600 mt-4">
              Mount Fuji
            </h2>
            <p className="text-center text-gray-600">
              The Majestic Mount Fuji: Japans Iconic Peak
            </p>
          </div>
        </Link>
        <Link href="/post2">
          <div className="mb-4 md:mb-0">
            <Image
              src="/princess of hope.jpg"
              alt="Princess of Hope"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2 className="text-xl font-semibold text-center text-indigo-600 mt-4">
              Princess of Hope
            </h2>
            <p className="text-center text-gray-600">
              The Enigmatic Princess of Hope: Balochistans Natural Marvel
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
