import { FaGlobe, FaGithub, FaInstagram } from "react-icons/fa";

interface SocialMediaLinks {
  instagram?: string;
  github?: string;
}

interface CardProfileProps {
  profileImageUrl: string;
  name: string;
  role: string;
  websiteUrl?: string;
  description: string;
  socialMediaLinks: SocialMediaLinks;
}

export default function CardProfile({
  profileImageUrl,
  name,
  role,
  websiteUrl,
  description,
  socialMediaLinks,
}: CardProfileProps) {
  return (
    <div className="h-60 group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300  dark:bg-linear-to-br from-gray-950 via-green-950 to-gray-950 dark:shadow-gray-900/30 border-2 border-green-600">
      {/* Profile Image & Basic Info */}
      <div className="flex items-start gap-4">
        <img
          src={profileImageUrl}
          alt={name}
          className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-green-600 dark:text-green-400">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Website & Social Links */}
      <div className="mt-5 flex items-center justify-between">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
          >
            <FaGlobe className="h-4 w-4" />
            <span>Website</span>
          </a>
        )}

        <div className="flex gap-3">
          {socialMediaLinks.instagram && (
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-pink-600 dark:hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          )}
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Subtle decorative element */}
    </div>
  );
}
