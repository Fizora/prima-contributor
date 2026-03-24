// components/card-profile.tsx
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
    <div className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Profile Image & Basic Info */}
      <div className="flex items-start gap-4">
        <div className="overflow-hidden rounded-full ring-2 ring-gray-100 transition-transform duration-300 group-hover:scale-105">
          <img
            src={profileImageUrl}
            alt={name}
            className="h-16 w-16 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-black">
            {name}
          </h3>
          <p className="text-sm text-gray-600 transition-colors group-hover:text-gray-800">
            {role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
        {description}
      </p>

      {/* Website & Social Links */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-500 transition-all hover:scale-105 hover:text-black"
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
              className="text-gray-400 transition-all hover:scale-110 hover:text-black"
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
              className="text-gray-400 transition-all hover:scale-110 hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
