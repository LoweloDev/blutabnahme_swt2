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
    return this.http.get<Probe[]>(`${environment.apiUrl}/probe`);
  }
  get(id: string) {
    return this.http.get<Probe>(`${environment.apiUrl}/probe/${id}`);
  }
  create(probe: Probe) {
    return this.http.post<Probe>(`${environment.apiUrl}/probe`, probe);
  }
  update(id: string, probe: Probe) {
    return this.http.put<Probe>(`${environment.apiUrl}/probe/${id}`, probe);
  }
  delete(id: string) {
    return this.http.delete<Probe>(`${environment.apiUrl}/probe/${id}`);
  }
}
