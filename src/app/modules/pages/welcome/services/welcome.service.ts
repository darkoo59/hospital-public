import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFeedback } from "../feedback";

@Injectable()
export class WelcomePageService {

    private _feedbacksPublicURL = 'http://localhost:4200/api/feedbacksPublic';

    constructor(private _http: HttpClient) {}

    getFeedbacks() : Observable<IFeedback[]> {
        return this._http.get<IFeedback[]>(this._feedbacksPublicURL);
    }
}