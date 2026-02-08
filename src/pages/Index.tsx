import { ArrowRight, Flame, Zap, Heart, Leaf, Check, Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Image imports
import heroCitrus from "@/assets/hero-citrus.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import educationBreakImg from "@/assets/education-break.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";

const Index = () => {
  const affiliateUrl = "https://2e0e9nf8k9s8rw5zvmsnz51fwa.hop.clickbank.net";

  const bodySupport = [
    {
      icon: Flame,
      title: "Supports Natural Metabolism",
      description: "Works with your body's existing processes to support healthy metabolic function.",
    },
    {
      icon: Zap,
      title: "Daily Energy Without Crashes",
      description: "Designed to help maintain steady energy levels throughout the day.",
    },
    {
      icon: Heart,
      title: "Appetite Awareness",
      description: "May help support mindful eating habits and natural hunger cues.",
    },
    {
      icon: Leaf,
      title: "Plant-Based Ingredients",
      description: "Formulated with carefully selected botanical extracts and natural compounds.",
    },
  ];

  const advantages = [
    "Plant-based and non-GMO formula",
    "No harsh stimulants",
    "Designed for daily use",
    "Focuses on balance, not extremes",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      image: testimonial1,
      text: "I liked that it felt gentle and easy to add to my routine. It's become a simple part of my morning.",
    },
    {
      name: "Michael R.",
      image: testimonial2,
      text: "Didn't feel jittery like other products I've tried. I appreciate the natural approach.",
    },
    {
      name: "Linda K.",
      image: testimonial3,
      text: "Helped me stay more mindful about my habits. I feel like I'm supporting my body the right way.",
    },
  ];

  const whoIsFor = [
    "People curious about metabolism support",
    "Those looking for a plant-based option",
    "People who prefer gentle, daily wellness products",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="relative w-full">
          <AspectRatio ratio={16 / 9} className="md:aspect-[21/9]">
            <img
              src={heroCitrus}
              alt="Fresh citrus fruits on wooden table in warm morning light"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
          </AspectRatio>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container max-w-3xl px-6 md:px-12">
              <h1 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                Why So Many People Are Talking About This Citrus-Based Metabolism Formula
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                A closer look at a plant-based supplement designed to support metabolism, energy, and daily wellness.
              </p>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS CITRUSBURN */}
      <section className="py-16 sm:py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-soft mb-4">About CitrusBurn</span>
              <h2 className="section-title mb-4">What Is CitrusBurn?</h2>
              <p className="section-subtitle mb-4">
                CitrusBurn is a plant-based dietary supplement formulated to support metabolism, energy balance, and fat utilization.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike harsh stimulants or extreme approaches, CitrusBurn is designed to work gently with your body's natural processes. It's not a drug or a quick fix—it's a daily wellness companion that supports your body's existing metabolic functions using carefully selected botanical ingredients.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ingredientsImg}
                alt="Natural supplement ingredients including citrus, ginger, and turmeric"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT SUPPORTS THE BODY */}
      <section className="py-16 sm:py-20 px-6 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">How It Supports the Body</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A gentle, holistic approach to everyday wellness.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bodySupport.map((item, index) => (
              <div key={index} className="feature-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES SECTION */}
      <section className="py-16 sm:py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={lifestyleImg}
                alt="Calm wellness lifestyle with morning stretching"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title mb-6">Why People Find This Approach Interesting</h2>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMAGE + EDUCATION BREAK */}
      <section className="relative">
        <AspectRatio ratio={21 / 9}>
          <img
            src={educationBreakImg}
            alt="Fresh citrus fruits, green tea, and ginger arranged naturally"
            className="w-full h-full object-cover"
          />
          <div className="image-overlay" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <p className="heading-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground text-center max-w-3xl leading-relaxed font-medium">
              "The idea is simple: support the body's natural processes instead of forcing results."
            </p>
          </div>
        </AspectRatio>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-16 sm:py-20 px-6 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">What Users Are Saying</h2>
            <p className="section-subtitle">
              Real experiences from people who tried CitrusBurn.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO THIS MAY BE FOR */}
      <section className="py-16 sm:py-20 px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Who This May Be For</h2>
          <ul className="space-y-3 mb-8">
            {whoIsFor.map((item, index) => (
              <li key={index} className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-16 sm:py-20 px-6 bg-muted/50">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Curious to Learn More?</h2>
          <p className="section-subtitle mb-8">
            If you're curious how CitrusBurn works, the ingredients used, and the full explanation behind the formula, you can explore the official presentation.
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Visit the Official Website
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container max-w-4xl mx-auto text-center space-y-4">
          <p className="footer-disclosure mx-auto">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click through and make a purchase, we may receive a commission at no additional cost to you.
          </p>
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
