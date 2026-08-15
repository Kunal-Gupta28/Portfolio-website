import React, { memo } from "react";
import { contactInfo, socialLinks } from "../../data/contactData";

function ContactInfo() {
  return (
    <div className="
      h-full
      rounded-2xl
      border
      border-white/12
      bg-gradient-to-b
      from-white/6
      to-white/2
      p-5
      md:p-8
      backdrop-blur-md
    ">
      {/* Heading */}
      <h3 className="mb-2 text-xl md:text-2xl font-semibold text-white">
        Get in Touch
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm md:text-lg text-white/65 leading-relaxed">
        Feel free to reach out for opportunities, collaborations, or just a
        friendly hello.
      </p>

      {/* Contact Info */}
      <div className="space-y-3">
        {contactInfo.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 text-white/70 text-sm md:text-base">
            <span className="text-[#fa5a29] flex-shrink-0">
              <Icon />
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-6 flex items-center gap-4">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={label}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/60
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-[#fa5a29]/40
              hover:bg-[#fa5a29]/10
              hover:text-[#fa5a29]
            "
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default memo(ContactInfo);