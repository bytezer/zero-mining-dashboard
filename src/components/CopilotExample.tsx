import ReactECharts from "echarts-for-react";
import { useProductionData } from "@zero/hooks/useProductionData";
import { InsightNote } from "@zero/components/InsightNote";

const CopilotExample = () => {
  const { actual, previous } = useProductionData();

  const totalAct = actual.reduce((s, c) => s + c.tons, 0);
  const totalPrev = previous.reduce((s, c) => s + c.tons, 0);
  const diffPercent = (((totalAct - totalPrev) / totalPrev) * 100).toFixed(1);

  const option = {
    backgroundColor: "transparent",
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 10, borderColor: "#000", borderWidth: 2 },
        label: { show: false },
        data: [
          {
            value: totalAct,
            name: "Turno Actual",
            itemStyle: { color: "#FF0000" },
          },
          {
            value: totalPrev,
            name: "Turno Previo",
            itemStyle: { color: "#FFFFFF" },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black p-8 rounded-lg border-2 border-neonRed relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2 tracking-tighter">
            INSIGHT GEN
          </h2>
          <div className="h-1 w-20 bg-neonRed mb-6"></div>
          <div className="bg-white/5 p-4 rounded border-l-4 border-neonRed">
            <p className="text-white text-lg">
              {totalAct > totalPrev
                ? `El turno actual muestra un incremento del ${diffPercent}% en el tonelaje total respecto al turno previo.`
                : `Se observa una contracción del ${diffPercent}% en la producción comparado con el turno anterior.`}
            </p>
            <p className="text-gray-400 mt-2 text-sm italic uppercase tracking-widest">
              Análisis heurístico basado en flujo de activos.
            </p>
          </div>
        </div>
        <div className="h-[300px]">
          <ReactECharts option={option} style={{ height: "100%" }} />
        </div>
      </div>

      <InsightNote
        textSize="text-base"
        text="Elegí un gráfico de dona por su claridad para comparar KPIs globales de un vistazo. 
        El 'insight' se genera mediante una evaluación lógica de los acumulados. 
        En una versión escalable, este procesamiento se delegaría al backend mediante 
        vistas materializadas o consultas SQL agregadas para optimizar el rendimiento 
        del cliente y permitir actualizaciones en tiempo real."
      />
    </div>
  );
};

export default CopilotExample;
