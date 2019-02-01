import moment from 'moment';

export default class Analizer{
    constructor(){
        // indexes of rules are moment.day() day corresponding
        this.rules = [[],[1,2],[3,4],[5,6],[7,8],[9,0],[]]
        this.ranges = [["07:00","09:30"],["16:00","19:30"]];
    }
    isInRange(value, range) {
        return value >= range[0] && value <= range[1];
    }
    picoPlaca(plate, datestring,time){
        const {rules, ranges, isInRange} = this;
        if((isInRange(time,ranges[0])|| isInRange(time,ranges[1])) && moment(datestring,["MM-DD-YYYY", "YYYY-MM-DD"]).isValid()){
            const day = moment(datestring,["MM-DD-YYYY", "YYYY-MM-DD"]).day();
            const last_digit = parseInt(plate[plate.length-1]);
            const current_rule = rules[day];
            return current_rule.indexOf(last_digit)>=0;
        }
        
        return false;
    }

}