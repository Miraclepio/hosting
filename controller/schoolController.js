
const cloudinary = require('../cloudinary');
const UserModel = require('../model/schoolmodel');

exports.user = async (req, res) => {
    try {
        // Check if the file was uploaded
        if (!req.files || !req.files.profilePicture) {
            return res.status(400).json('No file uploaded');
        }

        // Upload the file to Cloudinary
        const cloudProfile = await cloudinary.uploader.upload(req.files.profilePicture.tempFilePath, { folder: "users dp" });
        
        // Get the MIME type of the uploaded file
        const fileType = req.files.profilePicture.mimetype;
        
        // Define allowed MIME types
        const extension = ['image/jpeg', 'image/png','image/jpg'];
        console.log(req.files.profilePicture.mimetype)
        
        // Validate the MIME type
        if (!extension.includes(fileType)) {
            return res.status(400).json('Wrong file format'); 
        }else{
            const { Names, password, phoneNumber, studentClass } = req.body;
            const newUser = new UserModel({
                Names,
                password,
                phoneNumber,
                studentClass,
                profilePicture: {
                    pictureId: cloudProfile.public_id,
                    pictureUrl: cloudProfile.secure_url,
                },
            });
            console.log(req.files.profilePicture.mimetype)
          
    
            await newUser.save();
            res.status(201).json(newUser);
        }
      
     

       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
