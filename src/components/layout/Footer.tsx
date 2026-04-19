import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <Link
            href="/"
            className="text-lg font-bold text-black uppercase hover:text-purple-accent transition-colors"
          >
            Prashish Dahal
          </Link>
          <p className="text-sm text-[#787777] mt-1">
            © {new Date().getFullYear()} Prashish Dahal.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://github.com/lioninthewild"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#787777] hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prashishdahal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#787777] hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/PrashishDahal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#787777] hover:text-black transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
