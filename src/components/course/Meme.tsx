interface MemeProps {
  type: "confusion" | "copy-paste" | "struggle" | "beginner" | "success" | "debugging";
}

const memeImages: Record<string, string> = {
  confusion: "😵‍💫",
  "copy-paste": "📋",
  struggle: "😤",
  beginner: "🆕",
  success: "🎉",
  debugging: "🐛",
};

const memeMessages: Record<string, string> = {
  confusion: "Wait, what's happening?",
  "copy-paste": "Why write code when I can copy?",
  struggle: "It's not working... why?!",
  beginner: "Hello World! I made this!",
  success: "It works! I did it!",
  debugging: "There must be a bug somewhere...",
};

export default function Meme({ type }: MemeProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
      <div className="text-6xl mb-4" role="img" aria-label={type}>
        {memeImages[type] || "🤔"}
      </div>
      <p className="text-lg text-purple-700 font-medium italic">
        "{memeMessages[type]}"
      </p>
      <div className="mt-3 px-3 py-1 bg-purple-100 rounded-full text-xs text-purple-600 font-medium">
        {type.toUpperCase()} MEME
      </div>
    </div>
  );
}