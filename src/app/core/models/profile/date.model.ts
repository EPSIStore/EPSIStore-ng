export class DateModel{
    year : number;
    month : number;
    day : number;
    hour : number;
    minute : number;
    second : number;

    constructor(){
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }

    static timestampToDate(timestamp : string) : DateModel {
      var date : DateModel = new DateModel;
      const firstCut = timestamp.split('-');
      date.year = Number(firstCut[0]);
      date.month = Number(firstCut[1]);
      const secondCut = firstCut[2].split('T');
      date.day = Number(secondCut[0]);
      const thirdCut = secondCut[1].split(':');
      date.hour = Number(thirdCut[0]);
      date.minute = Number(thirdCut[1]);
      date.second = Number(thirdCut[2].split('.')[0]);
      return date;
    }

    earlierThan(date2 : DateModel) : boolean{
        if(this.year < date2.year){
            return true;
        }
        if(this.month < date2.month){
            return true;
        }
        if(this.day < date2.day){
            return true;
        }
        if(this.hour < date2.hour){
            return true;
        }
        if(this.minute < date2.minute){
            return true;
        }
        if(this.second < date2.second){
            return true;
        }
        return false;
    }

    private valueToString(value : number) : string{
        if(value < 10){
            return "0" + value;
        }
        return "" + value;
    }

    toString() : string{
        return `${this.valueToString(this.hour)}:${this.valueToString(this.minute)}:${this.valueToString(this.second)}  ${this.valueToString(this.day)}/${this.valueToString(this.month)}/${this.year}`;
    }
}