import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "./globals";


@Injectable({ providedIn: "root" })
export class Appservice {
  constructor(public globals: Globals) {  
 
  }

  async signIn(data) {
    const url = this.globals.APP_URL+"/signIn";
    alert("here in appservice line 14")
     const response = await axios.post(url, data).then(
    );
    alert(JSON.stringify(response));
    return response;
  }

  async signUp(data) {
    const url = this.globals.APP_URL+"/saveUser";
     const response = await axios.post(url, data).then(
    );
    alert(JSON.stringify(response));
    return response;
  }
}