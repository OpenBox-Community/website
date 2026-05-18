export const socials = [
  { name: "Discord", handle: "discord.gg/openbox", url: "https://discord.gg/nE2pyegR5y" },
  { name: "Instagram", handle: "@openboxcomm", url: "https://instagram.com/openboxcomm" },
  { name: "YouTube", handle: "@openboxcomm", url: "https://youtube.com/@openboxcomm" },
  { name: "X", handle: "@openboxcomm", url: "https://x.com/openboxcomm" },
  // { name: "LinkedIn", handle: "/company/openbox", url: "https://linkedin.com/company/openbox" },
  { name: "Patreon", handle: "/openbox", url: "https://patreon.com/openbox" },
  { name: "GitHub", handle: "/openboxcomm", url: "https://github.com/openboxcomm" },
  // { name: "WhatsApp", handle: "channel/openbox", url: "https://whatsapp.com/channel/openbox" },
] as const;

export const tiers = [
  {
    name: "Kernel",
    price: 1,
    perks: ["Supporter role badge", "Early event announcements", ],
  },
  {
    name: "Compiler",
    price: 2,
    perks: ["Supporter role badge", "Early event announcements", "Members only behind the scenes", "Monthly shoutout"],
  },
  {
    name: "Relay",
    price: 4,
    perks: [
     "Supporter role badge", "Early event announcements", "Members only behind the scenes", "Monthly shoutout",
      "Voting rights on community decisions",
      "Direct feedback channel with admins",
      "Early access to OpenBox events",
      "Discount on next members",
    ],
    featured: true,
  },
  {
    name: "Founder",
    price: 8,
    perks: ["Supporter role badge", "Early event announcements", , "Members only behind the scenes", "Monthly shoutout",
"Voting rights on community decisions",
      "Direct feedback channel with admins",
      "Early access to OpenBox events",
      "Discount on next members",      "Priority consideration for staff recruitment",
      "Direct line to core team via private channel",
      "Name in OpenBox credits / about page",
    ],
  },
] as const;
