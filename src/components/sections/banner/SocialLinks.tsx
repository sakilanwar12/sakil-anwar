import { Github, Linkedin, Mail } from "lucide-react";
const SocialLinks = () => {
  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div className="flex gap-4 mt-8">
      {socials.map(({ icon: Icon, href, label }, index) => (
        <a
          key={label}
          href={href}
          className="p-3 rounded-full border border-gray-600 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
        </a>
      ))}
    </div>
  );
};
export default SocialLinks;