module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          fname: String,
          lname: String,
          email: String,
          password: String,
          cpassword: String,
        },
        { timestamps: true }
      );

      schema.method("toJSON", function(){
        const {__v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
  
    const Tutorial = mongoose.model("tutorial", schema);  
    return Tutorial;
  };