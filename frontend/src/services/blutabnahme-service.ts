import {Blutabnahme} from "../models/blutabnahme";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";


@Injectable()
export class BlutabnahmeService {
constructor(private http: HttpClient) {}

  getBlutabnahmen(): Observable<Blutabnahme[]> {
    return this.http.get<Blutabnahme[]>(`${environment.apiUrl}/blutabnahme`);
  }

  getBlutabnahme(id: string): Observable<Blutabnahme> {
    return this.http.get<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`);
  }

  createBlutabnahme(blutabnahme: Blutabnahme): Observable<Blutabnahme> {
    return this.http.post<Blutabnahme>(`${environment.apiUrl}/blutabnahme`, blutabnahme);
  }

  updateBlutabnahme(id: string, blutabnahme: Blutabnahme): Observable<Blutabnahme> {
    return this.http.put<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`, blutabnahme);
  }

  deleteBlutabnahme(id: string): Observable<Blutabnahme> {
    return this.http.delete<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`);
  }
}
