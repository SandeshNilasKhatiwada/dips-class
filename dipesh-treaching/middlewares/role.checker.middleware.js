exports.role_checker = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      console.log('verified');
      next();
    } else {
      res.status(403).json({
        status: false,
        message: 'Forbidden to perform this action',
      });
    }
  };
};
