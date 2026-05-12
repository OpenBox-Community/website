export const socials = [
  { name: "Discord", handle: "discord.gg/openbox", url: "https://discord.gg/openbox" },
  { name: "Instagram", handle: "@openboxcomm", url: "https://instagram.com/openboxcomm" },
  { name: "YouTube", handle: "@openboxcomm", url: "https://youtube.com/@openboxcomm" },
  { name: "X", handle: "@openboxcomm", url: "https://x.com/openboxcomm" },
  { name: "LinkedIn", handle: "/company/openbox", url: "https://linkedin.com/company/openbox" },
  { name: "Patreon", handle: "/openbox", url: "https://patreon.com/openbox" },
  { name: "GitHub", handle: "/openboxcomm", url: "https://github.com/openboxcomm" },
  { name: "WhatsApp", handle: "channel/openbox", url: "https://whatsapp.com/channel/openbox" },
] as const;

export const tiers = [
  {
    name: "Kernel",
    price: 1,
    perks: ["Supporter badge", "Early announcements", "#kernel-lounge access"],
  },
  {
    name: "Compiler",
    price: 2,
    perks: ["Everything in Kernel", "Resources channel", "Monthly shoutout"],
  },
  {
    name: "Architect",
    price: 4,
    perks: [
      "Everything in Compiler",
      "Voting rights",
      "Admin feedback channel",
      "Early event access",
      "Custom role color",
    ],
    featured: true,
  },
  {
    name: "Founder",
    price: 8,
    perks: [
      "Everything in Architect",
      "Priority staff recruitment",
      "Private core team channel",
      "Founder badge",
    ],
  },
] as const;
