export interface IProjects {
  src: string;
  alt: string;
  type: string;
  sortTitle: string;
  title: string;
  description: string;
  links: [
    {
      name: string;
      href: string;
    }
  ];
}
