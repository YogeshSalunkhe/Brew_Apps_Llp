// const { Int32 } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        // id : 'String ',
        title : 'String',
        author : 'String',
        summary : 'String'
    }
)

const Post = mongoose.model('Post',schema);
module.exports = Post;