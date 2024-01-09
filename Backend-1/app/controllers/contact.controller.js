exports.create = (req, res) => {
    res.send({ massage: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "fandAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ massage: "update handler"});
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler", 
            Sinhvien: "Le Thanh Cam Hung (buoc 5)" });
};