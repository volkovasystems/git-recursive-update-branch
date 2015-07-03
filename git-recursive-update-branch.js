/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "git-check-branch",
			"fileName": "git-check-branch.js",
			"moduleName": "gitCheckBranch",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/git-check-branch.git",
			"isGlobal": "true"
		}
	@end-module-configuration

	@module-documentation:
		This will check if the given branch is also a remote branch and also the current branch.
	@end-module-documentation

	@include:
		{
			"git-check-remote-branch@github.com/volkovasystems": "gitCheckRemoteBranch",
			"git-check-local-branch@github.com/volkovasystems": "gitCheckLocalBranch",
			"git-check-current-branch@github.com/volkovasystems": "gitCheckCurrentBranch",
			"fs@nodejs": "fs"
		}
	@end-include
*/
var gitRecursiveUpdateBranch = function gitRecursiveUpdateBranch( branchName, repositoryDirectory, callback ){
	/*:
		@meta-configuration:
			{
				"branchName:required": "string",
				"repositoryDirectory:required": "string",
				"callback": "Callback"
			}
		@end-meta-configuration
	*/

	var currentWorkingDirectory = process.cwd( );

	if( GIT_CHECK_BRANCH_PATTERN.test( currentWorkingDirectory ) ){
		process.chdir( "../" );
	}

	if( repositoryDirectory && 
		fs.existsSync( repositoryDirectory ) &&
		fs.statSync( repositoryDirectory ).isDirectory( ) )
	{
		process.chdir( repositoryDirectory );

	}else{
		console.warn( "this error is shown for warning purposes only" );
		var error = new Error( "repository directory is invalid" );
		console.error( error );
		console.warn( "reverting to using the parent directory of this module as the repository directory" ); 
	}

	
};

const GIT_CHECK_BRANCH_PATTERN = /git-check-branch$/;

var fs = require( "fs" );

module.exports = gitCheckBranch;