import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private CharactersService: CharactersService, private router: Router) { }

  ngOnInit() {
    this.CharactersService.getCharacters().subscribe(data => {
      console.log(data)
      this.characters = data;
    });
  }

  redirect(id:string) {
    this.router.navigate(['/more/'+id]);
  }
}
