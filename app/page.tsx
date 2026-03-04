import { profile } from "console";
import CardProfile from "./components/card-profile";
import Image from "next/image";
export default function Home() {
  const contributors = [
    {
      profileImageUrl: "/fizora.jpg",
      name: "Moch Choirul Faiz",
      role: "Mobile Developer",
      websiteUrl: "https://fizora.vercel.com",
      description:
        "Act as a Mobile Developer and Developing the Qur'an application for Android platforms using Flutter framework.",
      socialMediaLinks: {
        instagram: "https://instagram.com/fizoraa/",
        github: "https://github.com/Fizora",
      },
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/87654321?v=4",
      name: "Vladimir Vallanovick",
      role: "System Analyst",
      websiteUrl: "https://example.com",
      description:
        "Act as a System Analyst for analyzing and optimization verses in the Qur'an Prima application.",
      socialMediaLinks: {
        instagram: "https://instagram.com/vladimirvallanovick",
        github: "https://github.com/vladimirvallanovick",
      },
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "M. Yusuf Sarif fudin",
      role: "Mobile Developer",
      websiteUrl: "https://example.com",
      description:
        "Act as a Mobile Developer and Debugger for the Qur'an Prima application, ensuring smooth performance and resolving issues across Android platforms.",
      socialMediaLinks: {
        instagram: "https://instagram.com/yusuf_sarifudin",
        github: "https://github.com/yusuf_sarifudin",
      },
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/87654321?v=4",
      name: "M Rehan Dwi Saputra",
      role: "System Analyst",
      websiteUrl: "https://example.com",
      description:
        "Backend Developer specializing in Node.js and database management.",
      socialMediaLinks: {
        instagram: "https://instagram.com/rehan_dwi_saputra",
        github: "https://github.com/rehan_dwi_saputra",
      },
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "Ibnu Fatkhur Rizqi",
      role: "System Analyst ",
      websiteUrl: "https://example.com",
      description:
        "Backend Developer specializing in Node.js and database management.",
      socialMediaLinks: {
        instagram: "https://instagram.com/ibnu_fatkhur_rizky",
        github: "https://github.com/ibnu_fatkhur_rizky",
      },
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-5xl p-4 flex flex-col items-center">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center flex items-center gap-3 justify-center">
            <Image
              src="/logo-smk.png"
              alt="Quran Prima"
              width={50}
              height={50}
            ></Image>
            <span className="text-green-400">Qur'an Prima</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-200 text-center">
            Here you can know about the contributors of the Qur'an application.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {contributors.map((contributor, index) => (
            <CardProfile
              key={index}
              profileImageUrl={contributor.profileImageUrl}
              name={contributor.name}
              description={contributor.description}
              role={contributor.role}
              websiteUrl={contributor.websiteUrl}
              socialMediaLinks={contributor.socialMediaLinks}
            />
          ))}
        </div>
      </div>
    </>
  );
}
