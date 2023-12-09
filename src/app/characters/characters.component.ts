import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private CharactersService: CharactersService, private router: Router) { }

  ngOnInit() {
    this.CharactersService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  redirect(id:string) {
    this.router.navigate(['/more/'+id]);
  }
}
