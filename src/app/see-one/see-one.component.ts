import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private CharactersService: CharactersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.CharactersService.getCharacter(this.id).subscribe(data => {
      this.characters = data;
    });
  }

  delete(){
    this.CharactersService.delete(this.id).subscribe(data => {
      alert("Done");
      this.router.navigate(['/characters']);
    });
  }

}
