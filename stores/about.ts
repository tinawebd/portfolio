export const useAboutStore = defineStore('aboutStore', {
  state: () => ({
    widgets: [
      {
        title: 'à propos de moi',
        subtitle: 'Qui suis-je ?',
        description:
          "Développeur web avec 4 ans d'expérience, actuellement focalisé sur Laravel et Vue.js pour concevoir des applications modernes et performantes. Au fil de mon parcours, j'ai travaillé avec diverses technologies telles que Symfony, Angular, Drupal, jQuery, WordPress, Docker, et Bootstrap, enrichissant ainsi mes compétences techniques.",
      },
      {
        title: 'Mode de travail',
        subtitle: 'Indépendant',
        description:
          'En tant que développeur web, je privilégie le télétravail pour créer un environnement propice à la concentration et à la productivité.',
      },
      {
        title: 'Disponibilité Immédiate',
        subtitle: 'Prêt à collaborer',
        description:
          "Je suis prêt à m'investir dès maintenant pour vos projets web.",
      },
    ],
  }),
});
