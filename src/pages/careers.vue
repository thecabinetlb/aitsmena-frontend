<script setup>
import banner from '/images/banners/careers.webp'
import JobsList from '../components/JobsList.vue';
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import Why from '../components/Why.vue';
import Job from '../components/Job.vue';
import Graduate from '../components/Graduate.vue';

const why = [
'Thrive personally and professionally',
'Inclusive culture that celebrates diversity',
'Purpose-driven approach',
'Attractive salary packages',
'Performance-based annual increases',  
'Work-life balance',  
]

const jobs = [
  { id: 1, title: 'Project Manager', location: 'Al Khobar, Saudi Arabia', 
  summary: 'The Project Manager will be responsible for managing and ensuring the successful execution of projects related to AVEVA software, from initial planning to completion. This role involves coordinating with cross-functional teams, managing timelines, budgets, and resources, and ensuring that projects meet the specified objectives, deadlines, and quality standards.',
  description: Job}
]

// const internships = [
// { id: 1, title: 'Project Manager', location: 'Al Khobar, Saudi Arabia', 
//   summary: 'The Project Manager will be responsible for managing and ensuring the successful execution of projects related to AVEVA software, from initial planning to completion. This role involves coordinating with cross-functional teams, managing timelines, budgets, and resources, and ensuring that projects meet the specified objectives, deadlines, and quality standards.',
//   description:'' }
// ]

const graduateprogram = [
{ id: 1, title: 'Graduate Engineer', location: 'Al Khobar, Eastern, Saudi Arabia', summarytitle:"AITS Graduate Program",
  summary:"Are you a fresh graduate with a passion for software engineering? Our Graduate Program offers a unique opportunity to build your career with us!",
  description: Graduate }
]
</script>
<template>
    <head>
      <title>Careers at AITS | Join Our Team of Innovators and Problem Solvers</title>
      <meta name="description" content="Explore exciting career opportunities at AITS. Join a dynamic team driving innovation in industrial software solutions. Apply now to thrive in a diverse, purpose-driven environment with competitive benefits."/>
    </head>      
    <InnerHero :pagebanner="banner" pagetitle="Careers" pagedescription="You might just be the employee we’ve been looking for! Browse through our selection of job vacancies and apply to be part of the family."/>
    <section class="relative -mt-40">
      <Why sectiontitle="Why AITS?" :data="why"/>
      <JobsList sectionType="job openings" sectiontitle="Job Openings" :data="jobs"
      sectiondescription1="We’re looking for makers, innovators, and problem solvers who are driven by the passion to innovate. Join a team that brings together the power of technology to build a more intelligent, connected, and productive world. We offer a dynamic environment where you can grow your career while solving complex, real-world challenges that push the boundaries of human potential."
      sectiondescription2="Explore our job openings, if you’re ready to make an impact and take the next step in your career journey with us."/>
      <JobsList sectionType="graduate program and internship opportunities" sectiontitle="Graduate Program and Internship Opportunities"  :data="graduateprogram"
      sectiondescription1="Kickstart your career with our Internship and Graduate Program at AITS!"
      sectiondescription2="Our program is designed for curious minds, eager to explore the future of software solutions and digital services."
      sectiondescription3="Whether you’re looking to gain experience or receive mentorship from industry leaders, our program provides the perfect platform to develop your skills, solve real-world problems, and grow in a supportive environment."
      sectiondescription4="If you’re passionate about innovation and ready to take on exciting challenges, join us! "/>
      <InsideBody/>
    </section>    
</template>