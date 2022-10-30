export class Feedback {
    id: number = 0;
    textt: string = '';
    anonymity: boolean = false;
    user: string = 'Korisnik'
    privatisation: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.textt = obj.textt;
            this.anonymity = obj.anonymity;
            this.user = obj.user;   
            this.privatisation = obj.privatisation;      
        }
    }
}
