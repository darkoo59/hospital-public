import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFeedback } from "./feedback";

@Injectable()
export class WelcomePageService {

    private _feedbacksPublicURL = 'http://localhost:4200/api/feedbacksPublic';

    constructor(private _http: HttpClient) {}

    // getFeedbacks() : Observable<IFeedback[]> {
    //     return this._http.get<IFeedback[]>(this._feedbacksPublicURL);

    getFeedbacks(): IFeedback[] {
        return [
            {
                "feedbackDate": Date.now(),
                "feedbackId": 1,
                "feedbackText": "Prvi feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            },
            {
                "feedbackDate": Date.now(),
                "feedbackId": 2,
                "feedbackText": "Drugi feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            },
            {
                "feedbackDate": Date.now(),
                "feedbackId": 3,
                "feedbackText": "Treci feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            }
        ];  //dummy podaci TODO: napraviti poziv backendu za podatke.
    }
}