import Link from "next/link";

const profileImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBJCGcMrpndf0aTkbJm-9utdRMQl2f-otfU6iofHp6xeDS23wK7zjEoIdDCzvD1pZbeE8T6-XLNj1qU-msyTT-HDFBVUGdNNxfrVAnYth8lUvc8g3oxAleClzQ4PpWQuyoDxEZ9VJTeYbwAdqLl1dXHNqjnitsotipR1yB-87hd5oc_4bBPZwruO9k-_y8_vkEDzYMdYtVhZI1il1eUG-PyvVoYlCg0utjPuMEV2cyCi124PXdptjz0hfsJ_Dd0UVa5lB1F4zApCPw";

const bannerImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAzUBm_cNA6YU_Fk7K23Ued7K79TCEExesEfsLhg4TBa9sn6Z-N1FH0pHdCdLYkmvw4FXvKILXLkzCORuzQq1QzSkVts71qyhJPYSR2C4fyKBl0Q-mfR_KKipaJlsTV96HNhHve7iv96EZ-WRc--9FmsGo03IKgLztRCaA5uLkWOEivPIRgrvZZXKM1nJuO-bLVhe7aur4HNkFRtodZpJU9G7S-qYauo-kby6l5vfSZa2lPVRbRxnVOoQzDZYQnjMPQSDFoYZPioyU";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="relative w-full">
        <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden rounded-xl bg-surface-container-low">
          <img
            className="w-full h-full object-cover opacity-90"
            src={bannerImage}
            alt="abstract neural network visualization"
          />
        </div>
        <div className="absolute -bottom-16 left-12 p-1.5 bg-surface rounded-full z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={profileImage}
              alt="professional portrait of Prashish Dahal"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
              Prashish Dahal
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="w-full">
              <p className="text-xl md:text-2xl text-[#787777] font-medium tracking-tight">
                Data and ML |
                <span className="text-black"> Curious about AI systems</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-purple-accent mt-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a
              className="p-2.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-black transition-colors"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="p-2.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-black transition-colors"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              className="p-2.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-black transition-colors"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Link
            href="mailto:prashish@example.com"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold tracking-tight shadow-lg shadow-black/10 hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
