import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToggleService {
  status: boolean = false;

  toggleStatus() {
    this.status = !this.status;
  }

  constructor() {}
}
