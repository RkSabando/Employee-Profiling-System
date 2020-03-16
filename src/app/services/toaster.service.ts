import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private toastr: ToastrService
  ) { }


  showSuccess(message) {
    this.toastr.success(message);
  }
  showWarning(message){
    this.toastr.error(message,"Error:",{
      positionClass: 'toast-top-center'
    })
  }

}
