/** Ícono genérico de chat (no es el logo de WhatsApp). */
export function ChatIcon({ className = "size-[1.15em]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.5-5.2A8.5 8.5 0 1 1 21 11.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-[1.1em]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d="M5 3.5h3.2l1.6 4.3-2.2 1.5a11.5 11.5 0 0 0 7.1 7.1l1.5-2.2 4.3 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16.6 16.6 0 0 1 3.4 5.2 1.6 1.6 0 0 1 5 3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
