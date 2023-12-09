import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-one',
  standalone: true,
  imports: [],
  templateUrl: './see-one.component.html',
  styleUrl: './see-one.component.css'
})
export class SeeOneComponent implements OnInit {
  characters: any;
  id: string = '1';

  constructor(private CharactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.CharactersService.getCharacter(this.id).subscribe(data => {
      this.characters = data;
    });
  }

}
