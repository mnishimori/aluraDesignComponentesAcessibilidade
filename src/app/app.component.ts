import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ti1tle = 'a11y-p1';
  form: FormGroup = null;

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      yesNoAnswer: ['no']
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
