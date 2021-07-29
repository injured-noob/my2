// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  /*box1,
  box2,
  box3,
  box4,
  course1,
  box4,*/
  course1,
  div4,
  div3,
  div2,
  text,  
  info_block,
  info,
  pic,
}from '../components/layout.module.css'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="E Acad | Home">
      <div className={info}>
        <div>
          <div>
          <StaticImage className={info_block}
                  alt="College student"
                  src="../images/student.jpg"
            /> 
            <div className={pic}>
              <h1>The only place to Transform your Coaching Institute to Smart Coaching</h1>
              <p>Class 6-12, JEE, NEET, CAT, AFCAT, CDS, NDA
Best video lectures along with best-animated examples to understand and remember the concepts for a long time.</p>
            </div>
          </div>

          <div className={info_block}>
            <h1>Best ever most entertaining video lectures for your kids</h1>
            <p>The first online platform where you will learn all the concepts by visualizing them through beautiful simulations helping you to remember them for longer time.</p>
          </div>
          <StaticImage className={pic}
                alt="Student sat at laptop taking notes"
                src="../images/lecture.jpg"
          />
        </div>

        <div>
         <StaticImage className={info_block}
                alt="Steps to success"
                src="../images/steps.webp"
          /> 
          <div className={pic}>
            <h1>Step by Step Climbing to Higher Levels</h1>
            <p>We will provide the best journey for your learning experience</p>
          </div>
        </div>

        <div>
          <div className={info_block}>
            <h1>Unlimited Practice and Analysis of Test Series</h1>
            <p>Providing you with best Test Series and analysis</p>
          </div>
          <StaticImage className={pic}
                alt="Graphic of a practice test being taken with a stopwatch"
                src="../images/practice.jpg"
          />
        </div>

      </div>

      
      <div className={course1}>CourseName</div>
      <div className={div4}>

     {/*<StaticImage className={box1}  
                alt="Course 1 logo"
                src="../images/box 3.png"
              
        />
        <StaticImage className={box2}
                alt="Course 1 logo"
                src="../images/box 2.png"
        />
        <StaticImage className={box3}
                alt="Course 1 logo"
                src="../images/box1.png"
        />
        <StaticImage className={box4}
                alt="Course 1 logo"
                src="../images/box 4.png"
  /> */}
      </div>
      <div className={div3}><p className={text}>Classes slot</p></div>
      <div className={div2}></div>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage