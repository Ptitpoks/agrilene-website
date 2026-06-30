export interface Conditionnement {
  variante?: string;
  description: string;
  dimensions?: string;
  surface?: string;
}

export interface Produit {
  slug: string;
  nom: string;
  sousTitre: string;
  nature: string;
  marches: string[];
  variantes?: string[];
  conditionnements: Conditionnement[];
  usages: string[];
  ceQueCest: string;
  apporte: string[];
  neFaitPas: string[];
  solutionsLiees: string[];
  imageAlt: string;
  img?: string;
}

export const produits: Produit[] = [
  {
    slug: 'perlite',
    nom: 'Perlite',
    sousTitre: 'Minéral expansé',
    nature: 'Aération et drainage',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    conditionnements: [
      { description: 'Sacs de 100 L' },
    ],
    usages: [
      'Allègement et aération des substrats et terreaux',
      'Mélanges de plantation (arbres, arbustes, massifs)',
      'Substrats en pots et jardinières',
      'Semis et bouturage',
      'Fosses d\'arbres urbaines',
    ],
    ceQueCest:
      'La perlite est une roche volcanique broyée puis chauffée à très haute température (~900 °C) : l\'eau qu\'elle contient se vaporise et la fait « éclater » en granules blancs, légers, poreux et stériles. Matériau inerte au pH neutre.',
    apporte: [
      'Aère le substrat et crée des poches d\'air (réduit l\'asphyxie racinaire)',
      'Améliore le drainage et limite la compaction des sols lourds',
      'Allège fortement les mélanges et les bacs',
      'Favorise une exploration racinaire rapide',
      'Inerte et stérile : ne se décompose pas, stable dans le temps',
    ],
    neFaitPas: [
      'Faible rétention d\'eau (effet drainage/aération avant tout)',
      'N\'apporte pas de nutriments et ne les retient quasiment pas (faible pouvoir tampon)',
      'Légère, peut remonter à la surface à l\'arrosage',
      'Génère de la poussière à sec (humidifier avant manipulation)',
    ],
    solutionsLiees: ['enracinement', 'eau'],
    imageAlt: 'Granules de perlite blanches et légères pour aération des substrats',
    img: '/images/produit-perlite.png',
  },
  {
    slug: 'vermiculite',
    nom: 'Vermiculite',
    sousTitre: 'Minéral expansé',
    nature: 'Rétention d\'eau et régularité d\'humidité',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    conditionnements: [
      { description: 'Sacs de 100 L' },
    ],
    usages: [
      'Semis et germination',
      'Jeunes plants et repiquage',
      'Recouvrement léger des graines',
      'Mélanges en pot',
      'Substrats techniques à humidité régulière',
    ],
    ceQueCest:
      'La vermiculite est un minéral naturel (silicate) qui, chauffé, se feuillette et s\'expanse en lamelles légères en « accordéon ». Cette structure lui confère une forte capacité de rétention d\'eau et de nutriments.',
    apporte: [
      'Forte rétention d\'eau, restituée progressivement → humidité régulière',
      'Réduit le stress hydrique et espace les arrosages',
      'Retient et redistribue les nutriments (bon pouvoir tampon / CEC)',
      'Favorise une germination homogène et la reprise des jeunes plants',
      'Légère et facile à mélanger',
    ],
    neFaitPas: [
      'Draine et aère moins bien que la perlite (à ne pas surdoser)',
      'Peut retenir trop d\'eau pour les plantes qui craignent l\'excès d\'humidité',
      'Se tasse et perd un peu de structure avec le temps sous pression',
      'N\'apporte pas de matière organique',
    ],
    solutionsLiees: ['eau'],
    imageAlt: 'Lamelles dorées de vermiculite expansée pour la rétention d\'eau',
    img: '/images/produit-vermiculite.png',
  },
  {
    slug: 'florilene',
    nom: 'Florilène',
    sousTitre: 'Flocons de laine de roche',
    nature: 'Amendement à mélanger au sol',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    variantes: ['Gros flocons', 'Mini flocons'],
    conditionnements: [
      { variante: 'Gros flocons', description: 'Sacs de 80 L' },
      { variante: 'Mini flocons', description: 'Sacs de 80 L' },
    ],
    usages: [
      'Se mélange directement à la terre ou au terreau pour améliorer la rétention d\'eau',
      'Fosses d\'arbres, pelouses et engazonnements',
      'Plantations, horticulture',
      'Production de jeunes plants',
      'Compatible agriculture biologique',
    ],
    ceQueCest:
      'Laine de roche « défibrée », entièrement issue de roches naturelles (basalte), sans aucun ajout chimique. Sous forme de flocons, elle s\'incorpore au sol ou au support de culture (terre, terreau).',
    apporte: [
      'Augmente fortement la rétention d\'eau du sol et la restitue progressivement aux racines',
      'Réduit le stress hydrique et les besoins en arrosage',
      'Améliore durablement le sol (inerte, ne se décompose pas) tout en l\'allégeant',
      'Stérile : aucun risque fongique, bactérien ou d\'insectes',
      'Compatible agriculture biologique',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments par elle-même',
      'Retient l\'eau plutôt que de drainer (à doser pour les plantes qui craignent l\'excès d\'humidité)',
      'Matériau alcalin : à fort dosage, peut influencer légèrement le pH',
    ],
    solutionsLiees: ['eau', 'enracinement', 'securisation'],
    imageAlt: 'Flocons de laine de roche Florilène pour améliorer la rétention d\'eau du sol',
    img: '/images/produit-florilene.png',
  },
  {
    slug: 'floricubes',
    nom: 'Floricubes',
    sousTitre: 'Cubes de laine de roche',
    nature: 'Réserve d\'eau et enracinement au cœur de la motte',
    marches: ['Production végétale', 'Paysagisme'],
    conditionnements: [
      { description: 'Sacs de 2 kg' },
      { description: 'Big box' },
    ],
    usages: [
      'Se placent au fond du pot ou du trou de plantation pour constituer une réserve d\'eau',
      'Mise en pot, rempotage',
      'Plantation de jeunes sujets',
    ],
    ceQueCest:
      'Cubes préformés en laine de roche compressée, disponibles en différentes tailles, à positionner sous la motte.',
    apporte: [
      'Réserve d\'eau localisée à la base des racines, restituée progressivement',
      'Favorise un enracinement rapide et un bon développement racinaire',
      'Maintient une humidité régulière au cœur de la motte → meilleure reprise',
      'Réduit le stress hydrique et les pertes sur jeunes plants',
      'Format propre, prêt à l\'emploi et standardisé',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments (réserve hydrique, pas nutritive)',
      'Ne remplace pas le substrat : c\'est un complément placé sous la motte',
      'Matériau alcalin et inerte (ne se décompose pas)',
    ],
    solutionsLiees: ['eau', 'enracinement', 'securisation'],
    imageAlt: 'Cubes Floricubes en laine de roche pour réserve d\'eau sous la motte',
    img: '/images/produit-floricubes.png',
  },
  {
    slug: 'floriroll',
    nom: 'Floriroll',
    sousTitre: 'Rouleaux / plaques de laine de roche',
    nature: 'Rétention d\'eau pour grandes surfaces végétalisées',
    marches: ['Paysagisme', 'Collectivités'],
    variantes: ['Épaisseur 2 cm', 'Épaisseur 4 cm'],
    conditionnements: [
      {
        variante: 'Épaisseur 2 cm',
        description: 'Rouleau 20 × 1 000 × 6 000 mm',
        dimensions: '20 × 1 000 × 6 000 mm',
        surface: '6 m²/rouleau',
      },
      {
        variante: 'Épaisseur 4 cm',
        description: 'Rouleau 40 × 1 000 × 3 000 mm',
        dimensions: '40 × 1 000 × 3 000 mm',
        surface: '3 m²/rouleau',
      },
    ],
    usages: [
      'Toitures végétalisées',
      'Murs végétalisés',
      'Espaces verts, greens et terrains de golf',
      'Pelouses et engazonnements',
      'Pose en nappe sous ou dans le système de culture sur de grandes surfaces',
    ],
    ceQueCest:
      'Laine de roche conditionnée en rouleaux ou plaques, pour une mise en œuvre rapide en nappe continue sur de grandes surfaces.',
    apporte: [
      'Très grande capacité de rétention d\'eau sur de larges surfaces → arrosage réduit',
      'Maintient une humidité homogène pour gazons, toitures et murs végétalisés',
      'Légère : adaptée à la charge limitée des toitures et murs végétalisés',
      'Améliore l\'implantation et la résilience des pelouses, greens et espaces verts',
      'Stérile, inerte et durable dans le temps',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments',
      'Pensée pour les grandes surfaces, pas pour la culture en pot ou les petites plantations individuelles',
      'Nécessite une pose intégrée au système (toiture, mur, engazonnement)',
    ],
    solutionsLiees: ['eau', 'securisation'],
    imageAlt: 'Rouleaux Floriroll en laine de roche pour toitures et grandes surfaces végétalisées',
  },
  {
    slug: 'miscanthus',
    nom: 'Miscanthus',
    sousTitre: 'Fibre végétale',
    nature: 'Paillage et protection des sols',
    marches: ['Paysagisme', 'Collectivités'],
    conditionnements: [
      { description: 'Sacs de 100 L' },
    ],
    usages: [
      'Paillage des massifs, pieds d\'arbres et haies',
      'Potager et plantations ornementales',
      'Protection et isolation thermique des sols',
      'Limitation de l\'évaporation et de l\'arrosage',
      'Réduction de l\'entretien (désherbage)',
    ],
    ceQueCest:
      'Le miscanthus (Miscanthus × giganteus) est une graminée pérenne récoltée puis broyée en fibres. Issu de cultures dédiées à faible intrant, sans traitement chimique, il constitue un paillage végétal naturel, léger et durable. Posé en couverture de surface, il se décompose lentement en enrichissant progressivement le sol en matière organique.',
    apporte: [
      'Limite l\'évaporation et maintient l\'humidité du sol',
      'Freine la levée des adventices (barrière physique à la lumière)',
      'Protège les racines des chocs thermiques (canicule comme gel)',
      'Se décompose lentement → apport progressif de matière organique et amélioration de la structure',
      'Léger et facile à épandre, aspect esthétique homogène',
      'Culture pérenne peu gourmande en intrants (argument durable)',
    ],
    neFaitPas: [
      'N\'apporte pas (ou très peu) de nutriments minéraux directement',
      'Ne remplace pas un substrat de culture : c\'est une couverture de surface, pas un amendement incorporé',
      'Sur paillage épais, peut induire une légère faim d\'azote en surface la première année',
      'Matériau organique : à renouveler périodiquement (contrairement aux minéraux inertes)',
    ],
    solutionsLiees: ['securisation', 'eau'],
    imageAlt: 'Paillage de miscanthus pour la protection et la réduction de l\'entretien des sols',
    img: '/images/produit-miscanthus.png',
  },
  {
    slug: 'manaroche',
    nom: 'Manaroche',
    sousTitre: 'Mélange minéral équilibré',
    nature: 'Amendement tout-en-un — aération, rétention et structure',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    conditionnements: [
      { description: 'Sacs de 100 L' },
    ],
    usages: [
      'Amendement universel pour tous types de substrats et terreaux',
      'Mélanges de plantation en pot, bac ou pleine terre',
      'Substrats de pépinière et production de jeunes plants',
      'Fosses d\'arbres et massifs en milieu urbain',
      'Toute culture nécessitant à la fois aération et rétention d\'eau',
    ],
    ceQueCest:
      'Manaroche est un mélange minéral prêt à l\'emploi, dosé avec précision pour cumuler les atouts de chaque composant : la perlite pour l\'aération et le drainage, la vermiculite pour la rétention d\'eau et des nutriments, et la laine de roche pour le soutien racinaire et l\'humidité régulière. Un seul produit qui remplace le dosage manuel de plusieurs amendements.',
    apporte: [
      'Aère le substrat et prévient l\'asphyxie racinaire (fraction perlite)',
      'Retient l\'eau et la restitue progressivement aux racines (fraction vermiculite et laine de roche)',
      'Améliore la CEC — redistribution des nutriments (fraction vermiculite)',
      'Soutient le développement racinaire et favorise une reprise rapide',
      'Formule prête à l\'emploi : plus besoin de doser plusieurs produits séparément',
      'Inerte, stérile et durable dans le temps',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments par lui-même (amendement physique, pas fertilisant)',
      'Ne remplace pas un substrat complet : s\'incorpore à votre terreau ou terre existante',
    ],
    solutionsLiees: ['eau', 'enracinement', 'securisation'],
    imageAlt: 'Manaroche — mélange minéral équilibré perlite, vermiculite et laine de roche AGRILENE',
    img: '/images/produit-manaroche.png',
  },
];
