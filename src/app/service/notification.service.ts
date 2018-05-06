import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class NotificationService {
    subject:BehaviorSubject<any> = new BehaviorSubject<any>(false);


    connect(){
        return this.subject.asObservable();
    }

    notify(){
        this.subject.next(true);
    }
}