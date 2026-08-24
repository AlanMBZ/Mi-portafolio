import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-800 mt-12 bg-dark">
      <div className="flex justify-center items-center gap-2 text-gray-500 mb-2">
        <Terminal size={16} />
        <span className="font-mono text-sm">&lt;Alan Misael Bazan Zenil /&gt;</span>
      </div>
      <p className="text-xs text-gray-600">
        Construido con React, Vite, Node.js y Tailwind CSS.
      </p>
    </footer>
  );
}