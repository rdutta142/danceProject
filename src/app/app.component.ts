import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  slideIndex = 0;
  title = 'app';

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.login();
  }

  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
    setTimeout(this.showSlides(), 2000); // Change image every 2 seconds
    }

    login(){
      

    }
  
    public ping() {
      this.http.get('https://example.com/api/things')
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
    }
}
