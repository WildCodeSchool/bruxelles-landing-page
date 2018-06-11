export default {
  main_title: 'Formation développeur web Bruxelles',
  main_subtitle: 'Formation développeur web Bruxelles',
  actions: {
    apply: 'JE POSTULE',
    download: 'Télécharger',
    know_more: 'En savoir plus'
  },
  section_1: {
    title: 'Viens te former au métier de développeur web à la Wild Code School Bruxelles !',
    content: `
      La Wild Code School te permet de te former à la programmation informatique avec une {0}, 
      en réalisant des projets pour de vrais clients. Pendant 5 mois, 
      tu vas te spécialiser sur une technologie particulièrement demandée sur le marché du travail belge 
      (Java/JEE, PHP/Symfony ou Javascript/React/NodeJS). 
      Tu auras ainsi un portfolio de projets à présenter à de futurs employeurs.
    `,
    content_link: [
      { content: 'pédagogie innovante', url: 'https://wildcodeschool.fr/pedagogie-hybride/'}
    ],
    download_program: 'Télécharger le programme de la formation'
  },
  section_2 : {
    title: 'Prochaine session de formation développeur web',
    subtitle: '1er octobre 2018 au 1er mars 2019.',
    content: `
      Découvre si le métier de développeur web est fait pour toi 
      en commençant à apprendre les bases de la programmation informatique 
      sur notre plateforme pédagogique Odyssey
    `
  },
  section_3 : {
    title: 'Wild Code School Bruxelles',
    main_content: `
      Notre coding school est installée chez Co.Station, lieu numérique emblématique en Belgique. 
      Situé au coeur de la capitale belge, à deux minutes à pied de la Gare Centrale de Bruxelles, 
      cet accélérateur de startup et scale-up rassemble une communauté de résidents, 
      partenaires, sponsors et influenceurs
    `,
    images: [
      { url: 'parvis-cathedrale.jpg', alt: 'Parvis Saint Gudule' },
      { url: 'coding-school.jpg', alt: 'Locaux coding school' },
      { url: 'co.station-logo.jpg', alt: 'Logo accélérateur de startup Co.Station' }
    ],
    access: {
      title: 'Accès à notre formation développeur web depuis:',
      list: [
        'Louvain : 30 minutes en train',
        'Gand : 40 minutes en train',
        'Anvers : 45 minutes en train',
        'Charleroi : 55 minutes en train',
        'Liège : 1 heure en train',
        'Mons : 1 heure en train',
        'Namur : 1h05 en train',
        'Courtrai : 1h15 heure en train'
      ]
    }
  },
  section_4 : {
    title: 'Témoignage formation développement web',
    show_more: {
      before_link: 'Découvre plus de',
      link: 'témoignages de nos Wilders',
      after_link: 'qui te parlent de leur formation à la Wild Code School'
    },
    testimonials: [
      {
        author: 'Valentin',
        content: `
          Le format court et intensif me convenait très bien car je ne me serai pas relancé dans des études longues.
          C’est une formation très professionnalisante : pendant la période de cours, 
          on travaille déjà sur des projets avec des vrais clients ! 
          Cette école permet à des personnes complètement débutantes comme moi d’apprendre à coder 
          et d’en faire leur métier et c’est génial !
        `,
        img: 'metier-de-developpeur_valentin.png',
        link: `https://wildcodeschool.fr/blog/metier-de-developpeur`
      },
      {
        author: 'Pauline',
        content: `
          Le modèle pédagogique de la Wild Code School, 
          c’est LA solution pour les reconversions professionnelles ou les surdiplômés laissés sur le carreau. 
          Quel que soit ton profil, peu importe ce que t’as fait avant : il y a de la place pour tout le monde. 
          Même les profils différents, on apporte tous quelque chose.
        `,
        img: 'pauline-developpeuse.png',
        link: `https://wildcodeschool.fr/blog/portrait-pauline-developpeuse/`
      }
    ],
    show_src: 'Voir le portrait de {author}'
  },
  section_6 : {
    title: 'Qui sommes nous ?',
    content: [
      `La Wild Code School est un réseau d’écoles qui forme aux métiers numériques d’avenir : 
      développeur web, développeur mobile, data analyst, product management…`,
      `La pédagogie repose sur la réalisation de projets, 
      un accompagnement personnalisé vers l’emploi et une autonomie renforcée 
      des élèves dans l’acquisition des savoirs.`,
      `Créé en 2014 en France, le réseau se développe en campus de taille humaine intégrés 
      dans les écosystèmes numériques locaux au plus près des recruteurs. 
      Notre école de code est aujourd’hui présente dans 14 villes européennes 
      et continue de développer son réseau et ses formations.`
    ],
    know_more: 'Pour en savoir plus '
  },
  team: {
    title: 'Contact',
    wild_side: 'Son coté Wild',
    users: [
      {
        name: 'François Blondeau',
        role: 'Campus Manager, Bruxelles',
        img: 'Francois_blondeau-350x350.jpg',
        phone: '32499179157',
        mail: 'francois@wildcodeschool.be',
        bio: `
          Après avoir étudié les ressources humaine, François a fait carrière dans l’intérim.
          Suite à cette expérience, il a créé une société de recrutement qu’il a co-géré pendant 5 ans. 
          Passionné par le développement de compétences, 
          il a décidé de rejoindre la Wild Code School pour développer le premier campus à l’international.
        `,
        wild_side: `
          Seul, avec ses ses deux enfants, ou avec des amis, 
          il n’hésite pas à prendre sa tente et partir à l’aventure en randonnée pendant plusieurs jours.
        `
      }
    ]
  },
}
