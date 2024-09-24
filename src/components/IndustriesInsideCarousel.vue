<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/less';
import 'swiper/less/autoplay';

const swiperRef = ref(null);
const openDetails = ref(1);

defineProps({
  data: Array,
  sectiontitle: String
});

const breakpoints = {
  280: {
    slidesPerView: 1.5,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

// Access the Swiper instance using onSwiper
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const goNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext(500, true);
  }
};

const goPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev(500, true);
  }
};
// Function to stop autoplay when a slide is clicked
const stopAutoplay = (itemId) => {
  openDetails.value = itemId;
  if (swiperRef.value && swiperRef.value.autoplay) {
    swiperRef.value.autoplay.stop();
  }
};
</script>

<template>
<section>
  <div class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12">
    <h1 class="text-accent1 font-[200] max-sm:text-[14px] text-lg uppercase mb-3">{{ sectiontitle }}</h1>
    <hr v-if="sectiontitle" class="w-full h-4 text-accent2"/>
  </div>

  <div class="relative w-full h-full z-[5] mt-10">
  <Swiper
    :breakpoints="breakpoints"
    :centered-slides="true"
    :loop="true"
    :autoplay="{delay: 1000, disableOnInteraction: false}" 
    :speed="1000" 
    class="w-11/12 mx-auto mask 2xl:w-8/12 sm:w-10/12"
    @swiper="onSwiper" 
    :modules="[Autoplay]"
  >
    <SwiperSlide v-for="(item, key) in data" :key="item.id" 
      class="relative cursor-pointer aspect-square gap-3 rounded-[16px] group bg-noise bg-opacity-50 bg-cover bg-center transition-transform duration-500"
      @click="stopAutoplay(item.id)"
      :class="{'scale-110': openDetails === item.id, 'scale-90': openDetails != item.id}">
      <div class="absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transform duration-300 z-[-1] border-2 group-hover:from-bg2/50 group-hover:to-bg2 group-hover:bg-opacity-75 border-bg2"
        :class="{'from-bg2/50 to-bg2 bg-opacity-75': openDetails === item.id, 'from-accent1/10 to-accent1/30 bg-opacity-50': openDetails != item.id}">
      </div>
      <img :src="item.icon" :alt="item.title" width="94" height="94" class="mx-auto"/>
      <h2 class="text-center max-sm:text-[14px] text-accent1 font-[400] h-[48px]">{{ item.title }}</h2>
    </SwiperSlide>
  </Swiper>

    <!-- Carousel Navigation -->
    <button
      aria-label="go to the next industry"
      @click="goPrev"
      class="hidden absolute 2xl:left-40 left-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"
    >
      <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.827274 10.2041L10.1364 0.361975C10.5705 -0.085807 11.275 -0.13782 11.7819 0.316747C12.2341 0.721559 12.2455 1.51309 11.8273 1.95406L4.3544 9.84223H23.3364C23.9796 9.84223 24.5 10.3601 24.5 11.0001C24.5 11.6401 23.9795 12.158 23.3364 12.158H4.3544L11.8273 20.0462C12.2455 20.4872 12.2159 21.2584 11.7819 21.6835C11.3228 22.1313 10.5636 22.0928 10.1364 21.6383L0.827274 11.7962C0.554544 11.5293 0.504543 11.2715 0.5 11.0001C0.5 10.7333 0.663637 10.376 0.827274 10.2041Z"
          fill="url(#paint0_linear_274_838)"
        />
        <defs>
          <linearGradient id="paint0_linear_274_838" x1="28.9197" y1="-3.0868" x2="1.15825" y2="26.1469" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="0.528659" stop-color="white" />
            <stop offset="1" stop-color="#91FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button
      aria-label="go to the prev industry"
      @click="goNext"
      class="hidden absolute 2xl:right-40 right-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"
    >
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.6864 11.7959L13.7651 21.638C13.3491 22.0858 12.6739 22.1378 12.1882 21.6833C11.7548 21.2784 11.7439 20.4869 12.1447 20.0459L19.3062 12.1578L1.11516 12.1578C0.498755 12.1578 9.0571e-07 11.6399 9.61662e-07 10.9999C1.01761e-06 10.3599 0.498772 9.84198 1.11516 9.84198L19.3062 9.84198L12.1447 1.95381C11.7439 1.51282 11.7722 0.741607 12.1882 0.316491C12.6282 -0.131291 13.3557 -0.0928428 13.7651 0.361718L22.6864 10.2038C22.9477 10.4707 22.9956 10.7285 23 10.9999C23 11.2667 22.8432 11.624 22.6864 11.7959Z"
          fill="url(#paint0_linear_274_870)"
        />
        <defs>
          <linearGradient id="paint0_linear_274_870" x1="-4.23558" y1="25.0868" x2="23.5618" y2="-2.96506" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="0.528659" stop-color="white" />
            <stop offset="1" stop-color="#91FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  </div>
  
  <!--Details section -->
  <div class="w-11/12 pt-10 mx-auto 2xl:w-8/12 sm:w-10/12">
    
  <Transition name="slide-fade">
    <div v-if="openDetails === 1" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
        <p class="font-[200] max-sm:text-[14px]">Navigating the complex landscape of urban development requires a holistic approach to integrating and optimizing systems. With rapid urbanization, cost pressures, and a growing demand for enhanced quality of life, smart cities must address several key challenges: </p>
        <ul role="list" class="list-disc ps-4">
            <li class="font-[200] max-sm:text-[14px]"><span class="font-[700]">Seamless connectivity between diverse systems, sites, people, and assets. </span>Our solutions ensure that various city components work harmoniously for effective urban management and reduced energy costs. </li>
            <li class="font-[200] max-sm:text-[14px]">Breaking down historical information silos and aggregating data from multiple sources is crucial. We <span class="font-[700]">provide actionable insights by consolidating data,</span> which helps in improving operational transparency and supporting data-driven decision-making.</li>
            <li class="font-[200] max-sm:text-[14px]">Our technology harmonizes data received from buildings, transportation networks, power systems, public utilities, security and communication infrastructures to offer a <span class="font-[700]">unified view of maintenance needs, predict downtimes, and schedule proactive maintenance.</span></li>
            <li class="font-[200] max-sm:text-[14px]">The increasing complexity of urban environments drives the need for centralized command and control centers. Our solutions facilitate the <span class="font-[700]">integration of disparate data sources and multi-vendor systems,</span> enabling efficient monitoring and management from a single control room. </LI>
            <li class="font-[200] max-sm:text-[14px]">Addressing challenges such as urbanization, overpopulation, and congestion requires sophisticated networks and efficient infrastructure management. Our software supports <span class="font-[700]">monitoring and managing multiple public operations,</span> ensuring smooth and effective urban infrastructure management. </li>
        </ul>
      </div>       
