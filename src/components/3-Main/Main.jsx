import './Main.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import projectI from "./moataz.png";
import projectII from "./food.png";

const Main = () => {
const projects = [
  {
    img: projectI,
    title: "Store",
    tag: "Full Stack",
    subtitle:
      "Modern e-commerce application built with React, Redux Toolkit and Express with authentication and cart management.",
    link: "https://moataz-client.vercel.app/",
    github: "https://github.com/Asser-wael/moataz_client",
    more: "#",
  },
  {
    img: projectII,
    title: "Restaurant Management System",
    tag: "Full Stack",
    subtitle:
      "Complete restaurant management system featuring real-time orders, cashier, kitchen display, admin dashboard and online ordering using Socket.IO.",
    link: "https://restaurant-client-six-self.vercel.app/",
    github: "https://github.com/Asser-wael/restaurant-client",
    more: "#",
  },
];


  const [animate] = useState(false);



  return (
    <>
     <Helmet>
        <title>المشاريع | Asser Wael Portfolio</title>
        <meta
          name="description"
          content="استعرض أحدث مشاريع Asser Wael في تطوير الويب باستخدام React, Node, و CSS."
        />
        <meta property="og:title" content="مشاريع Asser Wael" />
        <meta property="og:description" content="نماذج من أعمالي في تصميم مواقع حديثة وتطبيقات ويب." />
        <meta property="og:image" content="/preview.png" />
      </Helmet>

      <main>
        <div className='r-section'>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`card ${animate ? "animate" : ""}`}
              key={index}
            >
              <div className='img'>
                <img src={project.img} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <div className='Git-link-more'>
                <div>
                  <a href={project.link} target="_blank" ><span className='icon-link'></span></a>
                  <a href={project.github} target="_blank"><span className='icon-github'></span></a>
                </div>
                <a href={project.more}><span className='icon-arrow-right'></span></a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
