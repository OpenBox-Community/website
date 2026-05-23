// import { createFileRoute } from "@tanstack/react-router";

// export const Route = createFileRoute("/runway")({
//   head: () => ({
//     meta: [
//       { title: "Runway & Calendar — OpenBox" },
//       { name: "description", content: "Our product runway, upcoming features, and community calendar." },
//     ],
//   }),
//   component: Runway,
// });

// const RUNWAY_ITEMS = [
//   {
//     month: "July 2026",
//     status: "In Progress",
//     title: "OpenBox Mobile App (Beta)",
//     description: "Launch of the official OpenBox mobile app for iOS and Android, focusing on seamless community chat and event notifications.",
//     tags: ["Mobile", "Beta", "Community"],
//   },
//   {
//     month: "August 2026",
//     status: "Planned",
//     title: "Project Bounties Hub",
//     description: "A centralized platform for open-source project maintainers to post bounties, and for builders to earn rewards for contributing.",
//     tags: ["Open Source", "Bounties", "Platform"],
//   },
//   {
//     month: "September 2026",
//     status: "Planned",
//     title: "Annual Hackathon '26",
//     description: "Our biggest hackathon of the year. 48 hours to build a project from scratch and pitch it to industry judges.",
//     tags: ["Event", "Hackathon", "Global"],
//   },
//   {
//     month: "October 2026",
//     status: "Research",
//     title: "OpenBox AI Mentor",
//     description: "Integration of an AI-powered assistant designed specifically to help debug code, suggest architectural patterns, and mentor junior devs.",
//     tags: ["AI", "Mentorship", "Tooling"],
//   }
// ];

// function Runway() {
//   return (
//     <div className="page">
//       <header className="page-header">
//         <div className="container">
//           <div className="page-header__crumb fade-up">// RUNWAY</div>
//           <h1 className="display h1 page-header__title fade-up fade-up--1">BUILD.<br/> SHIP .</h1>
//           <p className="page-header__sub fade-up fade-up--2">
//             The roadmap and calendar for OpenBox. See what we are working on and what's coming next.
//           </p>
//         </div>
//       </header>

//       <section className="section">
//         <div className="container">
//           <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
//             {RUNWAY_ITEMS.map((item, index) => (
//               <article key={item.title} className="card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                 <div className="card__meta" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
//                   <span className="tag" style={{ background: item.status === "In Progress" ? "var(--green)" : "var(--border)", color: item.status === "In Progress" ? "#000" : "var(--text)" }}>
//                     {item.status}
//                   </span>
//                   <span className="label" style={{ fontSize: 16, fontWeight: 500, color: "var(--text)" }}>{item.month}</span>
//                 </div>
//                 <div>
//                   <h3 className="card__title" style={{ fontSize: 24 }}>{item.title}</h3>
//                   <p className="card__desc" style={{ marginTop: 8 }}>{item.description}</p>
//                 </div>
//                 <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
//                   {item.tags.map(tag => (
//                     <span key={tag} className="tag" style={{ background: "transparent", border: "1px solid var(--border)", fontSize: 12 }}>
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
