import Investor from '../models/investment.model';

class InvestorController {
  async addInvestor(req, res) {
    const { name, amount, startdate, enddate } = req.body;
    const newInvestor = new Investor({ name, amount, startdate, enddate });
    const investor = await newInvestor.save();
    return res.status(201).json({
      message: success,
      investor,
    });
  }
}

export default new InvestorController();
