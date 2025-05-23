import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider uppercase">
            Front-End Women
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="space-y-32">
          {/* First Profile - Left Aligned */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/mildred.webp"
                alt="Mildred Mwinkom Naab"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Mildred Mwinkom Naab</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                Sarah is a passionate frontend developer with a background in
                graphic design. She excels at creating responsive interfaces
                with clean, semantic HTML and modern CSS techniques. Currently
                focused on mastering React and TypeScript, Sarah brings a unique
                perspective to every project she works on.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href=""
                  target="_blank"
                  aria-label="GitHub profile for Mildred Mwinkom Naab"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  aria-label="LinkedIn profile for Mildred Mwinkom Naab"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Second Profile - Right Aligned */}
          <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/mabel.webp"
                alt="Mabel Hackman"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Mabel Hackman</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in user experience design, Maya is
                developing her frontend skills to bring her designs to life. She
                has a keen eye for detail and is particularly interested in
                accessibility and inclusive design practices. Maya is currently
                exploring Next.js and Tailwind CSS.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/mabel-hackman"
                  aria-label="LinkedIn profile for Mabel Hackman"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href="https://github.com/Esihackman"
                  aria-label="Github profile for Mabel Hackman"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Third Profile - Left Aligned */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/cecilia.webp"
                alt="Cecilia Arthur"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Cecilia Arthur</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                I’m Cecilia Arthur, a front-end trainee at the Kumasi branch of
                AmaliTech, and currently the only lady in the training group
                here. So far, I’ve worked on several projects that have
                strengthened my foundation in HTML, CSS, JavaScript, Git, and
                testing with Jest. These include a Character Counter, Conference
                Ticket Generator, Smart Thermostat Debugging App, and a Habit
                Tracker App. Each one has helped me improve my coding skills,
                problem-solving, and collaboration. Being the only lady in
                Kumasi has been both challenging and motivating. It’s helped me
                build confidence and stay focused. Having a mentor who
                understands the value of diversity and growth would mean a lot
                to me. I’m currently working on improving my CSS layout,
                responsiveness, and I’m excited to learn TypeScript and Angular.
                Outside coding, I love cooking and co-create content with my
                teammates under the name “CodeChale” to share our learning
                journey. I’m committed, curious, and ready to grow. Thank you
                for considering me as a mentee, I would truly appreciate the
                opportunity to learn from you.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://github.com/ceedevgirl"
                  target="_blank"
                  aria-label="GitHub profile for Cecilia Arthur"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href="http://linkedin.com/in/ceciliaarthur347"
                  target="_blank"
                  aria-label="LinkedIn profile for Cecilia Arthur"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Fourth Profile - Right Aligned */}
          <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/fatima.webp"
                alt="Fatima"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Fatima Alhassan</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in user experience design, Maya is
                developing her frontend skills to bring her designs to life. She
                has a keen eye for detail and is particularly interested in
                accessibility and inclusive design practices. Maya is currently
                exploring Next.js and Tailwind CSS.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="http://www.linkedin.com/in/fatima-alhassan"
                  target="_blank"
                  aria-label="LinkedIn profile for Fatima Alhassan"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href="https://github.com/Avatar-J"
                  target="_blank"
                  aria-label="Github profile for Fatima Alhassan"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Fifth Profile - Right Aligned */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/ewurasi.webp"
                alt="Ewurasi Ayanful"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Ewurasi Ayanful</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                My name is Ewurasi Nyarkoa Ayanful, my specialization is
                frontend. I'm a recent graduate in Information Studies with a
                strong passion for software development, particularly in
                building front-end applications. I have a resilient mindset and
                don't give up easily when faced with challenges. I'm eager to
                grow as a front-end developer and contribute to meaningful,
                user-focused projects that create real impact. Below is an image
                of myself
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  aria-label="LinkedIn profile for Ewurasi Ayanful"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href="https://github.com/ewurasi-nyarkoa"
                  target="_blank"
                  aria-label="Github profile for Ewurasi Ayanful"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Eigth Profile - Left Aligned */}
          <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/hadijatu.webp"
                alt="Hadijatu"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-medium">Hadijatu Mohamadu</h2>
              <p className="text-gray-500">Frontend Engineer Trainee</p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in user experience design, Maya is
                developing her frontend skills to bring her designs to life. She
                has a keen eye for detail and is particularly interested in
                accessibility and inclusive design practices. Maya is currently
                exploring Next.js and Tailwind CSS.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href=""
                  target="_blank"
                  aria-label="GitHub profile for Hadijatu Mohamadu"
                >
                  <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  aria-label="LinkedIn profile for Hadijatu Mohamadu"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-12 px-4 border-t border-gray-100">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-black" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <svg
                className="w-5 h-5 text-gray-400 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
                className="w-5 h-5 text-gray-400 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            AmaliTech Women In Tech
          </p>
        </div>
      </footer>
    </div>
  );
}
