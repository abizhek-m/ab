import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { profile } from '../modues/profile';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: profile[] = [];
  private profiles$ = new Subject<profile[]>();
  readonly url = "http://localhost:3000/api/profiles";

  constructor(private http: HttpClient) { }

  private rememberMe(formData: any) {
    if (formData.rememberMe) {
      localStorage.setItem('profileFormData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('profileFormData');
    }
  }

  private getRememberedFormData() {
    const rememberedData = localStorage.getItem('profileFormData');
    if (rememberedData) {
      return JSON.parse(rememberedData);
    }
    return null;
  }

  clearRememberedFormData() {
    localStorage.removeItem('profileFormData');
  }
  addProfile(formData: any): void {
    const profileData = new FormData();
    profileData.append("name", formData.name);
    profileData.append("image", formData.image, formData.name);
    profileData.append("age", formData.age);
    profileData.append("email", formData.email);
    profileData.append("education", formData.educational_qualification);
    profileData.append("degree", formData.degree);
    profileData.append("contact number", formData.phone_number);

    this.http
      .post<{ profile: profile }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: profile = {
          _id: profileData.profile._id,
          name: formData.name,
          imagePath: profileData.profile.imagePath,
          age:formData.age,
          email:formData.email,
          phone_number:formData.phone_number,
          educational_qualification:formData.educational_qualification,
          degree:'',
          years_of_experience:formData.years_of_experience
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
      this.rememberMe(formData);
  }
  prefillFormWithRememberedData() {
    const rememberedData = this.getRememberedFormData();
    if (rememberedData) {
      this.clearRememberedFormData(); 
      return rememberedData;
    }
    return null;
  }
}

