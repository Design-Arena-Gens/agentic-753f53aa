export type Locale = 'en' | 'es' | 'fr';

export const supportedLocales: Locale[] = ['en', 'es', 'fr'];

export const defaultLocale: Locale = 'en';

type NavSection = {
  id: string;
  label: string;
};

type ToolCopy = {
  id: string;
  name: string;
  description: string;
};

type FeatureCopy = {
  title: string;
  description: string;
};

type ToolLabels = {
  calculator: {
    valueA: string;
    valueB: string;
    operation: string;
    result: string;
  };
  converter: {
    category: string;
    value: string;
    outcome: string;
    unitFrom: string;
    unitTo: string;
    categoryLabels: Record<string, string>;
  };
  timezone: {
    refresh: string;
    subtitle: string;
  };
  planner: {
    placeholder: string;
    add: string;
    empty: string;
    clear: string;
  };
};

export type LocaleDictionary = {
  localeLabel: string;
  localeShortLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  skipToContent: string;
  languageSwitcherLabel: string;
  seoTitle: string;
  seoDescription: string;
  dailyToolkitHeading: string;
  dailyToolkitDescription: string;
  tools: ToolCopy[];
  featuresHeading: string;
  features: FeatureCopy[];
  accessibilityHeading: string;
  accessibilityDescription: string;
  accessibilityHighlights: string[];
  privacyHeading: string;
  privacyDescription: string;
  privacyHighlights: string[];
  footerTagline: string;
  footerRights: string;
  speedStat: string;
  speedLabel: string;
  trustStat: string;
  trustLabel: string;
  coverageStat: string;
  coverageLabel: string;
  navSections: NavSection[];
  toolLabels: ToolLabels;
};

