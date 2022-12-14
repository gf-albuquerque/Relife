import { Request, Response } from "express";
import { DeleteAdminService } from "../../services/adminServices/DeleteAdminService";

export class DeleteAdminController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new DeleteAdminService();

    try {
      await service.deleteAdmin(email);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
