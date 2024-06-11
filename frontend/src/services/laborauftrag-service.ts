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
    // getLaborauftraege(): Observable<Laborauftrag[]> {
    //   return this.http.get<Laborauftrag[]>(`${environment.apiUrl}/laborauftrag`);
    // }

  getLaborauftraege(): Observable<Laborauftrag[]> {
  return of([
    new Laborauftrag('1350310910', '12202929288338', '12202929288338', '1235001501051', new Date('2023-01-01'), 'Pending'),
    new Laborauftrag('2135015011', '12202929288338', '12202929288338', '1501205010501', new Date('2023-02-01'), 'Completed'),
    // Add more instances as needed
  ])
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
