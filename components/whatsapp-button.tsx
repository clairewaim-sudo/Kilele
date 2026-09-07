import { whatsappLink } from "@/lib/site";

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kilele on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-2xl text-white shadow-lg transition-transform hover:scale-105"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
