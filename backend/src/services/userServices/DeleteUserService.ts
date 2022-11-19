import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUserService {
  async deleteUser(cpf: string) {
    const repo = new UsersRepository();
    const user = await repo.getUserByCpf(cpf);

    if (!user) {
      throw new Error("User does not exists");
    }

    await repo.userDelete(cpf);
  }
}
