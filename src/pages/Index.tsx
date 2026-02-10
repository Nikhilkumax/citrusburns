import { Play } from "lucide-react";

const Index = () => {
  const affiliateUrl = "https://hop.clickbank.net/?affiliate=03nikhil&vendor=citrusburn&pid=vsl&hd=1&ex=1";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Progress Cue */}
      <div className="w-full py-3 px-6 text-center">
        <span className="text-muted-foreground/60 text-xs tracking-widest uppercase">
          Step 1 of 2 — Introduction
        </span>
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-5">
            The Citrus-Based Discovery Changing How People Think About Metabolism
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light mb-4 leading-relaxed">
            Why metabolism support may be about working with your body — especially when things don't feel the same anymore.
          </p>

          <p className="text-muted-foreground/50 text-sm mb-10">
            This short video explains the idea step by step.
          </p>

          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-pulse"
          >
            <Play className="mr-2.5 fill-primary-foreground" size={20} />
            Watch the Free Presentation
          </a>

          <p className="trust-text mt-5">
            Full explanation • Official website • No sign-up required
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            <span className="trust-item">100% Natural</span>
            <span className="text-border">•</span>
            <span className="trust-item">Stimulant-Free</span>
            <span className="text-border">•</span>
            <span className="trust-item">Money-Back Guarantee</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="text-center space-y-4">
          <p className="disclosure-text mx-auto">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click through and make a purchase, we may receive a commission at no additional cost to you.
          </p>
          <p className="disclosure-text mx-auto">
            <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before use.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-4">
            © {new Date().getFullYear()} CitrusBurn™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
