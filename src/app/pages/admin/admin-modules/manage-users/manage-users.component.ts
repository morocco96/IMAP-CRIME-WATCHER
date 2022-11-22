import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { UserService } from "../../../services"
import { LoadingService } from '../../../../shared/service/loader';
import { ToastService } from '../../../../shared/service/toast';
import { AppFilter } from '../../../../shared'
import { Router } from "@angular/router";
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any;
  filters
  constructor(
    private router:Router,
    private toastSvc: ToastService,
    private userSvc: UserService,
    private loaderSvc: LoadingService,
    private dataServce: DataService) { 
      this.filters = new AppFilter({ sidx: '-createdat', rows:2000, sord: 'des' });
      let filter = this.filterComposer("");
      this.filters.filters = JSON.stringify(filter);
      this.getUsers()
    }

  ngOnInit(): void {
    this.dataServce.getUser().subscribe(res => {
      this.users = res;
    })

  }
userDetail(user){
  this.userSvc.userDetail=user;
  this.router.navigate([`/admin/apps/manage-user-detail/${user.id}`], { replaceUrl: true })
}
  

  getUsers(){
    this.loaderSvc.present('Please wait...');
    this.userSvc.getAllUser({param:this.filters}).subscribe(res=>{
      this.users=res["users"]
      this.loaderSvc.dismiss();
    },error=>{
      this.loaderSvc.dismiss();
     
      this.toastSvc.presentToast('Failed to get users', 'danger');
    })
  }
  filterComposer(query) {
		let mongofilter: { [id: string]: any } = {};

			mongofilter['role'] = "STAFF";
	
		return mongofilter;
	}
}
