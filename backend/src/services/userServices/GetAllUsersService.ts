import { UsersRepository } from "../../repositories/UsersRepository";

export class GetAllUsersService {
  async getAllUsers() {
    const repo = new UsersRepository();
    const users = await repo.getAllUsers();

    return users;
  }
}
