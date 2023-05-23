import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { profile } from '../modues/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {
  form!: FormGroup;
  profile!: profile;
  imageData!: string;
  loading = false;
  rememberMeChecked = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone_number: new FormControl(null, Validators.required),
      educational_qualification: new FormControl(null, Validators.required),
      degree: new FormControl(null, Validators.required),
      years_of_experience: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  onFileSelect(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.form.patchValue({ image: file });
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      let message: string = "Please fill in all the details";
      console.log(`${message}`);
      return;
    } else {
      this.loading = true;
      const formData = new FormData();
      formData.append("name", this.form.value.name);
      formData.append("age", this.form.value.age);
      formData.append("email", this.form.value.email);
      formData.append("phone_number", this.form.value.phone_number);
      formData.append("educational_qualification", this.form.value.educational_qualification);
      formData.append("degree", this.form.value.degree);
      formData.append("years_of_experience", this.form.value.years_of_experience);
      formData.append("image", this.form.value.image);
      this.profileService.addProfile(formData);

      if (this.form.value.rememberMe) {
        localStorage.setItem('userCredentials', JSON.stringify({
          name: this.form.value.name,
          age: this.form.value.age,
          email: this.form.value.email,
          phone_number: this.form.value.phone_number,
          educational_qualification: this.form.value.educational_qualification,
          years_of_experience: this.form.value.years_of_experience,
          image: this.form.value.image
        }));
      }

      setTimeout(() => {
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/next-page']);
      }, 2000);
    }
  }

  onRememberMeChange() {
    this.rememberMeChecked = this.form.value.rememberMe;
  }
  loadRememberedCredentials() {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    if (userCredentials.email) {
      this.form.patchValue({
        name: userCredentials.name,
        age: userCredentials.age,
        email: userCredentials.email,
        phone_number: userCredentials.phone_number,
        educational_qualification: userCredentials.educational_qualification,
        years_of_experience: userCredentials.years_of_experience,
        rememberMe: true
      });
      this.rememberMeChecked = true;
    }
  }
}

