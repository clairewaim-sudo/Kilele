/**
 * Site-wide constants. Centralised so the founder (or a future dev) only
 * has to change values in one place — e.g. once the domain goes live or
 * the real WhatsApp Business number is issued.
 */
export const siteConfig = {
  name: "Kilele",
  tagline: "The Summit Starts Here.",
  description:
    "Kilele equips the Kenyan outdoor lifestyle — premium camping, hiking, overlanding and portable power gear for those who already live it.",
  // TODO(founder): replace with the live domain once outdoorgear.ke is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://outdoorgear.ke",
  // TODO(founder): replace with the real WhatsApp Business number (international format, no + or spaces).
  whatsappNumber: "254700000000",
  whatsappMessage: "Hi Kilele, I'd like to ask about your gear.",
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
