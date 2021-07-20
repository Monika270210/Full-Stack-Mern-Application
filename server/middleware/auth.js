import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const isgoogleAuth = token.length >= 500;
        let decodedData;
        if (token && isgoogleAuth) {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        else {
            decodedData = jwt.verify(token, 'secretkey');
            req.userId = decodedData.id;
        }
        next();
    }
    catch (error) {
        console.log(error);
    }

}


export default auth;