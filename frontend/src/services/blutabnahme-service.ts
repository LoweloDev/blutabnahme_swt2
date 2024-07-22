import {Blutabnahme} from "../models/blutabnahme";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";


@Injectable(
  {providedIn: 'root'}
)
export class BlutabnahmeService {
constructor(private http: HttpClient) {}

  getAll(): Observable<Blutabnahme[]> {
    return this.http.get<Blutabnahme[]>(`${environment.apiUrl}/blutabnahme`);
  }

  get(id: string): Observable<Blutabnahme> {
    return this.http.get<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`);
  }

  create(blutabnahme: Blutabnahme): Observable<Blutabnahme> {
    return this.http.post<Blutabnahme>(`${environment.apiUrl}/blutabnahme`, blutabnahme);
  }

  createBatch(blutabnahmen: Blutabnahme[]): Observable<Blutabnahme[]> {
    return this.http.post<Blutabnahme[]>(`${environment.apiUrl}/blutabnahme/batch`, blutabnahmen);
  }

  update(id: string, blutabnahme: Blutabnahme): Observable<Blutabnahme> {
    return this.http.put<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`, blutabnahme);
  }

  delete(id: string): Observable<Blutabnahme> {
    return this.http.delete<Blutabnahme>(`${environment.apiUrl}/blutabnahme/${id}`);
  }
}
