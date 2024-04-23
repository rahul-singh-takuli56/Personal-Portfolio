import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:pl-[75px]  lg:h-[600px] h-[1100px] lg:mb-[130px]  lg:mt-[140px] mt-[50px]"
    >
      <p className="lg:text-6xl text-4xl font-semibold text-center">Skills</p>
      <p className="text-center text-xl text-white/60 my-2">
        Here are a few of the skills I&apos; ve been actively developing.
      </p>

      <div className="grid lg:grid-cols-2 lg:mr-10 mt-10">
        <div className="lg:h-[400px]  lg:mx-2 my-2 border-2 border-purple-500 rounded-xl  hover:scale-105 transition-all duration-1000 ">
          <p className="text-4xl text-center text-white/90  py-8">Frontend </p>

          <div className="grid lg:grid-cols-3 grid-cols-2 text-center">
            <div className="flex text-center justify-center border lg:w-[150px] w-[130px] lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                className="h-6"
              />
              <span className="text-white/70  pl-2 lg:text-xl  text-md ">
                React
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                className="h-7"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                Redux
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMta5u5wv5VYs4RNr2hf8TGvHg0kP7iTx-PQdxGCcYfDckWmfQSiu6nRdh5IfSXcpYFj8&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU"
                className="h-6"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                Tailwind
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaE_511AxI6dNC44qG28fSnw8-cYKz7F1QuTGmzcUYCv2ukAylxSfK5O-pFteCzTh48Y&usqp=CAU"
                className="h-7"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                Next JS
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                className="h-6"
              />
              <span className="text-white/70  pl-2  lg:text-xl text-md">
                HTML
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-9 py-4 mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                className="h-7"
              />
              <span className="text-white/70 pl-2 text-xl">CSS</span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4 py-4 mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                className="h-6"
              />
              <span className="text-white/70  pl-2 lg:text-xl ">
                JavaScript
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4 py-4 mb-8">
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                className="h-7"
              />
              <span className="text-white/70 lg:pl-2 lg:text-xl">
                BootStrap
              </span>
            </div>

            <div className="hidden  lg:flex text-center justify-center border w-[150px] h-[60px] rounded-xl border-white/70 mx-auto px-3 py-4 mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                className="h-6"
              />
              <span className="text-white/70 pl-2 text-xl">Material UI</span>
            </div>
          </div>
        </div>

        <div className="lg:h-[400px] lg:mx-2 my-2 border-2 border-purple-500 rounded-xl  hover:scale-105 transition-all duration-1000">
          <p className="text-4xl text-center text-white/90  py-8">
            Backend & Other{" "}
          </p>

          <div className="grid lg:grid-cols-3 grid-cols-2 text-center">
            <div className="flex text-center justify-center border lg:w-[150px] w-[130px] lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg42QsKGeegWHT01o2L7oLpk5D29x8w2yL_K7EYjGAA&s"
                className=" w-8"
              />
              <span className="text-white/70  pl-2 lg:text-xl  text-md ">
                Node Js
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                className="w-10"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                MongoDB
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzojuy79lo3fn3qdt7g6p.png"
                className="w-8"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                ExpresJs
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-b-FmiYEdCzXbUoDGz1-dy30yQCk7g_DwsaMU93jWQ&s"
                className="h-7"
              />
              <span className="text-white/70  pl-2 lg:text-xl text-md">
                Git
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px]  w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4  py-4 mb-8">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                className="h-6"
              />
              <span className="text-white/70  pl-2  lg:text-xl text-md">
                GitHub
              </span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-9 py-4 mb-8">
              <img
                src="https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj"
                className="h-7"
              />
              <span className="text-white/70 pl-2 text-xl">VSCode</span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px] rounded-xl border-white/70 mx-auto px-4 py-4 mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png"
                className="h-6"
              />
              <span className="text-white/70  pl-2 lg:text-xl ">FireBase</span>
            </div>

            <div className="flex text-center justify-center border lg:w-[150px] w-[130px]  lg:h-[60px] h-[55px]  rounded-xl border-white/70 mx-auto px-4 py-4 mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png"
                className="h-7"
              />
              <span className="text-white/70 lg:pl-2 lg:text-xl">My Sql</span>
            </div>

            <div className="hidden  lg:flex text-center justify-center border w-[150px] h-[60px] rounded-xl border-white/70 mx-auto px-3 py-4 mb-8">
              <img
                src="https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/824x/-/format/webp/IMG_3349.jpg"
                className="h-6"
              />
              <span className="text-white/70 pl-2 text-xl">Sql</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
