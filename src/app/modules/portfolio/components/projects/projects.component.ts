import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { BackService } from '../../services/back.service';
import { IDocuments } from '../../interface/IDocuments.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayFiltered: IDocuments[] = [];
  public arrayProjects: IDocuments[] = [];

  constructor(private BackService: BackService) {}

  public arrayProjectsOld = signal<IProjects[]>([
    {
      type: 'Projeto',
      title: 'Projeto 01',
      description:
        'Este é um projeto com intuito de criar um portfolio com uma wiki para que possamos ser mais claros sobre nossas especialidades, tornando o processo de pesquisa de perfil mais eficiente.',
      link: 'https://docs.google.com/document/d/e/2PACX-1vSM0JiPD_Rx4rz_2er4HKLeB6Jz8pUBp5Pp6_xSWbvA6mJwhUvN4uwXvXu9tJmf7bJGz8RjGpXyIle3/pub',
    },
    {
      type: 'Paper',
      title: 'Paper 01',
      description:
        'Este é um projeto com intuito de criar um portfolio com uma wiki para que possamos ser mais claros sobre nossas especialidades, tornando o processo de pesquisa de perfil mais eficiente.',
      link: '',
    },
    {
      type: 'Procedimento',
      title: 'Procedimento 01',
      description:
        'Este é um projeto com intuito de criar um portfolio com uma wiki para que possamos ser mais claros sobre nossas especialidades, tornando o processo de pesquisa de perfil mais eficiente.',
      link: '',
    },
  ]);
  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log('search');
    this.arrayFiltered = this.arrayProjects.filter((arrayFiltered) => {
      return arrayFiltered.title.toLowerCase().includes(value.toLowerCase());
    });
  }

  public setTypeDocColor(docType: string) {
    switch (docType) {
      case 'Projeto':
        return '#FFE4E1';
      case 'Procedimento':
        return '#7FFFD4';
      case 'Paper':
        return '#B0E0E6';
      default:
        return '#D3D3D3';
    }
  }

  getDocs() {
    this.BackService.getDocs().subscribe((data: IDocuments[]) => {
      this.arrayProjects = data;
      this.arrayFiltered = this.arrayProjects;
    });
  }

  ngOnInit() {
    this.getDocs();
  }

  public handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Impede a ação padrão do evento (atualização da tela)
      console.log('handleKeyPress');
      this.search(event); // Chama a função de busca
    }
  }
}
