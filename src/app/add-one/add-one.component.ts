import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-one.component.html',
  styleUrl: './add-one.component.css',
})
export class AddOneComponent implements OnInit {
  character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };
  submitted = false;

  constructor(
    private CharactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit() {}

  saveCharacter() {
    /*
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      image: this.character.image,
    };
    */
    this.CharactersService.create(this.character).subscribe(
      (response) => {
        console.log("AAAAAAAAAAa")
        console.log(this.character)
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newCharacter() {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    };
  }
}
