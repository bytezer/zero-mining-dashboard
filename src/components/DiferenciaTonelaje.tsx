import ReactECharts from "echarts-for-react";
import { useProductionData } from "../hooks/useProductionData";

export const DiferenciaTonelaje = () => {
  const { actual, previous } = useProductionData();

  const getTonsByRelHour = (dataset: any[]) => {
    return dataset.reduce(
      (acc, curr) => {
        acc[curr.relativehour] = (acc[curr.relativehour] || 0) + curr.tons;
        return acc;
      },
      {} as Record<number, number>,
    );
  };

  const actTons = getTonsByRelHour(actual);
  const prevTons = getTonsByRelHour(previous);

  const labels = Array.from({ length: 13 }, (_, i) => i);
  const diffData = labels.map((h) => (actTons[h] || 0) - (prevTons[h] || 0));

  const option = {
    backgroundColor: "transparent",
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: { color: "#fff" },
      name: "Rel. Hour",
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#fff" },
      splitLine: { lineStyle: { color: "#222" } },
    },
    series: [
      {
        data: diffData,
        type: "line",
        smooth: true,
        areaStyle: { color: "rgba(255, 0, 0, 0.2)" },
        lineStyle: { color: "#FF0000", width: 3 },
        itemStyle: { color: "#FF0000" },
      },
    ],
  };

  return (
    <div className="bg-cardBg p-6 rounded-lg border border-neonRed/30">
      <h2 className="text-white text-xl font-bold mb-4">
        Diferencial de Productividad (Turno Act vs Prev)
      </h2>
      <ReactECharts option={option} />
      <p className="mt-6 text-gray-400 text-sm italic border-l-2 border-neonRed pl-4">
        Abordé esto mapeando las horas relativas de ambos turnos para asegurar
        una comparación equitativa (matching). Elegí un gráfico de áreas para
        resaltar visualmente los picos de diferencia. Si tuviera más tiempo,
        incluiría un desglose de las causas de la diferencia (por ejemplo,
        demora de equipos) para dar mayor contexto operativo.
      </p>
    </div>
  );
};
