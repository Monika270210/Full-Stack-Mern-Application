import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

export const signIn = async (req, res) => {
      const { email, password } = req.body;

      try {
            const existingUser = await User.findOne({ email: email });

            if (!existingUser)
                  return res.status(400).json({ message: "user does not exist !!!" });

            const checkpassword = await bcrypt.compare(password, existingUser.password);

            if (!checkpassword)
                  return res.status(400).json({ message: "please enter correct password !!!" });

            const token = await jwt.sign({ id: existingUser._id, email: existingUser.email, name: existingUser.name }, 'secretkey', { expiresIn: '1h' });

            res.send({ profile: existingUser, token });
      } catch (error) {
            console.log(error);
            res.send(error);
      }

}


export const signUp = async (req, res) => {
      const { firstname, lastname, email, password, confirmpassword } = req.body;

      try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser)
                  return res.status(400).json({ messgae: "user already exists !!!" });
            if (password !== confirmpassword)
                  return res.status(400).json({ message: "password's dont match !!!" });

            const hashedpassword = await bcrypt.hash(password, 10);

            const newUser = await new User({ name: `${firstname} ${lastname}`, email: email, password: hashedpassword });

            await newUser.save();

            const token = jwt.sign({ id: newUser._id, email: newUser.email, name: newUser.name }, 'secretkey', { expiresIn: '1h' });

            res.send({ profile: newUser, token });

      } catch (error) {
            console.log(error);
            res.send(error);
      }
}


