import { BadRequestException, Injectable } from '@nestjs/common';
import { ViewService } from '../view/view.service';
import { Member } from '../../libs/dto/member/member';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { Property } from '../../libs/dto/property/property';
import { PropertyInput } from '../../libs/dto/property/property.input';
import { Message } from '../../libs/enums/common.enum';
import { MemberService } from '../member/member.service';

@Injectable()
export class PropertyService {
    constructor(@InjectModel("Property") private readonly propertyModel: Model<Property>, private memberService: MemberService){}
    public async createProperty(input: PropertyInput): Promise<Property> {
        try {
            const result = await this.propertyModel.create(input);
            // increase memberProperties
            await this.memberService.memberStatsEditor({_id: result.memberId, 
            targetKey: "memberProperties",
            modifier: 1, })

        return result;

        }catch(err) {
            console.log("Error, Service.model:", err.message);
            throw new BadRequestException(Message.CREATE_FAILED);

        }
    }
}
