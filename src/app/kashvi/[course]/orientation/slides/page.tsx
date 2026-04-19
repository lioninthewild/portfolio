import SlideViewer from "@/components/course/SlideViewer";
import fs from "fs";
import path from "path";

async function getSlidesContent() {
  const filePath = path.join(process.cwd(), "src/content/orientation/slides.md");
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    return "# Slides not found\n\nPlease create src/content/orientation/slides.md";
  }
}

export default async function OrientationSlidesPage() {
  const markdown = await getSlidesContent();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <SlideViewer markdown={markdown} />
    </div>
  );
}