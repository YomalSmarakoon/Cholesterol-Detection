module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          fname: String,
          lname: String,
          email: String,
          password: String,
          cpassword: String,
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };