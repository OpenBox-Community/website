import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OpenBox" },
      { name: "description", content: "Who we are and what OpenBox is building toward." },
      { property: "og:title", content: "About — OpenBox" },
      { property: "og:description", content: "Who we are and what OpenBox is building toward." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Core Team", role: "Founders" },
  { name: "Maintainers", role: "Community Ops" },
  { name: "Contributors", role: "Builders" },
];

const values = [
  { num: "01", title: "Open", desc: "Public by default. Conversations, decisions, and code." },
  { num: "02", title: "Builder-first", desc: "If you're shipping, you belong here. Tools over titles." },
  { num: "03", title: "No gatekeeping", desc: "Beginners welcome. Questions welcome. Bad code welcome." },
  { num: "04", title: "Community-driven", desc: "Owned by the people who show up. Not a brand." },
];

function About() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <div className="page-header__crumb fade-up">// ABOUT</div>
          <h1 className="display h1 page-header__title fade-up fade-up--1">A SPACE<br/>FOR BUILDERS.</h1>
          <p className="page-header__sub fade-up fade-up--2">
            OpenBox is a global community for developers, engineers, and creators in tech.
            We're building the place we always wanted to find — open, raw, technical, and built around shipping work.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="section__num">// 01 — VISION</div>
              <h2 className="display h2" style={{ marginTop: 12 }}>WHAT WE'RE BUILDING.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p style={{ fontSize: 16, color: "var(--text)" }}>
              A dedicated space for builders in tech — without the noise of generic dev forums or the gatekeeping of closed networks.
              Channels for shipping, learning, hiring, and meeting other people who actually write code.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted)" }}>
              Most communities optimize for engagement metrics. We optimize for whether you shipped something this month.
              Whether you found a job. Whether you learned something new from someone you wouldn't have met otherwise.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="section__num">// 02 — VALUES</div>
              <h2 className="display h2" style={{ marginTop: 12 }}>HOW WE OPERATE.</h2>
            </div>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.num} className="value">
                <div className="value__num">{v.num}</div>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="section__num">// 03 — TEAM</div>
              <h2 className="display h2" style={{ marginTop: 12 }}>CORE TEAM.</h2>
            </div>
          </div>
          <div className="team">
            {team.map((t) => (
              <div key={t.name} className="team__card">
                <div className="team__avatar" />
                <div className="team__name">{t.name}</div>
                <div className="team__role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
