const Index = () => {
  const affiliateUrl = "https://example.com/citrusburn-official";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="text-center max-w-xl animate-fade-in">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-5">
            The Citrus-Based Discovery People Can't Stop Talking About
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground font-light mb-8 leading-relaxed">
            Support your metabolism naturally—by working with your body, not against it.
          </p>

          {/* Pre-CTA Curiosity Line */}
          <p className="text-base text-foreground/80 font-medium mb-6">
            Here's why this approach is gaining attention right now.
          </p>

          {/* Primary CTA */}
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Watch the Official CitrusBurn Explanation
          </a>

          {/* Micro-Reassurance */}
          <p className="trust-text mt-4">
            Official website • Full explanation • No signup required
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6">
            <span className="trust-item">100% Natural</span>
            <span className="text-border">•</span>
            <span className="trust-item">Stimulant-Free</span>
            <span className="text-border">•</span>
            <span className="trust-item">Money-Back Guarantee</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6">
        <div className="text-center space-y-3">
          {/* Affiliate Disclosure */}
          <p className="footer-disclosure mx-auto">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click through and make a purchase, we may receive a commission at no additional cost to you.
          </p>

          {/* FDA Disclaimer */}
          <p className="footer-disclosure mx-auto">
            <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before starting any supplement program.
          </p>

          <p className="text-muted-foreground/40 text-[10px] mt-3">
            © {new Date().getFullYear()} CitrusBurn™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
