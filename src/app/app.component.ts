import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public error = {
	// 	email: 'common_validation_format_email',
	// 	required: 'common_validation_required_info',
	// 	duplicatedEmail: 'common_validation_duplicated_email',
	// 	duplicatedCompany: 'common_validation_duplicated_company',
	// 	duplicatedName: 'common_validation_duplicated_name',
	// 	duplicatedPhone: 'common_validation_duplicated_phone',
	// 	duplicatedDomain: 'common_validation_duplicated_domain',
	// 	tel: 'common_validation_format_tel',
	// }

	statusLists: string[] = ['Stable', 'Critical', 'Finished']
	// forbiddenUsernames = ['Test'];
	submitted = false;
  public detailForm: FormGroup

	get email() {
		return this.detailForm.get('email')
	}

	get projectName() {
		return this.detailForm.get('projectName')
	}

	get projectStatus() {
		return this.detailForm.get('projectStatus')
	}
  
  constructor(){
    this.detailForm = new FormGroup({
		projectName: new FormControl(null, [Validators.required, this.forbiddenNames]),
		email: new FormControl('', [Validators.required, Validators.email],this.forbiddenEmails),
		projectStatus: new FormControl(0, [Validators.min(1), Validators.required]),
		})
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { nameIsForbidden: true };
    }
    return null;
  }
  onSubmit(){
	this.submitted = true;
    // console.log(this.email.errors)
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
