import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { MessageController } from "../tools/controller.message";
import { PermissionType } from "../tools/enum";
import { StorageController } from "../tools/controller.storage";
// import { Employee } from "../../app/Entities/HR/Employee/employee";
import { PermissionController } from "../tools/controller.permission";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    static Router: Router;

    constructor(public router: Router) {
        AuthGuard.Router = router;
        //StorageController.Clear();
    }

    public static SAMAccount: string = '';

    public static DisplayName: string = '';


    //#region Person_Id
    private static person_id: number;

    public static set Person_Id(id: number) {
        this.person_id = id;
    }
    public static get Person_Id(): number {
        return this.person_id;
    }
    //#endregion



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!AuthGuard.IsAuthenticated) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        if (route.url.length > 0) {
            return this.IndexPermitted(state);
        }
        return true;
    }

    private IndexPermitted(path: RouterStateSnapshot): boolean {
        return this.checkIndexPermission(AuthGuard.urlToArray(path.url));
    }

    /// Check IndexView Page Permission in Client Side
    private checkIndexPermission(segments: string[]): boolean {
        //return true;
        console.log('segments : ', segments);
        if (segments.length === 0 ||
            (segments.length === 1 && segments[0].toLowerCase().includes('home')) ||
            (segments.length === 2 && segments[0].toLowerCase().includes('home')))
            return true;
        let destUrl = segments.length >= 2 ? `/${segments[0]}/${segments[1]}` : '/unSpecified/unSpecified';
        for (const rolePermission of PermissionController.RolePermissionList) {
            if (destUrl.toLowerCase() != rolePermission.entity.indexUrl.toLowerCase())
                continue;
            if (rolePermission.viewIndexPermission) {
                return true;
            }
        }

        console.log(`Permission Denied for ${segments[0]}.${segments[1]}`);
        MessageController.ShowMessageByPermissionType(PermissionType.ViewIndexPermission);
        return false;
    }

    public static urlToArray(url: string): string[] {
        return url.split('/').filter(item => item.length !== 0);
    }





    // public get IsAuthenticated(): boolean {
    //     AuthGuard.IsAuthenticated = AuthGuard.UserName?.length > 0;
    //     return AuthGuard.IsAuthenticated;
    // }

    public static get IsAdmin(): boolean {
        return AuthGuard.SAMAccount.toLowerCase() === 'y.madadi';
    }


    public static get IsAuthenticated(): boolean {
        return StorageController.Token?.length > 0;
    }


    public get IsAuthenticated(): boolean {
        return AuthGuard.IsAuthenticated;
    }


    //public static IsAuthenticated: boolean;

    public static Clear() {
        StorageController.Clear();
        //this.IsAuthenticated = false;
        AuthGuard.SAMAccount = '';
        AuthGuard.Person_Id = 0;
        AuthGuard.DisplayName = '';
        AuthGuard.Router.navigate(['login']);
        //PermissionManager.RolePermissionList = []
        //AuthGuard.navigate();
    }

    public static navigate(url: string) {
        AuthGuard.Router.navigate([url]);
    }

    public static SignOut() {
        AuthGuard.Clear();
    }
}