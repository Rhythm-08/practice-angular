import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder,FormArray} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  skillForm!:FormGroup

  constructor(private fb:FormBuilder) {
    this.initMyForm();

  }

  initMyForm(){
    this.skillForm=this.fb.group({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      skills:this.fb.array([])
    })
  }

  get skills(){
    return this.skillForm.get('skills') as FormArray;
  }
  newSkills():FormGroup{
    console.log(this.skills.controls);
    return this.fb.group({
      skill: [''],
      exp: ['']
    })
  }
  addSkill(){
    this.skills.push(this.newSkills());
   
  }
  removeSkill(i:number){
    this.skills.removeAt(i);
  }
  onSubmit(){
    console.log(this.skillForm.value);
  }


}
