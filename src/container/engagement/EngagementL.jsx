import Image from 'next/image';
import Link from 'next/link';
import socialmedia from './socialmedia';

export default function EngagementL() {
  return (
    <section className="card-main bg-onPrimary md:col-span-2 lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8 h-fill">
      <h2 className="engagement__text text-primary">Proudly built in Public</h2>
      <h3 className="engagament__text-secondary sm:mx-16 mx-4">
        Follow our journey building Kudoku in public. We regularly share progress, successes and
        failures so you can learn with us!
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-y-10 md:gap-y-2 gap-y-6 md:gap-x-8 gap-x-6 justify-items-center sm:mt-16 mt-10">
        {socialmedia.map((item, index) => {
          return (
            <Link href={item.link} key={index} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <button
                  key={index}
                  className="cursor-pointer flex items-center w-fit h-fit px-2 py-1 rounded-lg shadow-md hover:bg-primaryContainer"
                >
                  <Image src={item.imgSrc} width={40} layout="fixed" alt={item.alt} key={index} />
                  <p className="ml-2" key={index}>
                    {item.name}
                  </p>
                </button>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
