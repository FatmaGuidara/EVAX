import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../controllers/faq.service';
import { Faq } from '../../models/Faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private faqService : FaqService)  { }

  faqs!: Faq[];

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe(faqs=>{
      this.faqs=faqs;
    });
  }
  getAllFaqs(){
    this.faqService.getFaqs().subscribe(faqs=>{
      this.faqs=faqs;
    });
  }
  getFirstDose(){
    this.faqService.getFirstDose().subscribe(faqs=>{
      this.faqs=faqs;
    });
  }

  getSecondDose(){
    this.faqService.getSecondDose().subscribe(faqs=>{
      this.faqs=faqs;
    });
  }
  getTravellers(){
    this.faqService.getTravellers().subscribe(faqs=>{
      this.faqs=faqs;
    });
  }
}