import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/pwiki.png',
      alt: 'Imagem do projeto pwiki',
      type: 'Projeto',
      sortTitle: 'Portifólio with Wiki',
      title: 'Portifólio with Wiki',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      type: 'Procedimento',
      sortTitle: 'TITLE',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      type: 'Paper',
      sortTitle: 'TITLE',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      type: 'Projeto',
      sortTitle: 'TITLE',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      type: 'Procedimento',
      sortTitle: 'TITLE',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      type: 'Projeto',
      sortTitle: 'TITLE',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      description: 'DESCRIPTION',
      links: [
        {
          name: 'LINKS.NAME',
          href: 'LINKS.HREF',
        },
      ],
    },
  ]);
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  };
  public setTypeDocColor(docType: string) {
    switch (docType) {
      case "Projeto":
        return "#FFE4E1";
      case "Procedimento":
        return "#7FFFD4";
      case "Paper":
        return "#B0E0E6";
      default:
        return "#D3D3D3";
    }
  }
}

