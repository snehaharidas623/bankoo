import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  curentuser=''
  curentacno=''

  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0,transaction:[] },
    1001: { acno: 1001, username: "anal", password: 123, balance: 0, transaction:[]},
    1002: { acno: 1002, username: "aeu", password: 123, balance: 0 ,transaction:[]},
    1003: { acno: 1003, username: "sas", password: 123, balance: 0 ,transaction:[]}

  }
  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0 ,transaction:[]}
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in this.userDetails) {
      if (psw == this.userDetails[acno]["password"]) {
        //acno
        this.curentacno=userDetails[acno]["acno"]
        //srote username
       this.curentuser=userDetails[acno]["username"]
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  deposite(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
        userDetails[acno]["transaction"].push({type:'CREIT',amount:amnt})

        return userDetails[acno]["balance"]
      }
      else {
        return false
      }

    }
    else {
      return false
    }

  }

  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (amnt <= userDetails[acno]["balance"]) {


          userDetails[acno]["balance"] -= amnt
          userDetails[acno]["transaction"].push({type:'DEBIT',amount:amnt})
          return userDetails[acno]["balance"]
        }
        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incorrect psw ')
        return false
      }

    }
    else {
      alert('incorect acno')
      return false
    }


  }

  transaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

}
