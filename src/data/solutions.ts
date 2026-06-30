export interface Solution {
  id: string;
  titre: string;
  icone: string;
  couleurIcone: string;
  bgIcone: string;
  problematiques: string[];
  roleMateriaux: string;
  benefices: string[];
  marches: string[];
  produitsRecommandes: string[];
}

export const solutions: Solution[] = [
  {
    id: 'eau',
    titre: 'Gestion et disponibilité de l\'eau',
    icone: '💧',
    couleurIcone: 'text-blue-600',
    bgIcone: 'bg-blue-50',
    problematiques: [
      'Sols trop drainants qui ne retiennent pas l\'eau',
      'Sols compacts qui empêchent l\'infiltration',
      'Stress hydrique récurrent des végétaux',
      'Coûts d\'arrosage élevés',
    ],
    roleMateriaux:
      'Nos matériaux (perlite, vermiculite, laine de roche) agissent comme des réservoirs microscopiques. Ils absorbent l\'eau lors de l\'arrosage et la restituent progressivement aux racines selon leurs besoins.',
    benefices: [
      'Réduction du stress hydrique',
      'Diminution des fréquences d\'arrosage',
      'Meilleure autonomie des plantations',
      'Économies d\'eau significatives',
    ],
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    produitsRecommandes: ['Florilène', 'Floricubes', 'Floriroll', 'Vermiculite', 'Miscanthus'],
  },
  {
    id: 'enracinement',
    titre: 'Qualité de l\'enracinement',
    icone: '🌱',
    couleurIcone: 'text-green-700',
    bgIcone: 'bg-sage',
    problematiques: [
      'Racines asphyxiées par des substrats trop denses',
      'Compaction du sol empêchant le développement racinaire',
      'Reprise difficile après plantation',
      'Croissance limitée des jeunes plants',
    ],
    roleMateriaux:
      'En aérant la structure du substrat, nos matériaux créent des espaces poreux qui permettent aux racines de respirer, de s\'étendre et d\'accéder aux nutriments.',
    benefices: [
      'Développement racinaire optimal',
      'Meilleure oxygénation des racines',
      'Reprise plus rapide après plantation',
      'Croissance vigoureuse et durable',
    ],
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    produitsRecommandes: ['Perlite', 'Florilène', 'Floricubes'],
  },
  {
    id: 'securisation',
    titre: 'Sécurisation des plantations',
    icone: '🛡️',
    couleurIcone: 'text-orange-600',
    bgIcone: 'bg-orange-50',
    problematiques: [
      'Mortalité élevée des jeunes plants',
      'Pertes économiques à la plantation',
      'Vulnérabilité aux conditions climatiques',
      'Coûts de remplacement importants',
    ],
    roleMateriaux:
      'En optimisant l\'environnement racinaire dès la plantation, nos matériaux réduisent le choc de transplantation et renforcent la capacité des végétaux à s\'adapter à leur nouvel environnement.',
    benefices: [
      'Réduction significative des pertes',
      'Meilleure résilience climatique',
      'Économies sur les remplacements',
      'Plantations plus durables',
    ],
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    produitsRecommandes: ['Florilène', 'Floricubes', 'Floriroll', 'Vermiculite'],
  },
];
