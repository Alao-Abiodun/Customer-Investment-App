import User from '../models/user.model';

class UserController {
  async getUser(req, res) {
    const user = await User.findOne({ _id: _id }).populate('investor');
    return res.status(200).json({
      message: 'success',
      user,
    });
  }
}

export default new UserController();
