import { Component } from '@angular/core';
import { Project } from '../../model/project';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html'
})
export class AddProjectComponent {

  public project: Project = { name: 'Default', url: 'default.com', likes: 0 ,
  content: `You know, I sometimes think, how is anyone ever gonna come up with a book,
   or a painting, or a symphony, or a sculpture that can compete with a great city. You can’t.
    Because you look around and every street, every boulevard, is its own special art form and when you think
    that in the cold, violent, meaningless universe that Paris exists, these lights. I mean come on,
    there’s nothing happening on Jupiter or Neptune, but from way out in space you can see these lights, the cafés,
    people drinking and singing. For all we know, Paris is the hottest spot in the universe.`};

  constructor(public viewCtrl: ViewController) {

  }
  dismiss() {
   this.viewCtrl.dismiss(this.project);
 }
}
