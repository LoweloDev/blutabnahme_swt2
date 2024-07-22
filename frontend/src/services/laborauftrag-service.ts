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
  getAll(): Observable<Laborauftrag[]> {
      return this.http.get<Laborauftrag[]>(`${environment.apiUrl}/laborauftrag`);
}

    get(id: string): Observable<Laborauftrag> {
      return this.http.get<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`);
    }

    create(laborauftrag: Laborauftrag): Observable<Laborauftrag> {
      return this.http.post<Laborauftrag>(`${environment.apiUrl}/laborauftrag`, laborauftrag);
    }

    update(id: string, laborauftrag: Laborauftrag): Observable<Laborauftrag> {
      return this.http.put<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`, laborauftrag);
    }

    delete(id: string): Observable<Laborauftrag> {
      return this.http.delete<Laborauftrag>(`${environment.apiUrl}/laborauftrag/${id}`);
    }
}