</Transition>
  
  <Transition name="slide-fade">
      <div v-if="openDetails === 2" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <p class="font-[200] max-sm:text-[14px]">The food and beverage sector is facing unique challanges, like a spike in product variations and the need for speedy new product launches. As brands expand globally, manufacturers must boost efficiency and cut costs to stay competitive. With consumers becoming pickier and less brand-loyal, it’s vital to avoid stock shortages, provide a reliable customer experience, and quickly roll out innovative products.</p>
          <p class="font-[200] max-sm:text-[14px]">Our solutions tackle these issues with:</p>
          <ul role="list" class="list-disc ps-4">
              <li class="font-[200] max-sm:text-[14px]">Comprehensive tools for monitoring and controlling manufacturing processes.</li>
              <li class="font-[200] max-sm:text-[14px]">Systems for quality management, automated workflows, and precise data reporting.</li>
              <li class="font-[200] max-sm:text-[14px]">Solutions to enhance line and equipment performance, along with overall equipment effectiveness (OEE).</li>
          </ul>
          <p class="font-[200] max-sm:text-[14px]">Regulatory standards, such as the U.S. Food Safety Modernization Act (FSMA), Hazard Analysis and Critical Control Points (HACCP), and Global Food Safety Initiative (GFSI), require stringent food safety measures. Our solutions are designed to meet these standards and keep your operations running smoothly. </p>
      </div>  
