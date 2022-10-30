import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Feedback } from "../../home/model/feedback.model";

@Injectable()
export class WelcomePageService {

    apiHost: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


    constructor(private http: HttpClient) {}

    getFeedbacksPublic() : Observable<Feedback[]> {
        return this.http.get<Feedback[]>(this.apiHost + 'api/feedbacks/feedbacksPublic', {headers: this.headers});
    }
}