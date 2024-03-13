import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/pwiki.png',
      alt: 'ALTXXXXXXXXXXXXXXXXXXXXX',
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
      title: 'TITLEXXXXXXXXXXXXXXXX',
      sortTitle: 'TITLE',
      width: '75px',
      height: '75px',
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
  }
  
}
