import { useState } from "react";
import { ListaViajes } from "./components/ListaViajes";
import { TonelajeMaterial } from "./components/TonelajeMaterial";
import { DiferenciaTonelaje } from "./components/DiferenciaTonelaje";
import { CopilotExample } from "./components/CopilotExample";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: "3.1 Lista Viajes", component: <ListaViajes /> },
    { id: 2, name: "3.2 Reporte Material", component: <TonelajeMaterial /> },
    { id: 3, name: "3.3 Diferencia Turnos", component: <DiferenciaTonelaje /> },
    { id: 4, name: "3.4 Copilot Insight", component: <CopilotExample /> },
  ];

  return (
    /* min-h-screen + w-full + bg-dark-bg */
    <div className="min-h-screen w-full bg-dark-bg text-white p-4 md:p-8 font-sans selection:bg-neon-red selection:text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">
            MINING{" "}
            <span className="text-neon-red drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
              DASHBOARD
            </span>
          </h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
            Analytics Production System v1.0
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-1 rounded-full border border-neon-red border-2">
          <span className="text-neon-red animate-pulse text-xs">●</span>
          <span className="text-[15px]  uppercase tracking-tighter font-bold">
            System Online
          </span>
        </div>
      </header>

      {/* Navegación con Skew */}
      <nav className="flex justify-center gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-8 py-3 text-xs font-bold uppercase transition-all duration-300 transform group ${
              activeTab === tab.id
                ? "bg-neon-red text-white -skew-x-12 border-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                : "bg-transparent border border-white/20 text-gray-500 hover:border-neon-red hover:text-white -skew-x-12"
            }`}
          >
            <span className="inline-block skew-x-12 tracking-widest">
              {tab.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Contenedor de Contenido */}
      <main className="max-w-7xl mx-auto min-h-[600px] animate-in fade-in duration-500">
        <div className="bg-card-bg/50 backdrop-blur-sm border border-white/5 rounded-lg p-1">
          {tabs.find((t) => t.id === activeTab)?.component}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-20 py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[15px] uppercase tracking-[0.2em]">
          <p>Prueba técnica by Zero [Jean Smith] © 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
