import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    let newPosts: Array<Post> = [];

    beforeEach(() => {
      newPosts = posts.map((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      expect(postsService.findMany()).toEqual(newPosts)
    });

    it('should return correct posts for skip and limit options', () => {
      expect(postsService.findMany({ skip: 1, limit: 2 })).toEqual([newPosts[1], newPosts[2]])
    });

    it('should return correct posts for skip option', () => {
      expect(postsService.findMany({ skip: 1 })).toEqual(newPosts.slice(1))
    });

    it('should return correct posts for limit option', () => {
      expect(postsService.findMany({ limit: 2 })).toEqual(newPosts.slice(0, 2))
    });
  });
});
