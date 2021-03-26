import Investor from '../models/investment.model';

class InvestorController {
  async addInvestor(req, res) {
    try {
      const { name, amount } = req.body;
      const newInvestor = new Investor({ name, amount });
      const investor = await newInvestor.save();
      return res.status(201).json({
        message: 'success',
        investor,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error,
      });
    }
  }
}

export default new InvestorController();
