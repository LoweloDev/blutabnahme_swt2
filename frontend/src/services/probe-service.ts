import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Probe} from "../models/probe";

@Injectable({
  providedIn: 'root'
})
export class ProbeService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`${environment.apiUrl}/api/probe`);
  }
  get(id: string) {
    return this.http.get(`${environment.apiUrl}/api/probe/${id}`);
  }
  create(probe: Probe) {
    return this.http.post(`${environment.apiUrl}/api/probe`, probe);
  }
  update(id: string, probe: Probe) {
    return this.http.put(`${environment.apiUrl}/api/probe/${id}`, probe);
  }
  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/api/probe/${id}`);
  }
}
