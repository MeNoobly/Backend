import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(request, response) {
        try {
            console.log(request.files);
            const post = await PostService.create(
                request.body,
                request.files.picture
            );
            response.json(post);
        } catch (error) {
            response.status(500).json(error.message);
        }
    }

    async getAll(request, response) {
        try {
            const posts = await PostService.getAll();
            return response.json(posts);
        } catch (error) {
            response.status(500).json(error.message);
        }
    }

    async getOne(request, response) {
        try {
            const post = await PostService.getOne(request.params.id);
            return response.json(post);
        } catch (error) {
            response.status(500).json(error.message);
        }
    }

    async update(request, response) {
        try {
            const updatedPost = await PostService.update(request.body);
            return response.json(updatedPost);
        } catch (error) {
            response.status(500).json(error.message);
        }
    }

    async delete(request, response) {
        try {
            const post = await PostService.delete(req.params.id);
            return response.json(post);
        } catch (error) {
            response.status(500).json(error.message);
        }
    }
}

export default new PostController();