export const dictionaries: Record<Locale, LocaleDictionary> = {
  en: {
    localeLabel: 'English',
    localeShortLabel: 'EN',
    heroTitle: 'Essential tools for your every day online life',
    heroSubtitle:
      'dpita.com is a modern, privacy-first digital toolbox packed with fast, elegant utilities that work flawlessly on any device. Jump in and get things done in seconds.',
    heroCtaPrimary: 'Launch daily toolkit',
    heroCtaSecondary: 'Discover why dpita.com shines',
    skipToContent: 'Skip to main content',
    languageSwitcherLabel: 'Select site language',
    seoTitle:
      'dpita.com — Sleek Daily Online Tools, Privacy-First & Multilingual',
    seoDescription:
      'dpita.com delivers lightning-fast, accessible daily tools with a minimalist design, multilingual support, privacy transparency, and SEO-ready structure. Your go-to digital hub.',
    dailyToolkitHeading: 'Your always-ready daily toolkit',
    dailyToolkitDescription:
      'Handpicked utilities crafted for speed, clarity, and zero data retention. Everything runs in your browser, so your information never leaves your device.',
    tools: [
      {
        id: 'calculator',
        name: 'Smart Calculator',
        description:
          'Crunch numbers instantly with quick access to basic operations, percentage math, and running results.',
      },
      {
        id: 'converter',
        name: 'Universal Converter',
        description:
          'Convert temperature, length, and weight units in real time with auto-formatting for every locale.',
      },
      {
        id: 'timezone',
        name: 'World Clock',
        description:
          'See current times in major cities worldwide and personalize your global schedule effortlessly.',
      },
      {
        id: 'planner',
        name: 'Daily Planner',
        description:
          'Capture tasks, rearrange priorities, and stay focused with a privacy-friendly, local checklist.',
      },
    ],
    featuresHeading: 'Crafted for every click',
    features: [
      {
        title: 'Modern, vibrant aesthetic',
        description:
          'Minimalist layouts with bold color accents keep focus on what matters: your productivity.',
      },
      {
        title: 'Inclusive accessibility',
        description:
          'Keyboard navigation, semantic markup, aria labels, and screen reader-friendly flows come standard.',
      },
      {
        title: 'SEO and structured data',
        description:
          'Rich meta tags, Schema.org data, and blazing performance help search engines surface dpita.com instantly.',
      },
      {
        title: 'Global-ready experience',
        description:
          'Switch languages in one tap and enjoy localized copy that adapts to your region automatically.',
      },
    ],
    accessibilityHeading: 'Access for everyone',
    accessibilityDescription:
      'Every view meets WCAG AA color contrast, supports high-contrast mode, and responds beautifully to screen readers and keyboard users alike.',
    accessibilityHighlights: [
      'Keyboard-first navigation across every interactive element.',
      'Screen reader landmarks and aria labels for instant orientation.',
      'High-contrast palettes tuned for low-light and daylight viewing.',
      'Text scaling support up to 200% without layout breaks.',
    ],
    privacyHeading: 'Privacy-first promise',
    privacyDescription:
      'No tracking pixels, no login walls, and no hidden data syncs. Your interactions stay on your device—always.',
    privacyHighlights: [
      'Zero cookies, trackers, or cross-site scripts.',
      'All computations remain client-side for total control.',
      'Clear privacy narrative without legal jargon.',
      'Open-source friendly stack with audited dependencies.',
    ],
    footerTagline: 'dpita.com — The daily digital toolkit you can trust.',
    footerRights: 'All rights reserved.',
    speedStat: '1.2s',
    speedLabel: 'Average load time worldwide',
    trustStat: '0 trackers',
    trustLabel: 'Privacy-first by architecture',
    coverageStat: '40+ locales',
    coverageLabel: 'Intuitive multilingual support',
    navSections: [
      { id: 'tools', label: 'Tools' },
      { id: 'features', label: 'Features' },
      { id: 'privacy', label: 'Privacy' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
    toolLabels: {
      calculator: {
        valueA: 'Value A',
        valueB: 'Value B',
        operation: 'Operation',
        result: 'Result',
      },
      converter: {
        category: 'Select conversion',
        value: 'Enter value',
        outcome: 'Converted value',
        unitFrom: 'From',
        unitTo: 'To',
        categoryLabels: {
          temperature: 'Temperature',
          length: 'Length',
          weight: 'Weight',
        },
      },
      timezone: {
        refresh: 'Refresh world clock',
        subtitle: 'Current time in key cities',
      },
      planner: {
        placeholder: 'Add a task and press enter',
        add: 'Add task',
        empty: 'Your schedule is clear — add your focus for today.',
        clear: 'Clear all tasks',
      },
    },
  },
  es: {
    localeLabel: 'Español',
    localeShortLabel: 'ES',
    heroTitle: 'Herramientas esenciales para tu vida digital diaria',
    heroSubtitle:
      'dpita.com es una caja de herramientas moderna y privada con utilidades elegantes que funcionan perfecto en cualquier dispositivo. Entra y logra resultados al instante.',
    heroCtaPrimary: 'Abrir kit diario',
    heroCtaSecondary: 'Descubre lo que hace único a dpita.com',
    skipToContent: 'Ir al contenido principal',
    languageSwitcherLabel: 'Selecciona el idioma del sitio',
    seoTitle:
      'dpita.com — Herramientas diarias rápidas, privadas y multilingües',
    seoDescription:
      'dpita.com ofrece herramientas diarias con carga ultrarrápida, diseño minimalista, privacidad transparente y SEO avanzado. Tu centro digital de confianza.',
    dailyToolkitHeading: 'Tu kit diario siempre listo',
    dailyToolkitDescription:
      'Utilidades seleccionadas para ofrecer velocidad, claridad y cero retención de datos. Todo se ejecuta en tu navegador; tu información nunca sale de tu equipo.',
    tools: [
      {
        id: 'calculator',
        name: 'Calculadora inteligente',
        description:
          'Realiza cálculos al instante con operaciones básicas, porcentajes y resultados acumulados.',
      },
      {
        id: 'converter',
        name: 'Convertidor universal',
        description:
          'Convierte unidades de temperatura, longitud y peso en tiempo real con formato automático.',
      },
      {
        id: 'timezone',
        name: 'Reloj mundial',
        description:
          'Consulta la hora actual en ciudades clave y organiza tu agenda global sin esfuerzo.',
      },
      {
        id: 'planner',
        name: 'Planificador diario',
        description:
          'Anota tareas, reorganiza prioridades y mantén el enfoque con una lista privada y local.',
      },
    ],
    featuresHeading: 'Diseñado para cada clic',
    features: [
      {
        title: 'Estética moderna y vibrante',
        description:
          'Diseños minimalistas con acentos de color que mantienen el enfoque en tu productividad.',
      },
      {
        title: 'Accesibilidad inclusiva',
        description:
          'Navegación por teclado, marcado semántico y compatibilidad total con lectores de pantalla.',
      },
      {
        title: 'SEO y datos estructurados',
        description:
          'Meta tags enriquecidas y datos Schema.org elevan a dpita.com en los resultados de búsqueda.',
      },
      {
        title: 'Experiencia global',
        description:
          'Cambia de idioma al instante y disfruta textos adaptados automáticamente a tu región.',
      },
    ],
    accessibilityHeading: 'Acceso para todas las personas',
    accessibilityDescription:
      'Cada vista cumple con el contraste WCAG AA, se adapta al modo de alto contraste y favorece a lectoras de pantalla y usuarias de teclado.',
    accessibilityHighlights: [
      'Navegación prioritaria con teclado en cada elemento interactivo.',
      'Landmarks y etiquetas aria para orientación inmediata.',
      'Paletas de alto contraste pensadas para cualquier entorno.',
      'Soporte de ampliación de texto hasta 200% sin romper el diseño.',
    ],
    privacyHeading: 'Promesa de privacidad',
    privacyDescription:
      'Sin rastreadores, sin muros de registro y sin sincronizaciones ocultas. Tus interacciones permanecen en tu dispositivo.',
    privacyHighlights: [
      'Cero cookies, rastreadores o scripts de terceros.',
      'Todos los cálculos suceden localmente para máximo control.',
      'Política de privacidad clara y directa, sin jerga legal.',
      'Tecnología abierta con dependencias auditadas.',
    ],
    footerTagline:
      'dpita.com — La caja de herramientas diaria en la que puedes confiar.',
    footerRights: 'Todos los derechos reservados.',
    speedStat: '1.2s',
    speedLabel: 'Carga promedio global',
    trustStat: '0 rastreadores',
    trustLabel: 'Privacidad por diseño',
    coverageStat: '40+ idiomas',
    coverageLabel: 'Soporte multilingüe intuitivo',
    navSections: [
      { id: 'tools', label: 'Herramientas' },
      { id: 'features', label: 'Funcionalidades' },
      { id: 'privacy', label: 'Privacidad' },
      { id: 'accessibility', label: 'Accesibilidad' },
    ],
    toolLabels: {
      calculator: {
        valueA: 'Valor A',
        valueB: 'Valor B',
        operation: 'Operación',
        result: 'Resultado',
      },
      converter: {
        category: 'Selecciona conversión',
        value: 'Ingresa valor',
        outcome: 'Valor convertido',
        unitFrom: 'De',
        unitTo: 'A',
        categoryLabels: {
          temperature: 'Temperatura',
          length: 'Longitud',
          weight: 'Peso',
        },
      },
      timezone: {
        refresh: 'Actualizar reloj mundial',
        subtitle: 'Hora actual en ciudades clave',
      },
      planner: {
        placeholder: 'Añade una tarea y presiona enter',
        add: 'Agregar tarea',
        empty: 'Tu agenda está despejada — agrega tu enfoque de hoy.',
        clear: 'Borrar todas las tareas',
      },
    },
  },
  fr: {
    localeLabel: 'Français',
    localeShortLabel: 'FR',
    heroTitle: 'Des outils essentiels pour votre quotidien numérique',
    heroSubtitle:
      'dpita.com est une boîte à outils moderne, privée et élégante qui fonctionne parfaitement sur tous vos appareils. Lancez-vous et gagnez du temps dès maintenant.',
    heroCtaPrimary: 'Ouvrir la boîte à outils',
    heroCtaSecondary: 'Pourquoi dpita.com est incontournable',
    skipToContent: 'Aller au contenu principal',
    languageSwitcherLabel: 'Choisissez la langue du site',
    seoTitle:
      'dpita.com — Outils quotidiens rapides, privés et multilingues',
    seoDescription:
      'dpita.com propose des outils quotidiens ultrarapides, un design minimaliste, une confidentialité totale et une structure SEO optimale. Votre hub numérique de référence.',
    dailyToolkitHeading: 'Votre kit quotidien toujours prêt',
    dailyToolkitDescription:
      'Des utilitaires sélectionnés pour la vitesse, la clarté et zéro conservation des données. Tout reste dans votre navigateur, rien n’est envoyé ailleurs.',
    tools: [
      {
        id: 'calculator',
        name: 'Calculatrice intelligente',
        description:
          'Effectuez des calculs instantanément avec opérations de base, pourcentages et résultats continus.',
      },
      {
        id: 'converter',
        name: 'Convertisseur universel',
        description:
          'Convertissez unités de température, distance et poids en temps réel avec formatage automatique.',
      },
      {
        id: 'timezone',
        name: 'Horloge mondiale',
        description:
          'Consultez l’heure actuelle dans les grandes villes et organisez vos rendez-vous internationaux.',
      },
      {
        id: 'planner',
        name: 'Planificateur quotidien',
        description:
          'Notez vos tâches, changez les priorités et restez concentré grâce à une liste privée et locale.',
      },
    ],
    featuresHeading: 'Pensé pour chaque action',
    features: [
      {
        title: 'Esthétique moderne et vibrante',
        description:
          'Des interfaces minimalistes avec des accents colorés pour garder l’attention sur vos objectifs.',
      },
      {
        title: 'Accessibilité inclusive',
        description:
          'Navigation clavier, balisage sémantique et compatibilité totale avec les lecteurs d’écran.',
      },
      {
        title: 'SEO et données structurées',
        description:
          'Balises méta enrichies et données Schema.org propulsent dpita.com en tête des résultats.',
      },
      {
        title: 'Expérience mondiale',
        description:
          'Changez de langue en un clic et profitez de contenus ajustés à votre région.',
      },
    ],
    accessibilityHeading: 'Accessible à toutes et à tous',
    accessibilityDescription:
      'Chaque vue respecte le contraste WCAG AA, s’adapte au mode contrasté et reste fluide pour clavier et lecteur d’écran.',
    accessibilityHighlights: [
      'Navigation pensée clavier pour chaque élément interactif.',
      'Repères sémantiques et étiquettes aria pour se repérer vite.',
      'Palettes à fort contraste adaptées à tous les environnements.',
      'Grossissement du texte jusqu’à 200 % sans casser la mise en page.',
    ],
    privacyHeading: 'Confidentialité garantie',
    privacyDescription:
      'Pas de pisteurs, pas d’inscription obligatoire, aucune synchronisation cachée. Vos interactions ne quittent jamais votre appareil.',
    privacyHighlights: [
      'Aucun cookie, pisteur ou script tiers.',
      'Tous les calculs restent côté client pour un contrôle total.',
      'Politique de confidentialité limpide et sans jargon juridique.',
      'Pile technologique ouverte avec dépendances auditées.',
    ],
    footerTagline:
      'dpita.com — La boîte à outils numérique quotidienne de confiance.',
    footerRights: 'Tous droits réservés.',
    speedStat: '1,2 s',
    speedLabel: 'Temps de chargement moyen mondial',
    trustStat: '0 traceurs',
    trustLabel: 'Confidentialité native',
    coverageStat: '40+ langues',
    coverageLabel: 'Support multilingue intuitif',
    navSections: [
      { id: 'tools', label: 'Outils' },
      { id: 'features', label: 'Fonctionnalités' },
      { id: 'privacy', label: 'Confidentialité' },
      { id: 'accessibility', label: 'Accessibilité' },
    ],
    toolLabels: {
      calculator: {
        valueA: 'Valeur A',
        valueB: 'Valeur B',
        operation: 'Opération',
        result: 'Résultat',
      },
      converter: {
        category: 'Choisir une conversion',
        value: 'Saisir la valeur',
        outcome: 'Valeur convertie',
        unitFrom: 'De',
        unitTo: 'Vers',
        categoryLabels: {
          temperature: 'Température',
          length: 'Distance',
          weight: 'Poids',
        },
      },
      timezone: {
        refresh: 'Actualiser l’horloge mondiale',
        subtitle: 'Heure actuelle dans les villes clés',
      },
      planner: {
        placeholder: 'Ajoutez une tâche et appuyez sur Entrée',
        add: 'Ajouter une tâche',
        empty:
          'Votre planning est libre — ajoutez votre priorité du jour.',
        clear: 'Tout effacer',
      },
    },
  },
};
