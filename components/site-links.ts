export const navItems = [
  { href: "#home", label: "Início" },
  { href: "#services", label: "Serviços" },
  { href: "#projects", label: "Trabalhos" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" }
] as const;

export type ContactLinkId = "email" | "linkedin" | "github";

export const contactLinks = [
  {
    id: "email",
    href: "mailto:jordanog2002@gmail.com",
    label: "E-mail",
    value: "jordanog2002@gmail.com",
    description: "Canal mais direto para compartilhar contexto, escopo e próximos passos."
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/jordano-giacomet-tomazoni-aba346184/",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/jordano-giacomet-tomazoni-aba346184",
    description: "Bom para iniciar uma conversa profissional e manter o contato ativo."
  },
  {
    id: "github",
    href: "https://github.com/jordanogiacomet",
    label: "GitHub",
    value: "github.com/jordanogiacomet",
    description: "Perfil público com projetos, estudos e histórico de implementação."
  }
] as const satisfies ReadonlyArray<{
  id: ContactLinkId;
  href: string;
  label: string;
  value: string;
  description: string;
}>;
