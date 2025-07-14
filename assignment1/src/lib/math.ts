import _ from 'lodash';

export function add(num1 : number, num2: number): number{
    return _.add(num1, num2);
}

export function sub(num1 : number, num2 : number) : number{
    return _.subtract(num1, num2);
}

export function mult(num1 : number, num2: number): number{
    return _.multiply ? _.multiply(num1, num2) : num1 * num2;
}

export function div(num1 :number, num2: number): number|null{
    return num2 !== 0 ? num1/num2 : null; 
}