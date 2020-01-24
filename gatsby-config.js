module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'files',
                path: `${__dirname}/src/markdown`
            }
        },
        'gatsby-transformer-remark'
    ],
    siteMetadata: {
        header: "Gatsby Example"
    }
}
