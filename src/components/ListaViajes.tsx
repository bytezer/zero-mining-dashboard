import ReactECharts from "echarts-for-react";
import { useProductionData } from "@zero/hooks/useProductionData";
import { InsightNote } from "@zero/components/InsightNote";

const ListaViajes = () => {
  const { actual } = useProductionData();

  // Agrupar datos por zona y equipo
  const groups: Record<string, Record<string, number>> = {};
  const equipments = new Set<string>();
  const zones = new Set<string>();

  actual.forEach((item) => {
    zones.add(item.locationdump);
    equipments.add(item.loadingequipmentname);
    if (!groups[item.locationdump]) groups[item.locationdump] = {};
    groups[item.locationdump][item.loadingequipmentname] =
      (groups[item.locationdump][item.loadingequipmentname] || 0) + item.tons;
  });

  const sortedZones = Array.from(zones);
  const series = Array.from(equipments).map((eq) => ({
    name: eq,
    type: "bar",
    data: sortedZones.map((z) => groups[z][eq] || 0),
    emphasis: { focus: "series" },
  }));

  const option = {
    backgroundColor: "transparent",
    color: ["#FF0000", "#FFFFFF", "#444444", "#AA0000"],
    tooltip: { trigger: "axis" },
    legend: { textStyle: { color: "#fff" }, bottom: 0 },
    xAxis: {
      type: "category",
      data: sortedZones,
      axisLabel: { color: "#fff" },
    },
    yAxis: {
      type: "value",
      splitLine: { lineStyle: { color: "#333" } },
      axisLabel: { color: "#fff" },
    },
    series,
  };

  return (
    <div className="bg-cardBg p-6 rounded-lg border border-neonRed/30">
      <h2 className="text-neonRed text-xl font-bold mb-4 uppercase tracking-widest">
        Tonelaje por Equipo y Zona
      </h2>
      <ReactECharts option={option} style={{ height: "400px" }} />
      <InsightNote
        textSize="text-base"
        text="Abordé esta solución utilizando un objeto de acumulación para pivotar
        los datos de JSON plano a una estructura matricial. Elegí ECharts por su
        excelente manejo de series dinámicas y personalización visual. Consideré
        Chart.js, pero ECharts ofrece un rendimiento superior con grandes
        volúmenes de datos. Con más tiempo, implementaría filtros interactivos
        por equipo de carga."
      />
    </div>
  );
};

export default ListaViajes;
