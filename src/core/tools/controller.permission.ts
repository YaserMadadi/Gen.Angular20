import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { RolePermission } from "../../app/Entities/Core/RolePermission/rolePermission";
import { MessageController } from "./controller.message";
import { PermissionResult, PermissionType } from "./enum";
import { Router } from "@angular/router";
import { EndPointController } from "./controller.endPoint";
//import { RolePermission } from "../../app/Entities/Core/RolePermission/rolePermission";
import { Info } from "../info";

@Injectable({ providedIn: 'root' })
export class PermissionController {

    constructor(private http: HttpClient,private router: Router) {

    }

    //public static RolePermissionList: RolePermission[] = [];

public static RolePermissionList: any[] = [];

    // public async loadPermission(employee_id: number) {
    //     let url = EndPointController.BaseUrl + `Permission/Load/${employee_id}`;
    //      let command = this.http.get<RolePermission[]>(url, {
    //          withCredentials: false,
    //          headers: EndPointController.Headers
    //      });
    //     let result = await command.toPromise<RolePermission[]>();
    //     console.log('load Permissions is done! : ', result);
    //     PermissionController.RolePermissionList = result.length == 0 ? [] : result;
    //      this.router.navigate(['/Home','Home']);
    // }

    public static Check(info: Info, permissionType: PermissionType) {
        //return PermissionResult.Granted;
        let permissionResult: PermissionResult = PermissionResult.Denied;
        // console.log(info);
        // console.log(PermissionManager.RolePermissionList);
        let selectedList = PermissionController.RolePermissionList.filter((rolePermission) => {
             return (rolePermission.entity.schema === info.schema && rolePermission.entity.name === info.name);
         });
        switch (permissionType) {
            case PermissionType.ViewIndexPermission: {
                selectedList.forEach((value) => {
                    if (value.viewIndexPermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
            case PermissionType.ViewLog: {
                selectedList.forEach((value) => {
                    if (value.viewLogPermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
            case PermissionType.Add: {
                selectedList.forEach((value) => {
                    if (value.addPermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
            case PermissionType.Edit: {
                selectedList.forEach((value) => {
                    if (value.editPermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
            case PermissionType.Delete: {
                selectedList.forEach((value) => {
                    if (value.deletePermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
            case PermissionType.Retrieve: {
                selectedList.forEach((value) => {
                    if (value.viewIndexPermission === true)
                        permissionResult = PermissionResult.Granted;
                });
                break;
            }
        }
        if (permissionResult == PermissionResult.Denied) {
            MessageController.ShowMessageByPermissionType(permissionType);
            console.log(`Permission is Denied for : ${info.schema}.${info.name} - ${PermissionType[permissionType]} `);
        }
        return permissionResult;
    }
}