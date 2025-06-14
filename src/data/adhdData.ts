// data/adhdData.ts

export type ADHDStat = {
  prevalence: string;
  info: string;
};

export const adhdStats: Record<string, ADHDStat> = {
  USA: { prevalence: "9.4%", info: "High awareness and diagnosis rates." },
  IND: { prevalence: "1.6%", info: "Limited access to diagnosis." },
  BRA: { prevalence: "5.2%", info: "Moderate public health programs." },
  // more...
};
