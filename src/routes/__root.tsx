import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="page">
      <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1 className="display h1" style={{ color: "var(--green)" }}>404</h1>
        <p className="label" style={{ marginTop: 16 }}>PAGE NOT FOUND</p>
        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="page">
      <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1 className="display h2">SOMETHING BROKE.</h1>
        <p style={{ color: "var(--muted)", marginTop: 16 }}>{error.message}</p>
        <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn" onClick={() => { router.invalidate(); reset(); }}>Retry</button>
          <a href="/" className="btn btn--ghost">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OpenBox — Where Builders Meet" },
      { name: "description", content: "A global community for developers, engineers, and builders in tech." },
      { property: "og:title", content: "OpenBox — Where Builders Meet" },
      { property: "og:description", content: "A global community for developers, engineers, and builders in tech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
