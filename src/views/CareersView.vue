<script setup>
import banner from '/images/banners/careers.webp'
import JobsList from '../components/JobsList.vue';
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import BenefitsFlexWithBlur from '../components/BenefitsFlexWithBlur.vue';
const jobs =[
  { id: 1, title: 'Software Engineer', type: 'Full-time', to: 'https://example.com/job1', target: '_blank', location: 'San Francisco, CA' },
  { id: 2, title: 'Data Analyst', type: 'Contract', to: 'https://example.com/job2', target: '_blank', location: 'New York, NY' },
  { id: 3, title: 'Marketing Specialist', type: 'Part-time', to: 'https://example.com/job3', target: '_blank', location: 'Los Angeles, CA' },
  { id: 4, title: 'Graphic Designer', type: 'Freelance', to: 'https://example.com/job4', target: '_blank', location: 'Chicago, IL' },
  { id: 5, title: 'Project Manager', type: 'Full-time', to: 'https://example.com/job5', target: '_blank', location: 'Seattle, WA' },
  { id: 6, title: 'HR Coordinator', type: 'Full-time', to: 'https://example.com/job6', target: '_blank', location: 'Boston, MA' },
  { id: 7, title: 'Financial Analyst', type: 'Full-time', to: 'https://example.com/job7', target: '_blank', location: 'Austin, TX' },
  { id: 8, title: 'Customer Service Representative', type: 'Part-time', to: 'https://example.com/job8', target: '_blank', location: 'Denver, CO' },
];
const internships = [
  { id: 1, title: 'Marketing Intern', type: 'Internship', to: 'https://example.com/internship1', target: '_blank', location: 'San Francisco, CA' },
  { id: 2, title: 'Software Development Intern', type: 'Internship', to: 'https://example.com/internship2', target: '_blank', location: 'New York, NY' },
  { id: 3, title: 'Data Analysis Intern', type: 'Internship', to: 'https://example.com/internship3', target: '_blank', location: 'Los Angeles, CA' },
  { id: 4, title: 'Graphic Design Intern', type: 'Internship', to: 'https://example.com/internship4', target: '_blank', location: 'Chicago, IL' },
  // { id: 5, title: 'Project Management Intern', type: 'Internship', to: 'https://example.com/internship5', target: '_blank', location: 'Seattle, WA' },
];
const benefits = [
  { 
    id: 1, 
    title: 'Competitive compensation and rewards packages tailored to recognize and appreciate individual contributions', 
    // description: 'Comprehensive health insurance coverage for employees and their dependents, including medical, dental, and vision benefits.'
  },
  { 
    id: 2, 
    title: 'Robust opportunities for professional development and career advancement, including access to cutting-edge training programs and mentorship initiatives', 
    // description: 'Competitive salaries and performance-based bonuses or incentives to reward employees for their contributions and achievements.'
  },
  { 
    id: 3, 
    title: 'A collaborative and supportive workplace culture that champions innovation, diversity, and work-life balance, ensuring every team member feels empowered and valued.', 
    // description: 'Support for ongoing learning and skill development through training programs, workshops, conferences, and tuition reimbursement.'
  },
  { 
    id: 4, 
    title: 'Unlock the full potential of your career journey with AITS, where your talents are nurtured, and your aspirations are embraced.', 
    // description: 'Regular social events, team-building activities, and employee perks such as catered lunches, snacks, and recreational facilities to foster a positive and inclusive company culture.'
  },
  // { 
  //   id: 5, 
  //   title: 'Parental Leave', 
  //   description: 'Paid parental leave policies for new parents, including maternity, paternity, and adoption leave, to support employees during significant life transitions.'
  // },
  // { 
  //   id: 6, 
  //   title: 'Employee Recognition Programs', 
  //   description: 'Recognition programs to acknowledge and reward employees for their contributions, milestones, and achievements, fostering a culture of appreciation and recognition.'
  // },
  // { 
  //   id: 7, 
  //   title: 'Employee Referral Program', 
  //   description: 'Incentives for employees who refer qualified candidates to open positions within the company, helping to attract top talent through employee networks.'
  // }
];
</script>
<template>
  <main>
      <InnerHero :pagebanner="banner" pagename="careers" />
      
      <section class="relative">
        <JobsList sectionid="jobs" sectiontitle="Job Openings" sectiondescription="Stay informed with the latest insights, trends, and developments in industrial automation.
          Explore our blog for thought-provoking articles, expert opinions, and practical tips to help
          your business stay ahead of the curve." :data="jobs"/>
        <JobsList sectionid="internships" sectiontitle="Internship Opportunities" sectiondescription="Are you passionate about innovation, sustainability, and driving positive change in the
        industrial landscape? Explore exciting career opportunities at AITS and join us on our mission
        to revolutionize the industrial world." :data="internships"/>
        <BenefitsFlexWithBlur sectiontitle="Employees Benifits" 
        sectiondescription="At AITS, we value our employees and are committed to their growth and well-being, where
        talent thrives and ambitions are realized. Explore the unique advantages of being part of our
        team, encompassing:" :data='benefits'/>
        <InsideBody/>
      </section>    
    </main>
</template>