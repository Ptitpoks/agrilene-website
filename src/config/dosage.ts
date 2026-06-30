export type DosageMode = 'gazon' | 'rempotage' | 'semis' | 'plantation';

export interface DosageOption {
  pct: number;
  label: string;
  labelEn: string;
}

export interface DosageModeConfig {
  label: string;
  labelEn: string;
  inputLabel: string;
  inputLabelEn: string;
  inputUnit: string;
  defaultPct: number;
  depthCm?: number;
  options: DosageOption[];
  bagVolume: number;
  showBags: boolean;
  hint?: string;
  hintEn?: string;
}

export const dosageConfig: Record<DosageMode, DosageModeConfig> = {
  gazon: {
    label: 'Gazon / engazonnement',
    labelEn: 'Lawn / seeding',
    inputLabel: 'Surface (m²)',
    inputLabelEn: 'Area (m²)',
    inputUnit: 'm²',
    depthCm: 10,
    defaultPct: 20,
    options: [
      { pct: 15, label: '15 % — Léger', labelEn: '15 % — Light' },
      { pct: 20, label: '20 % — Standard (recommandé)', labelEn: '20 % — Standard (recommended)' },
      { pct: 25, label: '25 % — Zones sèches', labelEn: '25 % — Dry areas' },
    ],
    bagVolume: 80,
    showBags: true,
    hint: 'Profondeur de zone racinaire fixe : 10 cm. 1 sac de 80 L couvre 4 m² (taux standard 20 %).',
    hintEn: 'Fixed root zone depth: 10 cm. 1 bag of 80 L covers 4 m² (standard rate 20%).',
  },
  rempotage: {
    label: 'Rempotage / pot',
    labelEn: 'Repotting / pot',
    inputLabel: 'Volume du pot (L)',
    inputLabelEn: 'Pot volume (L)',
    inputUnit: 'L',
    defaultPct: 20,
    options: [
      { pct: 10, label: '10 % — Léger', labelEn: '10 % — Light' },
      { pct: 20, label: '20 % — Standard (recommandé)', labelEn: '20 % — Standard (recommended)' },
      { pct: 25, label: '25 % — Zones sèches', labelEn: '25 % — Dry areas' },
    ],
    bagVolume: 80,
    showBags: false,
  },
  semis: {
    label: 'Semis / jeunes plants',
    labelEn: 'Seeds / young plants',
    inputLabel: 'Volume substrat (L)',
    inputLabelEn: 'Substrate volume (L)',
    inputUnit: 'L',
    defaultPct: 15,
    options: [
      { pct: 10, label: '10 % — Très léger', labelEn: '10 % — Very light' },
      { pct: 15, label: '15 % — Standard (recommandé)', labelEn: '15 % — Standard (recommended)' },
      { pct: 20, label: '20 % — Riche', labelEn: '20 % — Rich' },
    ],
    bagVolume: 80,
    showBags: false,
    hint: 'Dose douce recommandée pour les semis et jeunes plants sensibles.',
    hintEn: 'Gentle dose recommended for seeds and sensitive young plants.',
  },
  plantation: {
    label: 'Plantation pleine terre',
    labelEn: 'In-ground planting',
    inputLabel: 'Volume du trou (L)',
    inputLabelEn: 'Hole volume (L)',
    inputUnit: 'L',
    defaultPct: 20,
    options: [
      { pct: 20, label: '20 % — Standard (recommandé)', labelEn: '20 % — Standard (recommended)' },
      { pct: 25, label: '25 % — Haute résilience', labelEn: '25 % — High resilience' },
    ],
    bagVolume: 80,
    showBags: false,
    hint: 'Repères : arbuste (trou 30–50 L) → 6–10 L · arbre (trou 100–300 L) → 20–60 L.',
    hintEn: 'Reference: shrub (30–50 L hole) → 6–10 L · tree (100–300 L hole) → 20–60 L.',
  },
};

export const dosageModes = Object.keys(dosageConfig) as DosageMode[];
