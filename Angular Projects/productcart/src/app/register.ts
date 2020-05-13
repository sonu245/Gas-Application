import {Address} from './address';
export class Register{
    constructor(
        //public cid:number,
    public cname:string,
    public aadhar:number,
    public cemail:string,
    public cphone:number,
    public cpassword:string,
    public gasCategory:string,
    public address:Address
    ){

    }
}