
var path = require("path");
//sourcemap测试
//eval、cheap-eval-source-map、cheap-module-eval-source-map、
//eval-source-map、cheap-source-map、cheap-module-source-map
//inline-cheap-source-map、inline-cheap-module-source-map
//source-map、inline-source-map、hidden-source-map、nosources-source-map
// console.log("=============",__dirname);
module.exports={
	entry:[path.resolve(__dirname,"index.js")],
	output:{
		filename:"nosources-source-map.js",
		path:__dirname+"/"
	},
	devtool:"nosources-source-map",
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				 use:{
		            loader: 'file-loader',
		            options: {
		            	name:'[name].[ext]',
		            	outputPath:"image/"
		            }
		          }
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use:["file-loader"]
			}
		]
	}
}