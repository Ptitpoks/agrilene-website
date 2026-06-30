export interface Produit {
  slug: string;
  nom: string;
  sousTitre: string;
  nature: string;
  marches: string[];
  variantes?: string[];
  usages: string[];
  ceQueCest: string;
  apporte: string[];
  neFaitPas: string[];
  solutionsLiees: string[];
  imageAlt: string;
}

export const produits: Produit[] = [
  {
    slug: 'perlite',
    nom: 'Perlite',
    sousTitre: 'Minéral expansé',
    nature: 'Aération et drainage',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
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
  },
  {
    slug: 'vermiculite',
    nom: 'Vermiculite',
    sousTitre: 'Minéral expansé',
    nature: 'Rétention d\'eau et régularité d\'humidité',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
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
  },
  {
    slug: 'florilene',
    nom: 'Florilène',
    sousTitre: 'Flocons de laine de roche',
    nature: 'Amendement à mélanger au sol',
    marches: ['Production végétale', 'Paysagisme', 'Collectivités'],
    variantes: ['Gros flocons', 'Mini flocons'],
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
      'Bien adaptée aux fosses d\'arbres, pelouses, plantations et production de plants',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments par elle-même',
      'Retient l\'eau plutôt que de drainer (à doser pour les plantes qui craignent l\'excès d\'humidité)',
      'Matériau alcalin : à fort dosage, peut influencer légèrement le pH',
    ],
    solutionsLiees: ['eau', 'enracinement', 'securisation'],
    imageAlt: 'Flocons de laine de roche Florilène pour améliorer la rétention d\'eau du sol',
  },
  {
    slug: 'floricubes',
    nom: 'Floricubes',
    sousTitre: 'Cubes de laine de roche',
    nature: 'Réserve d\'eau et enracinement au cœur de la motte',
    marches: ['Production végétale', 'Paysagisme'],
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
  },
  {
    slug: 'floriroll',
    nom: 'Floriroll',
    sousTitre: 'Rouleaux / plaques de laine de roche',
    nature: 'Rétention d\'eau pour grandes surfaces végétalisées',
    marches: ['Paysagisme', 'Collectivités'],
    variantes: ['Épaisseur 2 cm', 'Épaisseur 4 cm'],
    usages: [
      'Toitures végétalisées',
      'Murs végétalisés',
      'Espaces verts, greens et terrains de golf',
      'Pelouses et engazonnements',
      'Posé en nappe sous ou dans le système de culture sur de grandes surfaces',
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
    usages: [
      'Paillage des massifs et pieds d\'arbres',
      'Protection et isolation des sols',
      'Limitation de l\'évaporation',
      'Réduction de l\'entretien',
    ],
    ceQueCest:
      'Le miscanthus est une graminée pérenne dont les fibres, une fois transformées, constituent un paillage naturel, léger et durable. Contenu complet à compléter.',
    apporte: [
      'Limite l\'évaporation et maintient l\'humidité du sol',
      'Réduit la pousse des mauvaises herbes',
      'Protège les racines des variations thermiques',
      'Améliore l\'aspect esthétique des massifs',
    ],
    neFaitPas: [
      'N\'apporte pas de nutriments minéraux',
      'Ne remplace pas un substrat de culture',
    ],
    solutionsLiees: ['securisation'],
    imageAlt: 'Paillage de miscanthus pour la protection et l\'entretien des sols',
  },
];
