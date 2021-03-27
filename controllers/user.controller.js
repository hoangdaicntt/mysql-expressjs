const {User} = require('../models/index');

module.exports = class UserController {
    async create(user) {
        const userModel = await User.create({firstName: "Jane", lastName: "Doe"}).catch(err => {
            console.log(err);
            return null;
        });
        if (userModel) {
            await userModel.save();
        }
        return userModel;
    }

    async update(id, user) {
        const userModel = await User.update({firstName: "Jane", lastName: "Doe"}, {
            where: {
                id: id
            }
        }).catch(err => {
            console.log(err);
            return null;
        });
        if (userModel) {
            await userModel.save();
        }
        return userModel;
    }

    async list(user) {
        const usersModel = await User.findAll();
        return usersModel;
    }

    async delete(id) {
        const result = await User.destroy({
            where: {
                id: id
            }
        });
        return result;
    }
}
