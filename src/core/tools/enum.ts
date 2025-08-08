export enum Actions {
    RetrieveById,
    RetrieveAll,
    Save,
    SaveAttached,
    SaveCollection,
    Delete,
    Seek,
    SeekLast,
    SeekByValue,
    CollectionOf,
    Report
}

export enum PermissionType {
    ViewIndexPermission = 0,
    Add = 1,
    Edit = 2,
    Delete = 3,
    Retrieve = 4,
    ViewLog = 5
}

export enum PermissionResult {
    Granted,
    Denied
}

export enum MessageType {
    ViewIndexPermissionDenied,
    ViewLogPermissionDenied,
    AddPermissionDenied,
    EditPermissionDenied,
    DeletePermissionDenied,
    RetrievePermissionDenied,
    SelectedRecordNotConfirmed,
    ConfirmPasswordNotMatch,
    Welcome,
    UserNameOrPasswordNotAccepted,
    NoValidEntity,
    NotEditable,
    NotDelteable,
    ListIsEmpty,
    DuplicatedRecord,
    FileRequired,
    EndOfEvaluation,
    QuestionnaireIsDone,
    QuestionnaireIsNotAvailable
}

export enum Status{
    None,
    Saved,
    Error
}