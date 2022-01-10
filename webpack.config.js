const path = require('path');

module.exports ={
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
};