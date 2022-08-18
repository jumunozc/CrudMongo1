module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema(
        {
            nombre: String,
            email: String
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    schema.plugin(mongoosePaginate);
    const Mongodb1 = mongoose.model("mongodb1", schema);
    return Mongodb1;
};