</Transition>         
  
  <Transition name="slide-fade">
      <div v-if="openDetails === 3" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <p class="font-[200] max-sm:text-[14px]">Our technologies provide manufacturers with real-time insights, predictive maintenance, and optimization across all production levels. This helps minimize waste, reduce costs, and maximize efficiency. </p>
          <p class="font-[200] max-sm:text-[14px]">By harnessing these technologies, factories can unlock hidden value and improve eco-efficiency, which is essential for meeting net-zero targets, enhancing productivity, and achieving sustainability goals. </p>
          <p class="font-[200] max-sm:text-[14px]">In industries such as pharmaceuticals and consumer goods where maintaining quality and brand integrity is paramount, advanced manufacturing software solutions enable robust quality assurance, product transparency, and traceability at every level of the production. This practice ensures compliance with stringent regulatory standards while delivering on the brand’s promise to customers. </p>
          <p class="font-[200] max-sm:text-[14px]"><span class="font-[700]">The ability to respond swiftly to changing market conditions is vital for manufacturers.</span> As market trends shift toward product personalization and customization, our innovative softwares help manufacturers adapt quickly and efficiently. Real-time operational visibility enables precise order execution and schedule adherence, empowering the workforce to innovate and adapt. The successful delivery of critical products, like vaccines, illustrates how having the right tools can be the difference between merely meeting and significantly exceeding market demands.</p> 
      </div>   
</Transition>
  
  <!-- <Transition name="slide-fade">
      <div v-if="openDetails === 4"  class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <h1 class="font-[700] text-lg">Oil and Gas Production, Processing, and Refining </h1>
          <p class="font-[200] max-sm:text-[14px]">There is an increasing demand for optimizing existing assets in the Oil and Gas industry to safely boost output while adhering to environmental and regulatory standards.</p>
          
          <h1 class="font-[700] text-lg">The Role of Technology</h1>
          <p class="font-[200] max-sm:text-[14px]">Across the industry, our approach helps identify "value-leaks" and implement operational improvements to close these gaps, driving greater efficiency and performance.</p>
          <p class="font-[200] max-sm:text-[14px]">For upstream production, the Industrial Internet of Things (IIoT) now provides the critical connectivity needed to extend the life of wells and improve operational efficiency. In processing and refining, technology involves enhancing reliability and efficiency and gaining the flexibility to process a wider variety of crude oils.</p>
          
          <h1 class="font-[700] text-lg">Engineering and Operational Challenges</h1>
          <p class="font-[200] max-sm:text-[14px]">As the oil and gas sector navigates environmental and regulatory changes, companies must shift their focus from expansion and growth to reducing costs, improving operational efficiency, and safeguarding existing infrastructure. The key to achieving these goals lies in preventing failures and minimizing equipment and pipeline downtime, which are crucial for maintaining profitability.</p>
          <p class="font-[200] max-sm:text-[14px]">By leveraging our advanced technologies, companies can enhance scalability, uptime, predictive maintenance, and overall efficiency. This proactive approach is essential in today’s economic environment, where maximizing the return on current assets is paramount. </p>
      </div>   
</Transition> -->
  
  <Transition name="slide-fade">    
      <div v-if="openDetails === 4" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <p class="font-[200] max-sm:text-[14px]">In the renewable energy sector, the goal is to reshape the entire energy ecosystem, from how power is generated and stored to how it’s distributed and used. By adopting sustainable practices and smart technologies, energy companies can simplify operations, cut waste, and make the most of their resources, all while keeping up with tougher regulations and supporting global Sustainable Development Goals (SDGs).</p>
          <p class="font-[200] max-sm:text-[14px]">Digital transformation is key to hitting net-zero energy targets. Our innovative solutions power the energy sector, whether it's solar, wind, or hydropower. With real-time data and smart insights, companies can better meet climate goals, lower emissions, and lead the way in sustainable resource use. Partnering with industry experts is crucial in making this shift successful.</p>
          <p class="font-[200] max-sm:text-[14px]">Our green energy solutions bring big benefits by using data with precision. We strengthen electric grid reliability, improve how energy is generated and distributed, and make sure assets are used to their fullest, all while cutting carbon footprints. By connecting teams with advanced tech, we help energy companies boost agility, sustainability, and long-term success.</p>
      </div>   
