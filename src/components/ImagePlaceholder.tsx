import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  label,
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl bg-[#E5E5E5] ${aspectRatio} ${className}`}
    >
      <ImageIcon size={40} className="text-[#B0B0B0]" />
      <span className="mt-2 text-xs text-[#6B6B6B]">{label}</span>
    </div>
  );
}
