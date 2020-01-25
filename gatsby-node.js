const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

function onCreateNode({ node, getNode, actions }) {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        const slug = createFilePath({ node, getNode, basePath: 'markdown' });
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

function createPages({ graphql, actions }) {
    const { createPage } = actions;

    return new Promise(resolve => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                console.log(`*** Creating Page for: ${node.fields.slug}`);
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/Post.js'),
                    context: {
                        slug: node.fields.slug
                    }
                });
            });
            resolve();
        });
    });
}

module.exports = {
    onCreateNode,
    createPages
};
