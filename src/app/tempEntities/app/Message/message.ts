
import { Info } from '@core/Info';
import { Validator } from '@core/tools/Validator';

import { BaseEntity } from '@core/BaseEntity';
import { IBaseEntity } from '@core/IBaseEntity';
import { MessageType } from '../MessageType/messageType';
import { UserProfile } from '../../Core/UserProfile/userProfile';




export class Message extends BaseEntity implements IBaseEntity<Message> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {
	
    super(id, descriptor, Message.Info);
    
  }
    
  

  //region Info

  public static readonly Info: Info = new Info('App', 'Message', 'Message');

  //endregion

  //#region Fields

	public userProfile?: UserProfile = new UserProfile();
	
	public title: string = '';
	
	public message: string = '';
	
	public messageType?: MessageType = new MessageType();
	
	public sendDate?: Date = new Date();
	
	public viewDate?: Date = new Date();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  
  public override seekinstance(): Message {
    return Message.seekinstance();
  }

  public static SeekInstance() : Message {
    let message: Message = new Message();
    // No Item...
    return message;
  }

  public static Validate(message: Message) : boolean {
    let result = 
      Validator.Validate(message.userProfile) &&
		Validator.Validate(message.title) &&
		Validator.Validate(message.message) &&
		Validator.Validate(message.messageType) &&
		Validator.Validate(message.timeStamp);

    if(result === false)
      console.log('Message is unvalid : ', message);

    return result;
  }
}
