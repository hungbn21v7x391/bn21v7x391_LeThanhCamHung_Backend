const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

// Create and Save a new contact
exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not empty"));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

//exports.findAll = async (req, res, next) => {
//    let document = [];

//   try {
//        const contactService = new ContactService(MongoDB.client);
//        const {name } = req.query;
//        if (name) {
//            documents = await contactService.findByName(name);
//        } else {
//            documents await contactService.find({});
//        }
//    } catch (error) {
//        return next(
//            new ApiError(500, "An error occurred while retrieving contacts")
//        );
//    }
//    return res.send(document);
//};








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