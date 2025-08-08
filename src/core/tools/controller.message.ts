import { MessageType, PermissionType } from "./enum";
import { Result } from "./Result";
import { ToastrService } from 'ngx-toastr';

export enum toastType {
    success,
    warning,
    info,
    error
}

export class MessageController {

    // constructor() {
    //     MessageManager.toaster = toaster;
    // }

    public static toaster: ToastrService;

    private static type: toastType;

    public static DisplayName: string = '';

    public static ShowMessage(value: string, type: toastType): void;
    public static ShowMessage(value: MessageType): void;
    public static ShowMessage(value: Result): void;
    public static ShowMessage(value: string | MessageType | Result, type: toastType = toastType.success): void {
        console.log(value.toString());

        let message: string = '';
        this.type = type;
        if (value instanceof Result) {
            if (value.id == -2146232060) {
                MessageController.ShowMessage(MessageType.DuplicatedRecord);
                return;
            }
            message = value.message.replace('\r\n', '<hr>');
            this.type = toastType.error;
        }
        else if (typeof value === 'string') {
            message = value.replace('\r\n', '<hr>');
            this.type = type;
        }
        else { // value is MessageType
            message = this.GetMessage(value);
            this.show(message, value);
            return;
        }

        this.show(message);
    }

    private static show(message: string, messageType: MessageType = MessageType.ListIsEmpty) {
        console.log('Central Message Controller ....');
        console.log("MessageType : ", messageType);
        console.log("Message : ", message);
        return;

        let header = this.GetHeader(messageType);

        switch (this.type) {
            case toastType.success: {
                this.toaster.success(message, header);
                break;
            }
            case toastType.info: {
                this.toaster.info(message, header);
                break;
            }
            case toastType.error: {
                this.toaster.error(message, header);
                break;
            }
            case toastType.warning: {
                this.toaster.warning(message, header);
                break;
            }
        }
    }

    public static LogError(error: Result | string, data: string = ''): void {
        console.log(data, error);
    }

    public static ShowMessageByPermissionType(permissionType: PermissionType): void {
        switch (permissionType) {
            case PermissionType.ViewIndexPermission: {
                MessageController.ShowMessage(MessageType.ViewIndexPermissionDenied);
                break;
            }
            case PermissionType.Add: {
                MessageController.ShowMessage(MessageType.AddPermissionDenied);
                break;
            }
            case PermissionType.Edit: {
                this.ShowMessage(MessageType.EditPermissionDenied);
                break;
            }
            case PermissionType.Delete: {
                this.ShowMessage(MessageType.DeletePermissionDenied);
                break;
            }
            case PermissionType.Retrieve: {
                this.ShowMessage(MessageType.RetrievePermissionDenied);
                break;
            }
            case PermissionType.ViewLog: {
                this.ShowMessage(MessageType.ViewLogPermissionDenied);
                break;
            }

        }

    }


    private static GetHeader(messageType: MessageType | null = null): string {
        if (messageType == null) {
            switch (this.type) {
                case toastType.success: return 'Successed...';
                case toastType.warning: return 'Warning!';
                case toastType.info: return 'Attention Please!';
                case toastType.error: return 'Error!';
            }
        }

        let header = '';
        //this.type = toastType.error;
        switch (messageType) {
            case MessageType.ViewLogPermissionDenied:
            case MessageType.ViewIndexPermissionDenied:
            case MessageType.AddPermissionDenied:
            case MessageType.EditPermissionDenied:
            case MessageType.DeletePermissionDenied:
            case MessageType.RetrievePermissionDenied: {
                header = 'Access is Denied!'
                break;
            }
            case MessageType.SelectedRecordNotConfirmed: {
                header = `Record is not Valid!`
                break;
            }
            case MessageType.Welcome: {
                header = `Welcome`;
                break;
            }
            case MessageType.ConfirmPasswordNotMatch: {
                header = `Passwords Didn't Matched!`;
                break;
            }
            case MessageType.NoValidEntity: {
                header = `Entity is not Valid!`
                break;
            }
            case MessageType.NotEditable: {
                header = `Record is not Editable!`
                break;
            }
            case MessageType.NotDelteable: {
                header = `Record is not Deleteable!`
                break;
            }
            case MessageType.ListIsEmpty: {
                header = 'List is Empty!';
                break;
            }
            case MessageType.DuplicatedRecord: {
                header = 'Duplicated Occured!';
                break;
            }
            case MessageType.EndOfEvaluation: {
                header = 'Evaluation is Finished!';
                break;
            }
            case MessageType.UserNameOrPasswordNotAccepted: {
                header = 'Incorrect UserName or Password';
                break;
            }
        }

        return header;
    }

    private static GetMessage(messageType: MessageType): string {
        let message = '';
        this.type = toastType.error;
        switch (messageType) {
            case MessageType.ViewLogPermissionDenied: {
                message = `your Access to View record Logs of this Entity is denied by IDP Admin!...`;
                this.type = toastType.warning;
                break;
            }
            case MessageType.ViewIndexPermissionDenied: {
                message = 'your Access to View Index Page of this Entity is denied by IDP Admin!...';
                this.type = toastType.warning;
                break;
            }
            case MessageType.AddPermissionDenied: {
                message = 'Add permission of this Entity is denied!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.EditPermissionDenied: {
                message = 'Edit permission of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.DeletePermissionDenied: {
                message = 'Delete permission of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.RetrievePermissionDenied: {
                message = 'View this page of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.SelectedRecordNotConfirmed: {
                message = `The Selected Record is not Valid!`
                this.type = toastType.warning;
                break;
            }
            case MessageType.Welcome: {
                message = `Welcome to Cobel Darou HR Portal`;
                this.type = toastType.success;
                break;
            }
            case MessageType.ConfirmPasswordNotMatch: {
                message = `Password and RePassword are not matched!`;
                this.type = toastType.warning;
                break;
            }
            case MessageType.NoValidEntity: {
                message = `Current Entity value is not Valid!`
                this.type = toastType.warning;
                break;
            }
            case MessageType.NotEditable: {
                message = `Selected Record is not Editable!`;
                this.type = toastType.warning;
                break;
            }
            case MessageType.NotDelteable: {
                message = `Selected Record is not deleteable!`
                this.type = toastType.warning;
                break;
            }
            case MessageType.ListIsEmpty: {
                message = 'Send List is Empty!';
                this.type = toastType.info;
                break;
            }
            case MessageType.DuplicatedRecord: {
                message = 'Entered Value is Duplicated!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.EndOfEvaluation: {
                message = 'Your Evaluation is finished and Saved in out DataBase!';
                this.type = toastType.success;
                break;
            }
            case MessageType.QuestionnaireIsDone: {
                message = 'Selected Questionary is Done! You can not ReAnswer it';
                this.type = toastType.error;
                break;
            }
            case MessageType.QuestionnaireIsNotAvailable: {
                message = 'Selected Questionary is not available at present!';
                this.type = toastType.warning;
                break;
            }
            case MessageType.UserNameOrPasswordNotAccepted: {
                message = 'UserName or Password is not Valid!';
                this.type = toastType.error;
                break;
            }
        }

        return `<hr>Dear User .. ${this.DisplayName}<br>${message}`;
    }

}