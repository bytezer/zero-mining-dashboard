export const SystemLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-card-bg/20 backdrop-blur-sm border border-white/5 rounded-lg">
      <div className="relative w-64 h-1 bg-white/10 overflow-hidden mb-4">
        {/* Barra de progreso animada */}
        <div className="absolute top-0 h-full bg-neon-red shadow-[0_0_15px_#ff0000] animate-[loading_1.5s_infinite_ease-in-out]"></div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-neon-red animate-pulse text-xs">//</span>
        <p className="text-white text-xs font-bold uppercase tracking-[0.3em] font-sans">
          Initializing_Module
          <span className="animate-[blink_1s_infinite] ml-1">_</span>
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { left: -100%; width: 30%; }
          50% { width: 60%; }
          100% { left: 100%; width: 30%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
