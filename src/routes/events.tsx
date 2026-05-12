import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — OpenBox" },
      { name: "description", content: "Upcoming and past community events: hackathons, workshops, competitions, seminars." },
      { property: "og:title", content: "Events — OpenBox" },
      { property: "og:description", content: "Upcoming and past community events." },
    ],
  }),
  component: Events,
});

const FILTERS = ["All", "Hackathon", "Workshop", "Competition", "Seminar"] as const;
type Filter = typeof FILTERS[number];

const EVENTS: { name: string; date: string; type: Exclude<Filter, "All">; desc: string }[] = [
  { name: "Build Night #01", date: "2026-06-14", type: "Workshop", desc: "Live build session — ship a small project end-to-end in 3 hours." },
  { name: "OpenBox Hack", date: "2026-07-20", type: "Hackathon", desc: "48 hours. Open theme. Solo or teams. Real prizes." },
  { name: "Algo Royale", date: "2026-08-02", type: "Competition", desc: "Weekly competitive programming face-off. Bring your stack." },
  { name: "System Design AMA", date: "2026-05-30", type: "Seminar", desc: "Open Q&A with engineers on building at scale." },
];

function Events() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? EVENTS : EVENTS.filter((e) => e.type === filter);

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <div className="page-header__crumb fade-up">// EVENTS</div>
          <h1 className="display h1 page-header__title fade-up fade-up--1">SHOW UP.<br/>SHIP THINGS.</h1>
          <p className="page-header__sub fade-up fade-up--2">
            Hackathons, workshops, competitions, seminars. Online and IRL. All free for members.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter ${filter === f ? "filter--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h3>NO EVENTS YET.</h3>
              <p>Stay tuned.</p>
            </div>
          ) : (
            <div className="card-grid">
              {filtered.map((e) => (
                <article key={e.name} className="card">
                  <div className="card__meta">
                    <span className="tag">{e.type}</span>
                    <span className="label">{e.date}</span>
                  </div>
                  <h3 className="card__title">{e.name}</h3>
                  <p className="card__desc">{e.desc}</p>
                  <div className="card__more">Details →</div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
