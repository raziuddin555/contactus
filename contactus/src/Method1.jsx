import { useState } from "react";
import { toast } from "react-toastify";

function Method1() {
  // const [data, setData] = useState({})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //  const changeName = (e)=>{
  //   setName(e.target.name)
  //  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const myObj = { name, email, subject, message: message };
    console.log(myObj);
    try {
      const res = await fetch("http://localhost:8000/api/contact/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myObj),
      });
      const mess = await res.json();
      console.log(mess);
      if (mess.success) {
        toast.success(mess.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(mess.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Internal server error!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }
  };

  return (
    <div className="grid bg-gray-300 h-screen max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt=""
          className="py-6 pr-36 h-52 md:h-64"
        />
      </div>
      <form noValidate="" className="space-y-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Name"
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="Your Subject"
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your Message"
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Method1;
