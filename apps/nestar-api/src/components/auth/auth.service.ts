import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {

    public async hashPassowrd(memberPassword: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(memberPassword, salt);

    }

    public async comparePassword(password: string, hashedPassowrd: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassowrd);
    }
}
