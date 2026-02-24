import { useProductionData } from "../hooks/useProductionData";

export const TonelajeMaterial = () => {
  const { actual } = useProductionData();

  const grouped = actual.reduce(
    (acc, curr) => {
      const key = `${curr.dim_name_material}-${curr.hour}`;
      if (!acc[key])
        acc[key] = {
          material: curr.dim_name_material,
          hour: curr.hour,
          tons: 0,
        };
      acc[key].tons += curr.tons;
      return acc;
    },
    {} as Record<string, any>,
  );

  const tableData = Object.values(grouped).sort((a, b) => b.hour - a.hour);

  return (
    <div className="bg-cardBg p-6 rounded-lg border border-white/10">
      <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-widest border-b border-neonRed pb-2">
        Reporte de Material por Hora
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-neonRed uppercase text-xs tracking-tighter border-b border-white/20">
              <th className="py-3 px-4">Hora</th>
              <th className="py-3 px-4">Material</th>
              <th className="py-3 px-4 text-right">Tonelaje Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4 text-white font-mono">
                  {row.hour}:00
                </td>
                <td className="py-3 px-4 text-gray-300">{row.material}</td>
                <td className="py-3 px-4 text-right text-neonRed font-bold">
                  {row.tons.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-gray-400 text-sm italic border-l-2 border-white pl-4">
        Utilicé un método de reducción (reduce) para agrupar las métricas y el
        método sort nativo de JavaScript para el ordenamiento descendente.
        Seleccioné una tabla minimalista con Tailwind para mantener la claridad
        del reporte. Con más tiempo, añadiría exportación a CSV y paginación
        para mejorar la experiencia del usuario.
      </p>
    </div>
  );
};
