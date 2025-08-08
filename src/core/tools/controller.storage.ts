
export class StorageController {

    constructor() {

    }

    public static show(key:string){
        console.log(localStorage[key]);
    }

    private static tokenKey = 'token';
    // public static lockKey = 'lock';



    public static Set(key: string, value: any) {
        localStorage.setItem(key, value.toString());
    }

    public static Get(key: string) {
        return localStorage.getItem(key);
    }


    public static Token: string = '';

    // public static updateLockExpireTime(index: number) {
    //     let today = new Date();
    //     localStorage.setItem(this.lockKey, today.setHours(today.getHours(), today.getMinutes() + 30, 0, 0).toString())
    //     StorageController.Add('Index', index.toString());
    // }

    // public static get ExpireTime(): number {
    //     return +localStorage.getItem(this.lockKey);
    // }

    public static Clear() {
        // for (let index = 0; index < localStorage.length; index++) {
        //     if (localStorage[index].key == 'version')
        //         continue;
        //     localStorage.removeItem(localStorage[index].key);
        // }
        localStorage.clear();
        StorageController.Token = ''; 
        console.log('Clear');
    }

    // public static SaveSessionID(value: string) { 

    //     if (value === null || value === '') {
    //         this.Clear();
    //         return;
    //     }
    //     localStorage.setItem(this.sessionKey, value);
    // }
}