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
    <div className="min-h-screen bg-darkBg text-white p-4 md:p-8 font-sans">
      <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">
            MINING <span className="text-neonRed">DASHBOARD</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
            Analytics Production System v1.0
          </p>
        </div>
        <div className="text-right">
          <div className="text-neonRed animate-pulse">● SYSTEM ONLINE</div>
        </div>
      </header>

      <nav className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm font-bold uppercase transition-all duration-300 border ${
              activeTab === tab.id
                ? "bg-neonRed border-neonRed text-white skew-x-[-12deg]"
                : "border-white/20 text-gray-500 hover:border-white/50"
            }`}
          >
            <span
              className={activeTab === tab.id ? "skew-x-[12deg] block" : ""}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto space-y-12">
        {tabs.find((t) => t.id === activeTab)?.component}
      </main>

      <footer className="mt-20 py-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest">
        Propiedad del Sistema de Control de Producción © 2024
      </footer>
    </div>
  );
}

export default App;
