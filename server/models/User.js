var mongoose = require('mongoose')
var validator = require('validator')
var bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: [true, "username tidak boleh kosong!"],
        unique: [true, "username sudah digunakan!"]
    },
    email: {
        type: String,
        required: [true, "email tidak boleh kosong!"],
        unique: [true, "email sudah digunakan!"],
        validator: {
            validator: validator.isEmail,
            message: "silahkan input email yang valid!"
        }
    },
    password: {
        type: String,
        required: [true, "password tidak boleh kosong!"],
        minLength: [6, "Password minimal harus 6 karakter"]
    },
    dob: {
        type: Date,
        required: [true, "tanggal lahir tidak boleh kosong!"]
    },
    phone: {
        type: String,
        required: [true, "Nomor telepon tidak boleh kosong!"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"  
    }
})

//midd enkripsi password
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const user = mongoose.model("User", userSchema)

module.exports = user;