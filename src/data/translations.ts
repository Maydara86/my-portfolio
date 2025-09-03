export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  name: string;
  heroTitle: string;
  heroDescription: string;
  portfolioTitle: string;
  portfolioDescription: string;
  testimonialsTitle: string;
  contactTitle: string;
  contactDescription: string;
  viewProject: string;
  downloadCV: string;
  getInTouch: string;
  aboutMe: string;
  mySkills: string;
  experience: string;
  education: string;
  services: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    name: "Mohamed Cherif",
    heroTitle: "Full-Stack Web Developer",
    heroDescription: "Passionate about creating modern, scalable web applications with cutting-edge technologies. I bring ideas to life through clean code and exceptional user experiences.",
    portfolioTitle: "My Work",
    portfolioDescription: "Here are some of the projects I've built",
    testimonialsTitle: "What Clients Say",
    contactTitle: "Let's Connect",
    contactDescription: "Ready to work together? Get in touch!",
    viewProject: "View Project",
    downloadCV: "Download CV",
    getInTouch: "Get in Touch",
    aboutMe: "About Me",
    mySkills: "My Skills",
    experience: "Experience",
    education: "Education",
    services: "Services"
  },
  fr: {
    name: "Mohamed Cherif",
    heroTitle: "Développeur Web Full-Stack",
    heroDescription: "Passionné par la création d'applications web modernes et évolutives avec des technologies de pointe. Je donne vie aux idées grâce à du code propre et des expériences utilisateur exceptionnelles.",
    portfolioTitle: "Mon Travail",
    portfolioDescription: "Voici quelques projets que j'ai réalisés",
    testimonialsTitle: "Ce Que Disent Les Clients",
    contactTitle: "Connectons-Nous",
    contactDescription: "Prêt à travailler ensemble ? Contactez-moi !",
    viewProject: "Voir le Projet",
    downloadCV: "Télécharger CV",
    getInTouch: "Me Contacter",
    aboutMe: "À Propos",
    mySkills: "Mes Compétences",
    experience: "Expérience",
    education: "Formation",
    services: "Services"
  },
  ar: {
    name: "محمد شريف",
    heroTitle: "مطور ويب متكامل",
    heroDescription: "شغوف بإنشاء تطبيقات ويب حديثة وقابلة للتوسع باستخدام أحدث التقنيات. أجعل الأفكار تأتي إلى الحياة من خلال الكود النظيف وتجارب المستخدم الاستثنائية.",
    portfolioTitle: "أعمالي",
    portfolioDescription: "إليكم بعض المشاريع التي قمت ببنائها",
    testimonialsTitle: "ما يقوله العملاء",
    contactTitle: "لنتواصل",
    contactDescription: "مستعد للعمل معاً؟ تواصل معي!",
    viewProject: "عرض المشروع",
    downloadCV: "تحميل السيرة الذاتية",
    getInTouch: "تواصل معي",
    aboutMe: "نبذة عني",
    mySkills: "مهاراتي",
    experience: "الخبرة",
    education: "التعليم",
    services: "الخدمات"
  }
};