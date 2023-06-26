exports.getAllUsers = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "All Users Data",
  });
};

exports.getUser = (req, res, next) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: "User Data",
  });
};

exports.createUser = (req, res, next) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: "User Created",
  });
};

exports.updateUser = (req, res, next) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: "User Updated",
  });
};

exports.deleteUser = (req, res, next) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
