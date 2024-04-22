const Education = () => {
  return (
    <div id="education">
      <p className="text-center lg:text-6xl text-3xl font-semibold mb-5 ">
        Education
      </p>
      <p className="text-center text-xl text-white/60">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>

      <div className="hover:scale-105 duration-1000  border rounded-md border-purple-700  lg:w-[600px]  mx-auto mt-10">
        <div className="flex gap-2 pl-2 py-2">
          <div className="lg:pt-2 pt-4">
            <img
              src="https://images.collegedunia.com/public/college_data/images/logos/1483615540logoERA.png"
              alt="image"
              height={60}
              width={60}
              className="rounded-xl"
            />
          </div>

          <div className="">
            <p className="text-xl text-white/70">
              Graphic Era Hill University, Dehradun
            </p>
            <p className=" text-md text-white/40">
              Bachelor of Technology - BTech, Computer Science and Engineering
              <br />
              Aug 2020 - Aug 2024
            </p>
          </div>
        </div>

        <div className="px-2 py-2 text-md">
          <p className="text-white/50 mb-2">
            {" "}
            <span className="font-semibold">Grade</span> 8.21 CGPA
          </p>
          <p className="text-white/60 ">
            I am currently pursuing a Bachelor&apos;s degree in Computer Science
            and Engineering at Graphic Era Hill University, Dehradun.I have
            taken courses in Data Structures, Algorithms, Object-Oriented
            Programming, Database Management Systems, Operating Systems, and
            Computer Networks, among others.{" "}
          </p>
        </div>
      </div>

      <div className="hover:scale-105 duration-1000  border rounded-md border-purple-700  lg:w-[600px]  mx-auto mt-10">
        <div className="flex gap-2 pl-2 py-2">
          <div className="lg:pt-2 pt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JCH0PjNbJcNWtD7WILCtb0DB7AyHpHagvUnytCpM2A&s"
              alt="image"
              className="rounded-xl h-[60px] w-[60px] "
            />
          </div>

          <div className="">
            <p className="text-xl text-white/70">
              Country Wide public School Bageshwar, Uttarakhand
            </p>
            <p className=" text-md text-white/40">
              Field of Study: Engineering (PCM Stream)
              <br />
              Class 12th: 82.50%
            </p>
          </div>
        </div>

        <div className="px-2 py-2 text-md">
          <p className="text-white/50 mb-2">
            {" "}
            <span className="font-semibold">Grade</span> 82.00 %
          </p>
          <p className="text-white/60 ">
            For my higher secondary education (12th grade), I pursued the
            Science stream (PCM - Physics, Chemistry, Mathematics) and completed
            my 12th from Country Wide Public School.
          </p>
        </div>
      </div>

      <div className="hover:scale-105 duration-1000  border rounded-md border-purple-700  lg:w-[600px] mx-auto mt-10">
        <div className="flex gap-2 pl-2 py-2">
          <div className="lg:pt-2 pt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JCH0PjNbJcNWtD7WILCtb0DB7AyHpHagvUnytCpM2A&s"
              alt="image"
              className="rounded-xl h-[60px] w-[60px] "
            />
          </div>

          <div className="">
            <p className="text-xl text-white/70">
              Country Wide public School Bageshwar, Uttarakhand
            </p>
            <p className=" text-md text-white/40">
              Field of Study: Engineering (PCM Stream)
              <br />
              Class: 10th
            </p>
          </div>
        </div>

        <div className="px-2 py-2 text-md">
          <p className="text-white/50 mb-2">
            {" "}
            <span className="font-semibold">Grade</span> 8.00 CGPA
          </p>
          <p className="text-white/60 ">
            For my secondary education (10th grade), I attended Country Wide
            Public School and completed my studies with a focus on subjects
            including Mathematics, Science, English, and Social Studies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
