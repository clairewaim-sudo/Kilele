import { whatsappLink } from "@/lib/site";

/**
 * Explains the WhatsApp-first ordering flow before someone has to ask.
 * Copy is deliberately generic (no deposit %, payment method, or delivery
 * window) until the founder confirms the real operational terms — see
 * README "Open decisions".
 */
const steps = [
  {
    title: "Browse & Chat",
    description: "Find the gear you're after, then message us directly on WhatsApp.",
  },
  {
    title: "We Confirm",
    description: "We confirm availability, sizing and pricing with you personally.",
  },
  {
    title: "Agree the Details",
    description: "We agree payment and delivery details together before anything moves.",
  },
  {
    title: "We Deliver",
    description: "Delivery is arranged directly with you, wherever you are in Kenya.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold text-forest">How Ordering Works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
          No carts, no accounts — just a direct WhatsApp conversation with our team.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-forest/15 bg-white p-6 text-left">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-bold text-cream">
                {index + 1}
              </div>
              <h3 className="mt-4 font-bold text-forest">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-forest px-6 py-3 font-semibold text-cream transition-colors hover:bg-forest-deep"
        >
          Start a WhatsApp Chat
        </a>
      </div>
    </section>
  );
}
