export interface Enjeu {
  iconName: string;
  titre: string;
  description: string;
}

export interface CasUsage {
  titre: string;
  description: string;
  produits: string[];
}

export interface Marche {
  slug: string;
  nom: string;
  heroSousTitre: string;
  introEnjeux: string;
  labelEnjeux: string;
  enjeux: Enjeu[];
  introCasUsage: string;
  casUsage: CasUsage[];
  labelBenefices: string;
  benefices: string[];
  imageAlt: string;
}

export const marches: Marche[] = [
  {
    slug: 'production-vegetale',
    nom: 'Production végétale',
    heroSousTitre:
      'Des substrats et supports de culture pour les producteurs de plants, pépiniéristes et maraîchers. Optimisez vos substrats, améliorez l\'enracinement et sécurisez vos productions.',
    labelEnjeux: 'Vos objectifs de production',
    introEnjeux:
      'En tant que producteur, vous cherchez à optimiser chaque étape du cycle de production pour garantir des plants de qualité, réduire les pertes et maîtriser vos coûts.',
    enjeux: [
      {
        iconName: 'Leaf',
        titre: 'Qualité des plants',
        description: 'Développement racinaire optimal, plants vigoureux et homogènes',
      },
      {
        iconName: 'Droplet',
        titre: 'Maîtrise de l\'eau',
        description: 'Substrats équilibrés entre rétention et drainage',
      },
      {
        iconName: 'TrendingUp',
        titre: 'Productivité',
        description: 'Taux de réussite élevé, cycles de production optimisés',
      },
    ],
    introCasUsage: 'Découvrez comment nos matériaux s\'intègrent à vos pratiques de production.',
    casUsage: [
      {
        titre: 'Substrats de culture',
        description: 'Préparation de mélanges techniques pour pots, godets et conteneurs',
        produits: ['Perlite', 'Vermiculite', 'Florilène'],
      },
      {
        titre: 'Semis et germination',
        description: 'Conditions optimales pour la levée des graines et le développement des plantules',
        produits: ['Vermiculite', 'Floricubes'],
      },
      {
        titre: 'Bouturage et multiplication',
        description: 'Enracinement rapide et sain des boutures',
        produits: ['Perlite', 'Floricubes'],
      },
      {
        titre: 'Culture sous contrainte hydrique',
        description: 'Gestion de l\'eau dans les productions à risque de stress',
        produits: ['Vermiculite', 'Florilène'],
      },
    ],
    labelBenefices: 'Bénéfices pour votre production',
    benefices: [
      'Substrats homogènes et reproductibles',
      'Meilleur enracinement des jeunes plants',
      'Réduction des pertes à la multiplication',
      'Optimisation de la consommation d\'eau',
      'Plants plus résistants au repiquage',
      'Amélioration de la qualité marchande',
    ],
    imageAlt: 'Production végétale professionnelle — semis et jeunes plants en pépinière',
  },
  {
    slug: 'paysagisme',
    nom: 'Paysagisme',
    heroSousTitre:
      'Des matériaux pour garantir la reprise de vos plantations et réduire l\'entretien. Optimisez vos chantiers et assurez la durabilité de vos aménagements.',
    labelEnjeux: 'Vos contraintes de chantier',
    introEnjeux:
      'Le paysagisme professionnel implique de garantir le résultat dans des conditions parfois difficiles : sols de remblai, calendrier serré, budget maintenance limité.',
    enjeux: [
      {
        iconName: 'CheckCircle',
        titre: 'Reprise garantie',
        description: 'Réduire les pertes et éviter les remplacements coûteux',
      },
      {
        iconName: 'Droplet',
        titre: 'Autonomie hydrique',
        description: 'Limiter les arrosages post-plantation pour vos clients',
      },
      {
        iconName: 'TreeDeciduous',
        titre: 'Esthétique durable',
        description: 'Des plantations qui s\'épanouissent sur le long terme',
      },
    ],
    introCasUsage: 'Intégrez nos matériaux à vos pratiques pour des résultats visibles et durables.',
    casUsage: [
      {
        titre: 'Plantation d\'arbres et arbustes',
        description: 'Amélioration des fosses de plantation pour une reprise optimale',
        produits: ['Perlite', 'Vermiculite', 'Florilène'],
      },
      {
        titre: 'Massifs et jardinières',
        description: 'Substrats équilibrés pour des plantations durables et esthétiques',
        produits: ['Perlite', 'Vermiculite', 'Miscanthus'],
      },
      {
        titre: 'Toitures et murs végétalisés',
        description: 'Supports légers et rétention d\'eau pour les contraintes de poids et d\'arrosage',
        produits: ['Floriroll', 'Perlite'],
      },
      {
        titre: 'Aménagements durables',
        description: 'Paillage pour limiter l\'entretien et préserver l\'eau',
        produits: ['Miscanthus'],
      },
    ],
    labelBenefices: 'Bénéfices pour vos chantiers',
    benefices: [
      'Taux de reprise amélioré significativement',
      'Réduction des interventions post-chantier',
      'Clients satisfaits sur le long terme',
      'Valorisation de votre savoir-faire',
      'Argument différenciant sur les appels d\'offres',
      'Maîtrise des coûts de garantie',
    ],
    imageAlt: 'Aménagement paysager professionnel — plantation d\'arbres et massifs',
  },
  {
    slug: 'collectivites',
    nom: 'Collectivités',
    heroSousTitre:
      'Des solutions pour végétaliser durablement les espaces publics. Économisez l\'eau, réduisez l\'entretien et assurez la pérennité de vos plantations.',
    labelEnjeux: 'Vos enjeux de gestion',
    introEnjeux:
      'Les collectivités font face à des contraintes budgétaires, environnementales et climatiques qui exigent des solutions efficaces et durables.',
    enjeux: [
      {
        iconName: 'Droplet',
        titre: 'Économie d\'eau',
        description: 'Réduire la consommation et les coûts d\'arrosage',
      },
      {
        iconName: 'Sprout',
        titre: 'Durabilité',
        description: 'Plantations résilientes face au changement climatique',
      },
      {
        iconName: 'Coins',
        titre: 'Maîtrise des coûts',
        description: 'Limiter les remplacements et l\'entretien',
      },
      {
        iconName: 'TreeDeciduous',
        titre: 'Cadre de vie',
        description: 'Espaces verts attractifs et fonctionnels',
      },
    ],
    introCasUsage: 'Des solutions éprouvées pour les espaces publics et les aménagements urbains.',
    casUsage: [
      {
        titre: 'Fosses d\'arbres urbains',
        description: 'Substrats techniques pour le développement racinaire en milieu contraint',
        produits: ['Perlite', 'Vermiculite', 'Florilène'],
      },
      {
        titre: 'Espaces verts publics',
        description: 'Amélioration des sols pour des plantations durables et économes en eau',
        produits: ['Perlite', 'Vermiculite', 'Florilène', 'Miscanthus'],
      },
      {
        titre: 'Pelouses, greens & grandes surfaces',
        description: 'Rétention d\'eau pour engazonnements, greens de golf et grands espaces végétalisés',
        produits: ['Floriroll'],
      },
      {
        titre: 'Paillage et protection des sols',
        description: 'Couverture végétale pour limiter l\'évaporation et l\'entretien',
        produits: ['Miscanthus'],
      },
    ],
    labelBenefices: 'Bénéfices pour votre collectivité',
    benefices: [
      'Réduction significative de la consommation d\'eau',
      'Meilleure survie des arbres en milieu urbain',
      'Diminution des coûts d\'entretien',
      'Espaces verts plus résilients aux canicules',
      'Contribution aux objectifs environnementaux',
      'Image positive auprès des administrés',
    ],
    imageAlt: 'Espaces verts publics et collectivités — végétalisation urbaine durable',
  },
];
