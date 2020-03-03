import { Injectable }       from '@angular/core';
import {BlogPost}                                  from '../../models/blog-post';
import {addOrReplaceByProp, removeFromArrayByProp} from '../utilites/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dummyData: BlogPost[] = [
    {
      title: 'Blog Post #1',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '1'
    },
    {
      title: 'Blog Post #2',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '2'
    },
    {
      title: 'Blog Post #3',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '3'
    },
    {
      title: 'Blog Post #4',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '4'
    }
  ];

  constructor() { }

  getPosts(): BlogPost[] {
    console.log('returning all dummy data', this.dummyData);
    return this.dummyData;
  }

  getPost = (uid: string): BlogPost => {
    console.log('returning dummy data', this.dummyData.find(data => data.uid === uid) );
    return this.dummyData.find(data => data.uid === uid);
  };

  /**
   * Adds a post if it isn't in the list
   * Updates a post if it is in the list
   * @param post
   */
  updatePost(post: BlogPost) {
    this.dummyData = addOrReplaceByProp(this.dummyData, 'uid', post.uid, post);
  }

  deletePost(post: BlogPost) {
    this.dummyData = removeFromArrayByProp(this.dummyData, 'uid', post.uid);
  }
}
