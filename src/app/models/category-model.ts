import { Post } from '../models/post-model';

export class Category {
    constructor(public name: string, public postList: Post[]) { }
}