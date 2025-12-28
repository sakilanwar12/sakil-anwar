import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Post {
  _id?: ObjectId;
  title: string;
  content: string;
  authorId: ObjectId;
  createdAt: Date;
}