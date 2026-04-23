export default function Meme({ type }: { type: string }) {
  const memeConfig: Record<string, { emoji: string; message: string; bg: string }> = {
    confusion: { emoji: "😵‍💫", message: "Wait, what's happening?", bg: "bg-red-100" },
    "copy-paste": { emoji: "📋", message: "Why write code when I can copy?", bg: "bg-yellow-100" },
    struggle: { emoji: "😤", message: "It's not working... why?!", bg: "bg-orange-100" },
    beginner: { emoji: "🆕", message: "Hello World! I made this!", bg: "bg-green-100" },
    success: { emoji: "🎉", message: "It works! I did it!", bg: "bg-green-100" },
    debugging: { emoji: "🐛", message: "There must be a bug somewhere...", bg: "bg-blue-100" },
  };

  const config = memeConfig[type] || memeConfig.beginner;

  return (
    <div className={`flex items-center justify-center gap-4 p-6 my-6 ${config.bg} rounded-2xl border-2 border-opacity-50`}>
      <span className="text-5xl">{config.emoji}</span>
      <div>
        <p className="text-lg font-medium text-gray-800">"{config.message}"</p>
        <p className="text-xs font-bold text-gray-500 uppercase mt-1">{type} MEME</p>
      </div>
    </div>
  );
}