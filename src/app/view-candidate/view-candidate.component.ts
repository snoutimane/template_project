import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../Models/interview';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {
  candidates: Interview[] = [];
  

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.fetchInterviews();
  }

  fetchInterviews() {
    // Make an HTTP GET request to your Spring Boot backend API
    this.http.get<Interview[]>('http://localhost:8089/interviews/all').subscribe(
      (response) => {
        this.candidates = response;
        console.log('Interviews:', this.candidates);
      },
      (error) => {
        console.error('Error fetching interviews:', error);
      }
    );
  }
  deleteCandidate(candidate: any) {
    const empId = candidate.empId; // Get the empId of the candidate you want to delete
  
    // Make an HTTP DELETE request with the correct URL
    this.http.delete(`http://localhost:8089/interviews/delete/${empId}`, { responseType: 'text' })
      .subscribe(
        (response) => {
          if (response === 'Interview deleted successfully') {
            // Show an alert
            alert(`Candidate with empId ${empId} deleted successfully!`);
            
            // Reload the current route
            this.router.navigateByUrl('/view', { skipLocationChange: true }).then(() => {
              this.router.navigate(['view']);
            });
          } else {
            console.error(`Error deleting candidate with empId ${empId}: Unexpected response`);
            // Handle unexpected responses here
          }
        },
        (error) => {
          console.error(`Error deleting candidate with empId ${empId}:`, error);
          // Handle errors here
        }
      );
  }
}
