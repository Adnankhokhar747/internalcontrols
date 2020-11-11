import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class Loginservice {
  constructor(public globals: Globals) {
    
    
  }
  async signIn(data) {
    const url = this.globals.APP_URL+"signIn";
     const response = await axios.post(url, data).then(
    );
    return response;
  }

  async getUserData(data) {
    const url = this.globals.APP_URL+"/data/getData";
     const response = await axios.post(url, data).then(
    );
    return response;
  }
}
