import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Probe} from "../models/probe";

@Injectable({
  providedIn: 'root'
})
export class ProbeService {
  constructor(private http: HttpClient) {}
  getProben() {
    return this.http.get(`${environment.apiUrl}/api/probe`);
  }
  getProbe(id: string) {
    return this.http.get(`${environment.apiUrl}/api/probe/${id}`);
  }
  createProbe(probe: Probe) {
    return this.http.post(`${environment.apiUrl}/api/probe`, probe);
  }
  updateProbe(id: string, probe: Probe) {
    return this.http.put(`${environment.apiUrl}/api/probe/${id}`, probe);
  }
  deleteProbe(id: string) {
    return this.http.delete(`${environment.apiUrl}/api/probe/${id}`);
  }
}
