import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

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
		projectName: new FormControl(null, [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		projectStatus: new FormControl(0, [Validators.min(1)]),
		})
  }
  onSubmit(){
    console.log(this.detailForm)
  }
}
