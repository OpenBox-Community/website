import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — OpenBox" },
      { name: "description", content: "Community announcements, build logs, and featured projects from OpenBox." },
      { property: "og:title", content: "Blog — OpenBox" },
      { property: "og:description", content: "Community announcements, build logs, and featured projects." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { title: "OpenBox V1 Is Live", date: "2026-05-01", tag: "Announcement", desc: "We're officially open. Here's what's inside, what's next, and how to plug in." },
  { title: "Build Log: The OpenBox Bot", date: "2026-05-08", tag: "Build Log", desc: "How we built the role-sync bot from scratch. Stack, gotchas, and what we'd do differently." },
  { title: "Featured: Member Projects #01", date: "2026-05-10", tag: "Community", desc: "A round-up of standout projects shipped by members in the first week." },
  { title: "Hackathon Recap — Build Night #00", date: "2026-04-25", tag: "Events", desc: "Three hours, twelve teams, twelve shipped projects. Highlights inside." },
];

function Blog() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <div className="page-header__crumb fade-up">// BLOG</div>
          <h1 className="display h1 page-header__title fade-up fade-up--1">UPDATES<br/>FROM THE BOX.</h1>
          <p className="page-header__sub fade-up fade-up--2">
            Announcements, build logs, featured member work. No SEO fluff.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {POSTS.length === 0 ? (
            <div className="empty">
              <h3>NO POSTS YET.</h3>
              <p>Follow our socials for the first updates.</p>
            </div>
          ) : (
            <div className="card-grid">
              {POSTS.map((p) => (
                <article key={p.title} className="card">
                  <div className="card__meta">
                    <span className="tag">{p.tag}</span>
                    <span className="label">{p.date}</span>
                  </div>
                  <h3 className="card__title">{p.title}</h3>
                  <p className="card__desc">{p.desc}</p>
                  <div className="card__more">Read more →</div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
