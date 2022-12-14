import { Request, Response } from "express";
import { GetInstitutionsAddressByStateService } from "../../services/addressServices/GetInstitutionsAddressByStateService";

export class GetInstitutionsAddressByStateController {
  async handle(req: Request, res: Response) {
    const { uf } = req.params;

    const addressService = new GetInstitutionsAddressByStateService();

    try {
      const addresses = await addressService.getInstitutionsAddressByState(uf);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
