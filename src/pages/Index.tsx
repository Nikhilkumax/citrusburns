import { Leaf, Shield, Zap, ArrowRight, CheckCircle, Star } from "lucide-react";

const Index = () => {
  const affiliateUrl = "https://2e0e9nf8k9s8rw5zvmsnz51fwa.hop.clickbank.net";

  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Made with pure, plant-based ingredients sourced from nature",
    },
    {
      icon: Zap,
      title: "Stimulant-Free",
      description: "No jitters or crashes—just clean, sustainable energy",
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Try risk-free with our 60-day satisfaction promise",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <main className="relative flex-1 flex items-center justify-center px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-3xl animate-fade-in">
            {/* Badge */}
            <div className="badge-highlight mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Thousands of Happy Customers</span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              The <span className="gradient-text">Citrus-Based</span> Discovery Everyone's Talking About
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-8 leading-relaxed max-w-2xl mx-auto">
              Support your metabolism naturally—by working <em>with</em> your body, not against it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button group"
              >
                Watch the Official Video
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro-Reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                Official Website
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                Full Explanation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                No Signup Required
              </span>
            </div>
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Metabolism?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands who have discovered the power of citrus-based support.
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Affiliate Disclosure */}
          <p className="footer-disclosure mx-auto">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click through and make a purchase, we may receive a commission at no additional cost to you.
          </p>

          {/* FDA Disclaimer */}
          <p className="footer-disclosure mx-auto">
            <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before starting any supplement program.
          </p>

          <p className="text-muted-foreground/50 text-xs mt-4">
            © {new Date().getFullYear()} CitrusBurn™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
