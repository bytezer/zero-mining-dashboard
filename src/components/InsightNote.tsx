interface InsightNoteProps {
  text: string;
  textSize?: "text-xs" | "text-sm" | "text-base" | "text-lg";
  className?: string;
}

export const InsightNote = ({
  text,
  textSize = "text-sm",
  className = "",
}: InsightNoteProps) => {
  return (
    <div className={`mt-8 ${className}`}>
      <p
        className={`
        ${textSize} 
        text-gray-400 
        italic 
        border-l-2 
        border-neon-red 
        pl-4 
        py-1
        leading-relaxed
        font-sans
        bg-white/5
        rounded-r-md
      `}
      >
        {text}
      </p>
    </div>
  );
};
