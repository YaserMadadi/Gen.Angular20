
import { Info } from '@core/Info';
import { Validator } from '@core/tools/Validator';

import { BaseEntity } from '@core/BaseEntity';
import { IBaseEntity } from '@core/IBaseEntity';

import { Message } from '../Message/message';



export class MessageType extends BaseEntity implements IBaseEntity<MessageType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number = 0, descriptor: string = '') {
	
    super(id, descriptor, MessageType.Info);
    
  }
    
  

  //region Info

  public static readonly Info: Info = new Info('App', 'MessageType', 'MessageType');

  //endregion

  //#region Fields

	public title: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfMessage: Message[] = [];

  //#endregion

  
  public override seekinstance(): MessageType {
    return MessageType.seekinstance();
  }

  public static SeekInstance() : MessageType {
    let messageType: MessageType = new MessageType();
    // No Item...
    return messageType;
  }

  public static Validate(messageType: MessageType) : boolean {
    let result = 
      Validator.Validate(messageType.title) &&
		Validator.Validate(messageType.timeStamp);

    if(result === false)
      console.log('MessageType is unvalid : ', messageType);

    return result;
  }
}
