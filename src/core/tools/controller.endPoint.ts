import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Info } from "../info";
import { Actions } from "./enum";
import { Result } from "./Result";
import { StorageController } from "./controller.storage";


export enum CompileMode {
    Local,
    LocalSSL,
    Server,
    ServerSSL
}

export enum protocol {
    http = 'http',
    https = 'https'
}

@Injectable({ providedIn: 'root' })
export abstract class EndPointController {
    //https://localhost:7156/api
    protected static ServerIP: string = 'localhost';

    protected static serverPort: number = 7156; //Server:44888; Local:9025

    protected static servicePath: string = '';// '/PortalService'

    protected static protocol: protocol = protocol.http;

    public static Mode: CompileMode;

    constructor(public http: HttpClient) {

    }

    public static InitUrl(mode: CompileMode) {
        EndPointController.Mode = mode;
        if (mode == CompileMode.Local) {
            EndPointController.protocol = protocol.http;
            EndPointController.ServerIP = 'localhost';
            EndPointController.serverPort = 5214;
            EndPointController.servicePath = '';
        } else if (mode === CompileMode.LocalSSL) {
            EndPointController.protocol = protocol.https;
            EndPointController.ServerIP = 'localhost';
            EndPointController.serverPort = 7156;
            EndPointController.servicePath = '';
        } else if (mode === CompileMode.Server) {
            EndPointController.protocol = protocol.http;
            EndPointController.ServerIP = 'idp.cobeldarou.com'; //172.20.6.118
            EndPointController.serverPort = 20440; // 44888
            EndPointController.servicePath = 'Cobel.HR';
        } else {
            EndPointController.protocol = protocol.https;
            EndPointController.ServerIP = 'idp.cobeldarou.com';
            EndPointController.serverPort = 20440;
            EndPointController.servicePath = 'Cobel.HR';
        }

        let prtcl: string = EndPointController.protocol;

        if (EndPointController.servicePath.length == 0) {

            EndPointController.BaseUrl = `${prtcl}://${EndPointController.ServerIP}:${EndPointController.serverPort}/api/`; // 'http://192.168.1.5:44888/PortalService/api';
            console.log('Base Url ', EndPointController.BaseUrl);
        } else {
            EndPointController.BaseUrl = `${prtcl}://${EndPointController.ServerIP}:${EndPointController.serverPort}/${EndPointController.servicePath}/api/`; // 'http://192.168.1.5:44888/PortalService/api';
        }

        console.log(`Run in ${CompileMode[mode]} Mode ......... ! `);

        if (mode == CompileMode.Local)
            console.log('Server Url is : ', EndPointController.BaseUrl);

    }

    public static get Options() {
        return { withCredentials: true, headers: EndPointController.Headers };
    }

    private static headers: HttpHeaders = new HttpHeaders();

    public static get Headers(): HttpHeaders {
        // if (!this.headers.has('authentication') && StorageController.Token.length > 0) {
        //     this.headers = this.headers.set('authentication', StorageController.Token);
        // }
        return this.headers;
    }


    // public CreateGetCommand<T extends IBusinessObject | IBusinessObject[]>(url: string): Observable<T> {
    //     return this.http.get<T>(url, {
    //         withCredentials: true,
    //         headers: ServiceConfig.InitHeader()
    //     });
    // }


    // public CreatePostCommand<T extends IBusinessObject, U extends IBusinessObject | IBusinessObject[]>(url: string, entity: T): Observable<U> {
    //     return this.http.post<U>(url, entity, {
    //         withCredentials: true,
    //         headers: ServiceConfig.InitHeader()
    //     });
    // }

    /** BaseUrl on
     * 
     * Server : http://192.168.1.3:44888/Portal/api/          
     * Local  : http://localhost:port/api/
    */

    static BaseUrl: string = '';

    public FullUrl(url: string) {
        if (url.startsWith('/'))
            url = url.substring(1);
        return EndPointController.BaseUrl + url;
    }

    public UrlCreator(action: Actions, info: Info, id: number = 0, targetInfo: Info | null = null): string {
        let url: string = `${EndPointController.BaseUrl}${info.schema}/${info.name}`;

        switch (action) {
            case Actions.RetrieveAll: {
                url += `/RetrieveAll`;
                break;
            }
            case Actions.RetrieveById:
                {
                    url += `/RetrieveById/${id}`;
                    break;
                }
            case Actions.Save: {
                url += `/Save`;
                break;
            }
            case Actions.SaveCollection: {
                url += '/SaveBulk';
                break;
            }
            case Actions.SaveAttached: {
                url += '/SaveAttached';
                break;
            }
            case Actions.CollectionOf: {
                url += `/${id}/${targetInfo!.name}`;
                break;
            }
            case Actions.Seek: {
                url += `/Seek`;
                break;
            }
            case Actions.SeekByValue: {
                url += '/SeekByValue';
                break;
            }
            case Actions.Delete: {
                url += `/Delete/${id}`;
                break;
            }
            case Actions.Report: {
                break;
            }
        }
        return url;
    }

    private static CheckError(error: any): void {
        console.log('err : ', error);
        if (error instanceof HttpErrorResponse) {
            let result: Result = <Result>error.error;
            console.log('Result : ', result);
            if (result && result.id == -100) { //-100 : Authentication Failed!
                console.log('Authentication Error ... ');
                StorageController.Clear();
            }
        }
    }
}