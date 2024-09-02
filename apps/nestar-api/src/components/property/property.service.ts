import { Injectable } from '@nestjs/common';
import { ViewService } from '../view/view.service';
import { Member } from '../../libs/dto/member/member';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PropertyService {
    constructor(@InjectModel("Property") private readonly propertyModel: Model<null>, 
   
){}
}
