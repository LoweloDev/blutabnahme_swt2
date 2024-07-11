import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {environment} from "../environments/environment";
import {Laborauftrag} from "../models/laborauftrag";


@Injectable(
  {providedIn: 'root'}
)
export class LaborauftragService {
constructor(private http: HttpClient) {}
  getLaborauftraege(): Observable<Laborauftrag[]> {
      return this.http.get<Laborauftrag[]>(`${environment.apiUrl}/laborauftrag`);
}

    getLaborauftrag(id: string): Observable<Laborauftrag> {
      return this.http.get<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`);
    }

    createLaborauftrag(laborauftrag: Laborauftrag): Observable<Laborauftrag> {
      return this.http.post<Laborauftrag>(`${environment.apiUrl}/laborauftrag`, laborauftrag);
    }

    updateLaborauftrag(id: string, laborauftrag: Laborauftrag): Observable<Laborauftrag> {
      return this.http.put<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`, laborauftrag);
    }

    deleteLaborauftrag(id: string): Observable<Laborauftrag> {
      return this.http.delete<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`);
    }
}
