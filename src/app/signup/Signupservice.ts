import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class Signupservice {
  constructor(public globals: Globals) {
    
    
  }

  async SignUp(data) {

    const url = this.globals.APP_URL+"saveUser";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }
}
