import { HomePage } from './HomePage';
import { LearningRecordsPage } from './LearningRecordsPage';

export class POManager {

  constructor(page) {
    this.page = page;
    this._homePage = new HomePage(this.page);
    this._learningRecordsPage = new LearningRecordsPage(this.page);
  }
  
    homepage(){
    return this._homePage;
  }

    learningRecordsPage(){
    return this._learningRecordsPage;
  }

}