</Transition>
  
  <Transition name="slide-fade">
      <div v-if="openDetails === 5" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <p class="font-[200] max-sm:text-[14px]">The water and wastewater sector is facing unprecedented challenges as a result of the increasing regulatory pressures, consumers demands, and environmental threats.</p>
          <p class="font-[200] max-sm:text-[14px]">With water becoming an increasingly scarce and priceless resource, the urgency of efficient management and conservation has never been more dire. </p>
          <p class="font-[200] max-sm:text-[14px]">Our comprehensive solutions empower utility operators to overcome these challenges through advanced tools, digitalization, and insights to optimize operations, reduce costs, and ensure long-term sustainability.</p>
          <p class="font-[200] max-sm:text-[14px]">The push for change is driven by the need to better collect, analyze, and utilize large amounts of data generated across the sector.</p>
          <p class="font-[200] max-sm:text-[14px]">In an age where every drop matters, quick, informed decision-making and regulatory compliance are essential to achieving sustainable water management practices aligned with the global Sustainable Developemnt Goals (SDGs).</p>
     
          <h1 class="font-[700] text-lg">Water and Wastewater Management</h1>
          <p class="font-[200] max-sm:text-[14px]">Water and wastewater utilities are under immense pressure to deliver reliable, affordable services while adhering to stringent regulations. Balancing energy-intensive processes, such as water reclamation and desalination, with the need to maintain water quality and expand access to clean water, remains a key challenge. Effective water conservation, energy optimization, and stringent compliance monitoring are fundamental to achieving these goals.</p>
          <p class="font-[200] max-sm:text-[14px]">In many regions, traditional technologies are no longer sufficient to meet the growing demand for clean, affordable water. The complexity of maintaining and expanding water infrastructure necessitates innovative approaches, such as real-time data analysis and decision-making capabilities, to enhance multi-user operations. </p>
   
          <h1 class="font-[700] text-lg">Benefits</h1>
          <p class="font-[200] max-sm:text-[14px]">Water and wastewater utilities need to move away from outdated methods and embrace smarter, more automated and digitalized systems. Shifting to online, template-based, and object-oriented solutions won’t just boost efficiency, it cuts costs too. This shift helps utilities stay on top of strict regulations while getting the most out of their resources.</p>
          <p class="font-[200] max-sm:text-[14px]">Automation and digitalization are game changers for modern water utilities, but they bring their own challenges. Our solutions offer the simplicity, reliability, and scalability to tackle these issues head-on, cutting down complexity and risk. With this, we ensure continuous service—crucial for long-term sustainability and resilience.</p>
        </div>  
</Transition>
  
  <Transition name="slide-fade">
      <div v-if="openDetails === 6" class="pb-10 mt-10 space-y-6 traking-wide text-accent2">
          <p class="font-[200] max-sm:text-[14px]">In the metals, mining, and minerals industry, the application of advanced engineering, operations, and management skills is essential to addressing the sector's complex challenges. Our solutions are designed to enhance your ability to navigate the challenges and help you contribute effectively to this demanding field.</p>
          
          <h1 class="font-[700] text-lg">Handling Market Fluctuations</h1>
          <p class="font-[200] max-sm:text-[14px]">Mining operations are highly sensitive to global economic shifts. Mine operators need to quickly adapt to changing conditions to stay ahead. The challenges lie in boosting investment, production, and capacity during boom periods, while focusing on efficiency and cutting costs when the market dips. Balancing agility with safety, environmental responsibility, and regulatory compliance is key to avoid risking fines and losing licenses.</p>
          
          <h1 class="font-[700] text-lg">Managing Workforce Challenges</h1>
          <p class="font-[200] max-sm:text-[14px]">The industry also deals with the challenge of the availability of qualified staff. With many experienced workers nearing retirement and struggles to recruit and keep skilled replacements, capturing and transferring knowledge is critical. Today's mining teams are more diverse, temporary, and remote, making fast and safe knowledge sharing crucial. </p>
          
          <h1 class="font-[700] text-lg">Mitigating the Challenges</h1>
          <p class="font-[200] max-sm:text-[14px]">Mining companies worldwide are responding to these challenges by integrating operations, optimizing performance, and applying best practices across their value chains. The focus is on increasing efficiency, improving asset utilization, lowering costs, and reducing downtime, all while becoming leaner and more agile in their operations. </p>
      </div>      
</Transition>
</div>    

</section>
</template>
<style scoped>
.swiper-slide{
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
} 
.mask {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-size: cover; 
  mask-position: center;
}
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
