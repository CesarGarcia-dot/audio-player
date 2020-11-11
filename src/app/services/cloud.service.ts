// src/app/services/cloud.service.ts
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url: "https://mp3.downloadyt.com/mp3/wp-content/uploads/2018/12/Bad Bunny - Caro (Www.FlowHot.Net).mp3",
      name: "Caro",
      artist: "Bad Bunny"
    },
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      url:
        "https://ia801305.us.archive.org/12/items/LaGasolinaDaddyYankeeOficialVideoHQ/La%20Gasolina%20-%20Daddy%20Yankee%20%5BOficial%20video%5D%20HQ.mp3",
      name: "La Gasolina",
      artist: "Daddy Yankee"
    }
    
  ];

  getFiles() {
    return of(this.files);
  }
}