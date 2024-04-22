import photo from "../assets/photo.jpg";

const About = () => {
  return (
    <div id="about" className=" md:h-[500px] h-screen ml-2">
      <div className="grid md:grid-cols-2 pt-2 md:pl-[75px] ">
        <div>
          <p className="md:text-6xl text-4xl font-semibold py-2">Hi, I am</p>
          <p className="md:text-6xl text-3xl font-semibold py-2">
            Rahul Singh Takuli
          </p>
          <p className="md:text-5xl text-2xl py-2">
            I am a <span className="text-purple-700 ">FrontEnd Developer</span>
          </p>
          <p className="text-white/60 md:text-xl  py-3 mb-2">
            As a frontend developer, I&apos;m motivated and versatile, always
            eager for new challenges. With a passion for learning, I&apos;m
            dedicated to delivering top-notch results. I embrace a positive
            attitude and a growth mindset, ready to contribute meaningfully and
            achieve excellence. Proficient in{" "}
            <span className="text-purple-600">
              HTML, CSS, and JavaScript, React, Tailwind CSS, Redux.
            </span>{" "}
            I specialize in building intuitive, visually appealing user
            interfaces. Experienced with frameworks like React and Angular, I
            create responsive, interactive web applications.
          </p>
          <p className="text-xl font-semibold   bg-gradient-to-r from-purple-800 to-blue-700 inline rounded-md px-3 py-2">
            My Profile
          </p>
          <div className="flex justify-start items-center md:gap-10 gap-4 pt-3 mt-2">
            <a href="https://leetcode.com/takuli56/" target="_blank">
              <img
                src="https://repository-images.githubusercontent.com/660115526/cbbcd367-535a-4e9d-927b-9eacd8d652e8"
                height={50}
                width={50}
              />
            </a>
            <a href="https://github.com/rahul-singh-takuli56" target="_blank">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                height={50}
                width={50}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulsinghtakuli/"
              target="_blank"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDdBNTUzMrUDhaPy8isZc1fS4Iz6oKQGIeuYneW2-7A&s"
                height={50}
                width={45}
              />
            </a>

            <a href="https://linktr.ee/Rahul_Singh_Takuli" target="_blank">
              <img
                src="https://play-lh.googleusercontent.com/x3Kpw4L_-miSO6eumND8Az4ltZ2Ype6vSrJeJJW44Jugzn8KuKXaqsu_E_Zjx0Db5Hw=w240-h480-rw"
                height={40}
                width={45}
              />
            </a>
            <a href="https://twitter.com/Taku3Singh" target="_blank">
              <img
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                height={50}
                width={55}
              />
            </a>
          </div>
        </div>

        <div className="hidden md:block mx-auto mt-5">
          <img src={photo} height={100} width={410} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
