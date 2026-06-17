import {
  Schema,
  model,
  Document,
  InferSchemaType,
  HydratedDocument,
  HydratedDocumentFromSchema,
} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    profilePicture: {
      type: String,

      //   default: 'default-profile-picture.png',
    },
  },
  { timestamps: true }
);
// type UserType = HydratedDocumentFromSchema<typeof userSchema>; //wrong
export type UserType = InferSchemaType<typeof userSchema>;
export type UserDocument = HydratedDocument<UserType>;
export const User = model<UserType>('User', userSchema);

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (this: UserDocument) {
  if (!this.isModified('password')) {
    // return next();
    return;
  }
  try {
    // const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, 10);
    // next();
  } catch (error) {
    // next(error);
    throw error;
  }
});

// --------------------------------------------
//diff (older) approach
// export interface IUser extends Document {
//   username: string
//   email: string
//   password: string
// }

// const userSchema = new Schema<IUser>(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   },
// )

// export default mongoose.model<IUser>('User', userSchema)
