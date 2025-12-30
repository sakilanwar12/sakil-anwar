import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPage extends Document {
  title: string;
  slug: string;
  content: any[]; // JSON layout structure
  createdAt: Date;
  updatedAt: Date;
}

const PageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: Schema.Types.Mixed, default: [] },
  },
  { timestamps: true }
);

// Prevent overwrite model error
const Page: Model<IPage> = mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema);

export default Page;
