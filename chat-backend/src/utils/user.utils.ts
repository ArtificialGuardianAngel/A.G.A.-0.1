import * as bcrypt from "bcrypt";

export class UserUtils {
  static readonly hashRounds = 50;
  static generateHash(string: string): string {
    return bcrypt.hashSync(string, this.hashRounds);
  }

  static async compareHash(plain: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plain, hash);
  }
}
