// app/page.tsx
import CardProfile from "./components/card-profile";
import Image from "next/image";

export default function Home() {
  const contributors = [
    {
      profileImageUrl: "/fizora.jpg",
      name: "Moch Choirul Faiz",
      role: "Pengembang Mobile",
      websiteUrl: "https://fizora.vercel.app",
      description:
        "Berperan sebagai Pengembang Mobile dan mengembangkan aplikasi Qur'an untuk platform Android menggunakan kerangka kerja Flutter.",
      socialMediaLinks: {
        instagram: "https://instagram.com/fizoraa/",
        github: "https://github.com/Fizora",
      },
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "Vladimir Vallanovick",
      role: "Analis Sistem",
      websiteUrl: "",
      description:
        "Berperan sebagai Analis Sistem untuk menganalisis dan mengoptimalkan ayat-ayat dalam aplikasi Qur'an Prima.",
      socialMediaLinks: {
        instagram: "https://www.instagram.com/vla_vallan/",
        github: "https://github.com/12-vallan-pplg",
      },
    },
    {
      profileImageUrl: "/yusuf.webp",
      name: "M. Yusuf Sarif fudin",
      role: "Pengembang Mobile",
      websiteUrl: "https://yusufsarifudin.my.id",
      description:
        "Berperan sebagai Pengembang Mobile dan Debugger untuk aplikasi Qur'an Prima, memastikan kinerja lancar dan menyelesaikan masalah di berbagai platform Android.",
      socialMediaLinks: {
        instagram: "https://instagram.com/",
        github: "https://github.com/yusuf_sarifudin",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold md:text-4xl">
            <Image
              src="/logo-smk.png"
              alt="Quran Prima"
              width={50}
              height={50}
              className="transition-transform hover:scale-110"
            />
            <span className="text-gray-900">Qur&apos;an Prima</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Kenali para kontributor yang telah membangun aplikasi Qur&apos;an
            Prima.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
