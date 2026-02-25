import { useState } from "react";
import actData from "@zero/assets/productionact.json";
import prevData from "@zero/assets/productionprev.json";
import type { ProductionData } from "@zero/types/production";

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
