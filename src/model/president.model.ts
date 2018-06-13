export class President{
    public name: string;
    public birthDay: Date;
    public birthPlace:string;
    public deathDay: Date;
    public deathPlace: string;

    constructor(p: string, bd: Date, bp: string, dd: Date, dp: string){
        this.name = p;
        this.birthDay =bd;
        this.birthPlace=bp;
        this.deathDay = dd;
        this.deathPlace = dp;
    }
}