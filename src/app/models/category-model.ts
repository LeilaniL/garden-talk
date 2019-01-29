import { Post } from '../models/post-model';

export class Category {
    postList: Post[] = [];
    constructor(public name: string) { }
}