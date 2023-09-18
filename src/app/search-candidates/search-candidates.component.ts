import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface Interview {

  id: string;

  empId: number;

  employeeName: string;

  email: string;

  projectName: string;

  projectCode: string;

  projectManager: string;

  projectLocation: string;

  interviewed: boolean;

  interviewDate: Date;

  feedback: string;

  feedbackDescription: string;

  comment: string;

  feedbackAttachment: string;

  proposedDate: Date;

  mentorName: string;

  status: string;

}

@Component({
  selector: 'app-search-candidates',
  templateUrl: './search-candidates.component.html',
  styleUrls: ['./search-candidates.component.css']
})
export class SearchCandidatesComponent implements OnInit {
  // selectedSearchCriteria: string = 'empId';
  // searchValue: string = '';
  // searchResults: any[] = [];
  // apiUrls: { [key: string]: string } = {
  //   empId: 'http://localhost:8089/interviews/byEmpId',
  //   empName: 'http://localhost:8089/interviews/byEmployeeName',
  //   email: 'http://localhost:8089/interviews/byEmail',
  // };

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.fetchCandidates();
  // }

  // onSearchCriteriaChange(): void {
  //   this.fetchCandidates();
  // }

  // onSearchValueChange(): void {
  //   this.fetchCandidates();
  // }

  // fetchCandidates(): void {
  //   const apiUrl = this.apiUrls[this.selectedSearchCriteria];
    
  //   const params = new HttpParams().set(this.selectedSearchCriteria, this.searchValue);

  //   this.http.post<any[]>(apiUrl, { params }).subscribe(data => {
  //     this.searchResults = data;
  //   });
  // }

  

ngOnInit(): void {}

 

  // Define the onSearchCriteriaChange method to handle the select change event

  onSearchCriteriaChange(): void {

    // Handle the change here

  }

 

  // Define the onSearchValueChange method to handle the input change event

  onSearchValueChange(): void {

    // Handle the change here

  }

  selectedSearchCriteria: string = 'empId'; // Default search criteria

  searchValue: string = '';

  searchResults: Interview[] = [];

 

  // Define the API URLs

  private apiUrls: { [key: string]: string } = {

    empId: 'http://localhost:8089/interviews/byEmpId',

    empName: 'http://localhost:8089/interviews/byEmployeeName',

    email: 'http://localhost:8089/interviews/byEmail',

    mentorName: 'http://localhost:8089/interviews/byMentorName'

  };

 

  constructor(private http: HttpClient) {}

 

  fetchCandidates() {

    const apiUrl = this.apiUrls[this.selectedSearchCriteria];

    let requestPayload: any = {};

 

    switch (this.selectedSearchCriteria) {

      case 'empId':

        requestPayload = { empId: parseInt(this.searchValue) };

        break;

      case 'empName':

        requestPayload = { employeeName: this.searchValue };

        break;

      case 'email':

        requestPayload = { email: this.searchValue };

        break;

      case 'mentorName':

        requestPayload = { mentorName: this.searchValue };

        break;

      default:

        // Handle the default case or show an error message

        break;

    }

 

    this.http.post<Interview[]>(apiUrl, requestPayload).subscribe(

      (data) => {

        this.searchResults = data;

      },

      (error) => {

        console.error('Error fetching candidates:', error);

        // Handle errors

      }

    );

  }



}
