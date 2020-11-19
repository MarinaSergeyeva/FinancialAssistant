const AppError = require('../errors/appError');
const userModel = require('../users/user.model');

exports.unpackGifst = async (req, res, next) => {
  const { user } = req;

  const { flatPrice } = user;
  if (!flatPrice) {
    return next(new AppError('Saving stats not initialized', 403));
  }

  const { giftsForUnpacking, giftsUnpacked } = user;
  if (!giftsForUnpacking) {
    return next(new AppError('Not any gifts for unpacking', 403));
  }
  const updatedGifts = {
    giftsUnpacked: giftsUnpacked - 1,
    giftsForUnpacking: giftsForUnpacking + 1,
  };
  const updatedGiftUser = await userModel.findByIdAndUpdate(
    req.user._id,
    updatedGifts,
    { new: true },
  );

  return res.send({
    giftsForUnpacking: updatedGiftUser.giftsForUnpacking,
  });
};
