import { HomePage } from './HomePage.js';
import { LearningRecordsPage } from './LearningRecordsPage.js';
import { ContentCataloguePage } from './ContentCataloguePage.js';

export class POManager {

  constructor(page) {
    this.page = page;
    this._cache = {};
  }

  _get(key, PageClass) {
    if (!this._cache[key]) {
      this._cache[key] = new PageClass(this.page);
    }
    return this._cache[key];
  }
  
  get homePage()            { return this._get('homePage', HomePage); }
  get learningRecordsPage() { return this._get('learningRecordsPage', LearningRecordsPage); }
  get contentCataloguePage() { return this._get('contentCataloguePage', ContentCataloguePage); }

}