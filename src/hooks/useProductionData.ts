import { useState } from "react";
import actData from "../assets/productionact.json";
import prevData from "../assets/productionprev.json";
import type { ProductionData } from "../types/production";

export const useProductionData = () => {
  const [data] = useState<{
    actual: ProductionData[];
    previous: ProductionData[];
  }>({
    actual: actData as ProductionData[],
    previous: prevData as ProductionData[],
  });

  return data;
};
