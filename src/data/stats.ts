export interface Stat {
  value: string;
  label: string;
  labelEn: string;
  source: string;
  year: number;
}

export const stats: Stat[] = [
  {
    value: 'jusqu\'à −40 %',
    label: 'd\'eau d\'irrigation',
    labelEn: 'irrigation water saved',
    source: 'Essai terrain, Koweït',
    year: 2023,
  },
  {
    value: 'jusqu\'à ×3',
    label: 'système racinaire',
    labelEn: 'root system weight',
    source: 'Université de Ljubljana, 2019',
    year: 2019,
  },
  {
    value: 'jusqu\'à +50 %',
    label: 'de croissance des pousses',
    labelEn: 'shoot growth increase',
    source: 'Université de Ljubljana, 2019',
    year: 2019,
  },
  {
    value: '5 ans',
    label: 'sans perte de performance constatée',
    labelEn: 'with no performance loss observed',
    source: 'Données matériau',
    year: 2024,
  },
];
