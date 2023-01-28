const saltRounds = 10;
const salt = await bcrypt.genSaltSync(saltRounds);
const hashedPassword = await bcrypt.hashSync(password, salt);
console.log(hashedPassword);
