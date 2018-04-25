import {Injectable, OnInit} from '@angular/core';
import {HttpClient,  HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService  implements OnInit {
  public showDetails = [];
  private token;
  private options;
  private _apiUrl: string = environment.baseApiUrl + '/api/v1/auth';
  private _siteUrl = environment.siteUrl;
  constructor(private http: HttpClient) {


    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });
    // let headers = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI2YzAxOGIyMzNmZTJlZWY0N2ZlZGJiZGQ5Mzk4MTcwZmM5YjI5ZDgifQ.eyJhenAiOiIxMDYyOTU3ODk1MTE0LThsNW00Zjk0ZWNscDdyZW9hNDk4OWlma2Fxbm9pcGYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTA2Mjk1Nzg5NTExNC04bDVtNGY5NGVjbHA3cmVvYTQ5ODlpZmthcW5vaXBmMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDI1NTcxNzI2NTg2MzQ5MzE5OCIsImVtYWlsIjoid2hvc2hha2hhd2F0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiencwRmtYbnZ4d2RtS3QtLWpRa1l4ZyIsImV4cCI6MTUxNzA0MTQxNywiaXNzIjoiYWNjb3VudHMuZ29vZ2xlLmNvbSIsImlhdCI6MTUxNzAzNzgxN30.UCQpzn3eiimq6FUAIkhRKWZZuAOiM5T9mEwPvJenDic7qqvtutB_kjidPcKL0jkuHlh96N55lta6w9XGhRNUv3tOfF2dpfJzdDuHqvV91Nwt8m8hOWLVTRmRRAIF-5pW2MXOAqzCtwBBGCjo00POkBPvIdvdAIgvsESiGjZuMSWhovVUIJsc4OS8UHJ8nNi_M6U9n3J4EXD4elBqJNscXbLQU5G6A997b6hzrnWadOBUvIo0ymy2SQ5olgPuyT9NHtk5y1F0t3NIK1AjERrXaonTQACgZ4HnsvalF0a8T10iVTGsMALQaLOTCu5fMbCcDpiJ5UrNic7LNrKwdAs6xA'});
    this.options = new HttpHeaderResponse({ headers: headers });
  }

  ngOnInit() {}

  chkLoggedin() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    return false;
  }

  getCurrentUserName(): string {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }





  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  getCurrentUser(): Observable<any> {
    // get users from api
    return this.http.get(this._apiUrl + '/current-user/', this.options);
  }


  // getMyApplication(applications: Application[]): Application {
  //   if (applications) {
  //     for ( let application in applications) {
  //       if (applications[application].UserName === this.getCurrentUserName()) {
  //         return applications[application];
  //       }
  //     }
  //   }
  //   return {};
  // }
  //
  //
  // findSkill(Name, existingSkillsIDs): Observable<any> {
  //   return this.http.get(this._apiUrl + '/find-skill/' + Name + '/' + existingSkillsIDs, this.options);
  // }
  // getSkillSets(catID): Observable<any> {
  //   return this.http.get(this._apiUrl + '/get-skill-sets/' + catID, this.options);
  // }
  // getCurrentUserWithRelatedData(): Observable<any> {
  //   // get users from api
  //   return this.http.get(this._apiUrl + '/user-full/' + this.getCurrentUserName() , this.options);
  // }
  // getCurrentUserPrivate(): Observable<any> {
  //   // get users from api
  //   return this.http.get(this._apiUrl + '/user-private/', this.options);
  // }
  //
  // getUserByUsername(uname: string): Observable<any> {
  //   // get users from api
  //   return this.http.get(this._apiUrl + '/user/' + uname , this.options);
  // }
  // getApplicationById(id: number): Observable<any> {
  //   return this.http.get(this._apiUrl + '/applications/' + id, this.options);
  // }
  // getMainCategories(): Observable<any> {
  //   // get CategoryJson from api
  //   return this.http.get(this._apiUrl + '/categories', this.options);
  // }
  // getPreferredCategories(): Observable<any> {
  //     // get CategoryJson from api
  //     return this.http.get(this._apiUrl + '/preferred-categories', this.options);
  //   }
  //
  // getJobs(offset): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/jobs/' + offset, this.options);
  // }
  // getJobByUrl(title: string): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/job/' + title, this.options);
  // }
  // getJobById(id): Observable<any> {
  //   return this.http.get(this._apiUrl + '/job-by-id/' + id, this.options);
  // }
  // getLovedJobs(offset): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/loved/jobs/' + offset, this.options);
  // }
  // getJobsByCategory(cat: string, offset: number): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/category/' + cat + '/' + offset, this.options);
  // }
  // getJobsByFeed(feed: string): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/job-feed/' + feed, this.options);
  // }
  //
  // getJobsByUsername(username: string, offset: number): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/timeline/' + username + '/' + offset, this.options);
  // }
  //
  // getMyAppliedJobs(offset: number): Observable<any> {
  //   // get public Jobs from api
  //   return this.http.get(this._apiUrl + '/my/applied-jobs/' + offset, this.options);
  // }
  // getMyHiredJobs(offset: number): Observable<any> {
  //     // get public Jobs from api
  //     return this.http.get(this._apiUrl + '/my/hired-jobs/' + offset, this.options);
  // }
  // getMyCompletedJobs(offset: number): Observable<any> {
  //       // get public Jobs from api
  //       return this.http.get(this._apiUrl + '/my/completed-jobs/' + offset, this.options);
  // }
  // getSearchJobs(key: string): Observable<any> {
  //       // get public Jobs from api
  //       return this.http.get(this._apiUrl + '/search-jobs/' + key, this.options);
  // }
  // getMyIncomeSummery(): Observable<any> {
  //       // get public Jobs from api
  //       return this.http.get(this._apiUrl + '/my/income-summery/', this.options);
  // }
  // getMySpentSummery(): Observable<any> {
  //       // get public Jobs from api
  //       return this.http.get(this._apiUrl + '/my/spent-summery/', this.options);
  // }
  // getMyCancelledJobs(offset: number): Observable<any> {
  //         // get public Jobs from api
  //         return this.http.get(this._apiUrl + '/my/cancelled-jobs/' + offset, this.options);
  //     }
  //
  // getMyChatPear(): Observable<any> {
  //   return this.http.get(this._apiUrl + '/chat/chatpear', this.options);
  // }
  // chatRegardingApplications(): Observable<any> {
  //   return this.http.get(this._apiUrl + '/chat-regarding-applications/', this.options);
  // }
  // loadChatByApplication(application, limit, lastobjectid): Observable<any> {
  //   return this.http.get(this._apiUrl + '/mchat/load?applicationId=' + application.ID + '&limit=' + limit + '&lastobjectid=' + lastobjectid, this.options);
  // }
  // // chatRead(appId) {
  // //   return this.http.get(this._apiUrl + '/chat/read/' + appId , this.options);
  // // }
  // // mongodb chat
  // mChatRead(appId) {
  //   return this.http.get(this._apiUrl + '/mchat/read/' + appId , this.options);
  // }
  //
  // getCountries() {
  //   return this.http.get(this._siteUrl + '/assets/data/country.json');
  // }
  // countUnreadChatsByApplicationID(appId) {
  //   return this.http.get(this._apiUrl + '/mchat/unread-chat-total/' + appId , this.options);
  // }
  //
  // checkUserNameExist(userName) {
  //   return this.http.get(environment.baseApiUrl + '/auth/check-username-exist/' + userName);
  // }
  //
  // checkMobileNuberExist(mobile) {
  //   return this.http.get(environment.baseApiUrl + '/auth/check-mobile-exist/' + mobile);
  // }
  //
  //
  // registration(reg) {
  //   return this.http.post(environment.baseApiUrl + '/auth/registration', reg);
  // }
  // otp() {
  //   return this.http.get(this._apiUrl + '/generate/otp', this.options);
  // }
  // userOtpVerify(otpdata) {
  //   return this.http.post(environment.baseApiUrl + '/auth/otpverify', otpdata);
  // }
  // makeLoved(job): Observable<any> {
  //   return this.post('/makelove/', {JobID: job.ID});
  // }
  // apply(jsonData) {
  //   return this.post('/applications/', jsonData);
  // }
  // createJob(job) {
  //   return this.post('/jobs/', job);
  // }
  // chatNow(chat) {
  //   return this.post('/chat/now/', chat);
  // }
  // hireNow(hiredata) {
  //   return this.post('/hire/now/', hiredata);
  // }
  // agreeHire(agreeData) {
  //   return this.post('/hire/now/agree', agreeData);
  // }
  // endContract(hireStat) {
  //   return this.post('/hire/now/end-contract', hireStat);
  // }
  // buyerReviewNow(review) {
  //   return this.post('/hire/now/end-contract/buyer-review', review);
  // }
  // applicantReviewNow(review) {
  //   return this.post('/hire/now/end-contract/applicant-review', review);
  // }
  // mchatNow(chat) {
  //   return this.post('/mchat/now/', chat);
  // }
  // userBasicEdit(data) {
  //   return this.post('/user-basic-edit/', data);
  // }
  // addSkillToProfile(data) {
  //   return this.post('/user-skill-add-to-profile/', data);
  // }
  // userProfileEdit(data) {
  //   return this.post('/user-profile-edit/', data);
  // }
  // userPreferredCatEdit(data) {
  //   return this.post('/user-pref-cat-edit/', data);
  // }
  // deleteMyCategory(cat) {
  //   return this.post('/delete-my-cat-by-id/' , cat);
  // }
  // deleteMySkill(skill) {
  //   return this.post('/delete-my-skill-by-id/' , skill);
  // }
  // deleteMyExperties(exp) {
  //   return this.post('/delete-my-experties/' , exp);
  // }
  // deleteMyEducation(edu) {
  //   return this.post('/delete-my-education/' , edu);
  // }
  // deleteMyExperience(exp) {
  //   return this.post('/delete-my-experience/' , exp);
  // }
  // deleteMyTraining(training) {
  //   return this.post('/delete-my-training/' , training);
  // }
  // userExpertiesEdit(experties) {
  //   return this.post('/user-experties-edit/' , experties);
  // }
  // userEducationEdit(education) {
  //   return this.post('/user-education-edit/' , education);
  // }
  // userExperienceEdit(experience) {
  //   return this.post('/user-experience-edit/' , experience);
  // }
  // userTrainingEdit(training) {
  //   return this.post('/user-training-edit/' , training);
  // }
  // userNPBEdit(npb) {
  //   return this.post('/user-npb-edit/' , npb);
  // }
  // post(url, json): any {
  //   return this.http.post(this._apiUrl + url, json, this.options);
  // }
  //
  //
  //
  // // helper functions
  // // datetime converter
  // readableDateTime(datetime) {
  //   return moment(datetime).add(24, 'hours').format('LLL');
  // }
  // limited words
  // excertp_view(para: string, num: number, excert: boolean ): any {
  //   if ( excert ) {
  //     return para;
  //   }
  //   if (para) {
  //     const splited = para.split(' ', num ? num : 3 );
  //     const joined = splited.join(' ');
  //     return joined ;
  //   }
  // }
  // showMoreBtn(para: string, num: number ): any {
  //
  //     if (para) {
  //       const splitedWordCount = para.split(' ').length;
  //       if (splitedWordCount > num) {
  //         return true;
  //       }
  //     }
  //   return false;
  // }
  //
  // // count objects item
  // countJsonObj(obj): number {
  //   if (obj) {
  //     return Object.keys(obj).length;
  //   } else {
  //     const num = 0;
  //     return num;
  //   }
  // }
  // // job ownership varify
  // isMyJob(job: Job): boolean {
  //   if (job.UserName === this.getCurrentUserName()) {
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }

  conditionToShow(a, b): boolean {
    let val = false;
    if (a) {
      val = true;
    } else if (b) {
      val = true;
    }
    return val;
  }
}
