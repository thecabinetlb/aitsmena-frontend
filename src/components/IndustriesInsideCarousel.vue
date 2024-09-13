<script setup>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const myCarousel = ref(null);
const openDetails = ref(1);

defineProps({
  data: Array
});

const breakpoints = {
  280: {
    itemsToShow: 1.5,
    snapAlign:'center'
  },
  // 768px and up
  768: {
    itemsToShow: 2.5,
    snapAlign:'start'
  },
  // 1024 and up
  1024: {
    itemsToShow: 6,
    snapAlign:'start'
  },
};
</script>

<template>
<section>
    <div class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase mb-3">{{ sectiontitle }}</h1>
        <hr v-if="sectiontitle" class="w-full h-4 text-accent2"/>
    </div>
    <div class="relative w-full h-full z-[5] mt-10">
        <Carousel
            ref="myCarousel"
            :breakpoints="breakpoints"
            :wrap-around="true"
            :autoplay="6000"
            :transition="500"
            class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12 mask"
        >
        <Slide v-for="(item, key) in data" :key="item.id" 
          class="relative aspect-square gap-3 rounded-[16px] group bg-noise bg-opacity-50 bg-cover bg-center my-10 transition-transform duration-500"
          @click="openDetails = item.id"
          :class="{'scale-110': openDetails === item.id, 'scale-90': openDetails != item.id}">
          <div class="absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transform duration-300 z-[-1] border-2 group-hover:from-bg2/50 group-hover:to-bg2 group-hover:bg-opacity-75 border-bg2"
          :class="{'from-bg2/50 to-bg2 bg-opacity-75' : openDetails === item.id, 'from-accent1/10 to-accent1/30 bg-opacity-50' : openDetails != item.id}"></div>
            <img :src="item.icon" :alt="item.title" width="94" height="94" class="max-sm:w-[54px] aspect-square mx-auto"/>
            <h2 class="max-sm:text-[14px] text-accent1 font-[400] h-[48px]">{{ item.title }}</h2>
        </Slide>
       </Carousel>

       <!-- Carousel Navigation -->
       <button aria-label="go to the next industry" @click="myCarousel.prev()" class="hidden absolute 2xl:left-40 left-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"> 
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.827274 10.2041L10.1364 0.361975C10.5705 -0.085807 11.275 -0.13782 11.7819 0.316747C12.2341 0.721559 12.2455 1.51309 11.8273 1.95406L4.3544 9.84223H23.3364C23.9796 9.84223 24.5 10.3601 24.5 11.0001C24.5 11.6401 23.9795 12.158 23.3364 12.158H4.3544L11.8273 20.0462C12.2455 20.4872 12.2159 21.2584 11.7819 21.6835C11.3228 22.1313 10.5636 22.0928 10.1364 21.6383L0.827274 11.7962C0.554544 11.5293 0.504543 11.2715 0.5 11.0001C0.5 10.7333 0.663637 10.376 0.827274 10.2041Z" fill="url(#paint0_linear_274_838)"/>
            <defs>
            <linearGradient id="paint0_linear_274_838" x1="28.9197" y1="-3.0868" x2="1.15825" y2="26.1469" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.528659" stop-color="white"/>
            <stop offset="1" stop-color="#91FFFF"/>
            </linearGradient>
            </defs>
            </svg>
        </button>            
        <button aria-label="go to the prev industry" @click="myCarousel.next()" class="hidden absolute 2xl:right-40 right-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"> 
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6864 11.7959L13.7651 21.638C13.3491 22.0858 12.6739 22.1378 12.1882 21.6833C11.7548 21.2784 11.7439 20.4869 12.1447 20.0459L19.3062 12.1578L1.11516 12.1578C0.498755 12.1578 9.0571e-07 11.6399 9.61662e-07 10.9999C1.01761e-06 10.3599 0.498772 9.84198 1.11516 9.84198L19.3062 9.84198L12.1447 1.95381C11.7439 1.51282 11.7722 0.741607 12.1882 0.316491C12.6282 -0.131291 13.3557 -0.0928428 13.7651 0.361718L22.6864 10.2038C22.9477 10.4707 22.9956 10.7285 23 10.9999C23 11.2667 22.8432 11.624 22.6864 11.7959Z" fill="url(#paint0_linear_274_870)"/>
            <defs>
            <linearGradient id="paint0_linear_274_870" x1="-4.23558" y1="25.0868" x2="23.5618" y2="-2.96506" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.528659" stop-color="white"/>
            <stop offset="1" stop-color="#91FFFF"/>
            </linearGradient>
            </defs>
            </svg>
        </button>   
    </div>  
    <!-- Details section -->
    <div class="w-11/12 pt-10 mx-auto 2xl:w-8/12 sm:w-10/12">
        <div v-show="openDetails === 1" class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
                <p class="font-[200]">Navigating the complex landscape of urban development requires a holistic approach to integrating and optimizing systems. With rapid urbanization, cost pressures, and a growing demand for enhanced quality of life, smart cities must address several key challenges: </p>
                <ul role="list" class="list-disc ps-4">
                    <li class="text-accent2 font-[200] max-sm:text-[14px]"><span class="font-[700]">Seamless connectivity between diverse systems, sites, people, and assets.</span>Our solutions ensure that various city components work harmoniously for effective urban management and reduced energy costs. </li>
                    <li class="text-accent2 font-[200] max-sm:text-[14px]">Breaking down historical information silos and aggregating data from multiple sources is crucial. We <span class="font-[700]">provide actionable insights by consolidating data,</span> which helps in improving operational transparency and supporting data-driven decision-making.</li>
                    <li class="text-accent2 font-[200] max-sm:text-[14px]">Our technology harmonizes data received from buildings, transportation networks, power systems, public utilities, security and communication infrastructures to offer a <span class="font-[700]">unified view of maintenance needs, predict downtimes, and schedule proactive maintenance.</span></li>
                    <li class="text-accent2 font-[200] max-sm:text-[14px]">The increasing complexity of urban environments drives the need for centralized Command and Control Centers. Our solutions facilitate the <span class="font-[700]">integration of disparate data sources and multi-vendor systems,</span> enabling efficient monitoring and management from a single control room. </LI>
                    <li class="text-accent2 font-[200] max-sm:text-[14px]">Addressing challenges such as urbanization, overpopulation, and congestion requires sophisticated networks and efficient infrastructure management. Our software supports <span class="font-[700]">monitoring and managing multiple public operations,</span> ensuring smooth and effective urban infrastructure management. </li>
                </ul>
        </div>
        
        <div v-show="openDetails === 2" class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <p class="font-[200]">The food and beverage sector is facing unique hurdles, like a spike in product variations and the need for speedy new product launches. As brands expand globally, manufacturers must boost efficiency and cut costs to stay competitive. With consumers becoming pickier and less brand-loyal, it’s vital to avoid stock shortages, provide a reliable customer experience, and quickly roll out innovative products.</p>
            <p class="font-[200]">Our solutions tackle these issues with:</p>
            <ul role="list" class="list-disc ps-4">
                <li class="text-accent2 font-[200] max-sm:text-[14px]">Comprehensive tools for monitoring and controlling manufacturing processes.</li>
                <li class="text-accent2 font-[200] max-sm:text-[14px]">Systems for quality management, automated workflows, and precise data reporting.</li>
                <li class="text-accent2 font-[200] max-sm:text-[14px]">Solutions to enhance line and equipment performance, along with overall equipment effectiveness (OEE).</li>
            </ul>
            <p class="font-[200]">Regulatory standards, such as the U.S. Food Safety Modernization Act (FSMA), Hazard Analysis and Critical Control Points (HACCP), and Global Food Safety Initiative (GFSI), require stringent food safety measures. Our solutions are designed to meet these standards and keep your operations running smoothly. </p>
        </div>

        <div v-show="openDetails === 3" class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <p class="font-[200]">Our technologies provide manufacturers with real-time insights, predictive maintenance, and optimization across all production levels. This helps minimize waste, reduce costs, and maximize efficiency. </p>
            <p class="font-[200]">By harnessing these technologies, factories can unlock hidden value and improve eco-efficiency, which is essential for meeting net-zero targets, enhancing productivity, and achieving sustainability goals. </p>
            <p class="font-[200]">In industries such as pharmaceuticals and consumer goods where maintaining quality and brand integrity is paramount, advanced manufacturing software solutions enable robust quality assurance, product transparency, and traceability at every level of the production. This practice ensures compliance with stringent regulatory standards while delivering on the brand’s promise to customers. </p>
            <p class="font-[200]"><span class="font-[700]">The ability to respond swiftly to changing market conditions is vital for manufacturers.</span> As market trends shift toward product personalization and customization, our innovative softwares help manufacturers adapt quickly and efficiently. Real-time operational visibility enables precise order execution and schedule adherence, empowering the workforce to innovate and adapt. The successful delivery of critical products, like vaccines, illustrates how having the right tools can be the difference between merely meeting and significantly exceeding market demands.</p> 
        </div>   

        <div v-show="openDetails === 4"  class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <h1 class="font-[700]">Oil and Gas Production, Processing, and Refining </h1>
            <p class="font-[200]">There is an increasing demand for optimizing existing assets in the Oil and Gas industry to safely boost output while adhering to environmental and regulatory standards.</p>
            
            <h1 class="font-[700]">The Role of Technology</h1>
            <p class="font-[200]">Across the industry, our approach helps identify "value-leaks" and implement operational improvements to close these gaps, driving greater efficiency and performance.</p>
            <p class="font-[200]">For upstream production, the Industrial Internet of Things (IIoT) now provides the critical connectivity needed to extend the life of wells and improve operational efficiency. In processing and refining, technology involves enhancing reliability and efficiency and gaining the flexibility to process a wider variety of crude oils. This adaptability, such as quickly switching between gasoline and diesel fuel production, can significantly impact profitability. </p>
            
            <h1 class="font-[700]">Engineering and Operational Challenges</h1>
            <p class="font-[200]">As the oil and gas sector navigates environmental and regulatory changes, companies must shift their focus from expansion and growth to reducing costs, improving operational efficiency, and safeguarding existing infrastructure. The key to achieving these goals lies in preventing failures and minimizing equipment and pipeline downtime, which are crucial for maintaining profitability.</p>
            <p class="font-[200]">By leveraging our advanced technologies, companies can enhance scalability, uptime, predictive maintenance, and overall efficiency. This proactive approach is essential in today’s economic environment, where maximizing the return on current assets is paramount. </p>
        
        </div>   
        
        <div v-show="openDetails === 5"  class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <p class="font-[200]">In the energy sector, the focus is on revolutionizing the entire supply chain, from engineering and procurement to site material control and construction planning. By integrating advanced technologies, energy companies can streamline processes, reduce waste, and improve resource utilization, all while maintaining compliance with stringent regulatory standards.</p>
            <p class="font-[200]">The digital transformation is an important step toward achieving net-zero targets. Our innovation supports the energy industry, from nuclear and fossil fuel to renewables. Through data-driven insights and our innovative solutions, energy companies are better equipped to meet climate commitments and become pioneers in the responsible use of resources. Collaboration with industry leaders across the sector is key.</p>
            <p class="font-[200]">Our energy sector solutions enable organizations to tap into transformative benefits by harnessing data with greater precision. We bolster electric grid reliability and resilience, fine-tune the intricacies of generation, transmission, and distribution, and maximize asset utilization to elevate situational awareness while reducing carbon footprints. Our technologies empower workforce connectivity, driving agility and resilience.</p>
        </div>   
            
        <div v-show="openDetails === 6"  class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <p class="font-[200]">The utilities sector, including water and wastewater management, is facing unprecedented challenges as it adapts to the demands of a rapidly changing world: increasing demands from regulators, customers, and environmental concerns. Our comprehensive solutions are designed to help utility operators tackle these challenges head-on with the tools, expertise, and insights needed to streamline operations, cut costs, and stay ahead of the game.</p>
            <p class="font-[200]">The changes are driven by the need to better collect, analyze, and utilize vast amounts of data generated across the sector. Being able to make quick and informed decisions and meet regulatory standards is becoming increasingly important. </p>
            
            <h1 class="font-[700]">Water and Wastewater Management</h1>
            <p class="font-[200]">There is an increasing demand for optimizing existing assets in the Oil and Gas industry to safely boost output while adhering to environmental and regulatory standards.</p>
            <p class="font-[200]">In developing regions, traditional technologies often fall short in delivering clean, affordable water. The complexity of maintaining and expanding water infrastructure requires innovative approaches that enable real-time data analysis and decision-making across multi-user operations.</p>
            
            <h1 class="font-[700]">Improving Operational Efficiency and Reducing Downtime </h1>
            <p class="font-[200]">To meet these challenges, water and wastewater utilities must transition from outdated engineering methods to more efficient, automated systems. Adopting online, template-based, and object-oriented solutions can greatly boost efficiency and cut costs. This shift helps ensure that utilities can meet the demanding regulatory standards.</p>
            <p class="font-[200]">Automation is important in modern utility but comes with its own challenges. Our solutions offer the reliability and simplicity needed to address these challenges, reducing complexity and risk while ensuring continuous availability. </p>
                
        </div>  

        <div v-show="openDetails === 7"  class="space-y-6 traking-wide font-[200] max-sm:text-[14px] text-accent2 pb-10 mt-10">
            <p class="font-[200]">In the metals, mining, and minerals industry, the application of advanced engineering, operations, and management skills is essential to addressing the sector's complex challenges. Our solutions are designed to enhance your ability to navigate the challenges and help you contribute effectively to this demanding field.</p>
            
            <h1 class="font-[700]">Handling Market Fluctuations</h1>
            <p class="font-[200]">Mining operations are highly sensitive to global economic shifts. Mine operators need to quickly adapt to changing conditions to stay ahead. The challenges lie in boosting investment, production, and capacity during boom periods, while focusing on efficiency and cutting costs when the market dips. Balancing agility with safety, environmental responsibility, and regulatory compliance is key to avoid risking fines and losing licenses.</p>
            
            <h1 class="font-[700]">Managing Workforce Challenges</h1>
            <p class="font-[200]">The industry also deals with the challenge of the availability of qualified staff. With many experienced workers nearing retirement and struggles to recruit and keep skilled replacements, capturing and transferring knowledge is critical. Today's mining teams are more diverse, temporary, and remote, making fast and safe knowledge sharing crucial. </p>
            
            <h1 class="font-[700]">Mitigating the Challenges</h1>
            <p class="font-[200]">Mining companies worldwide are responding to these challenges by integrating operations, optimizing performance, and applying best practices across their value chains. The focus is on increasing efficiency, improving asset utilization, lowering costs, and reducing downtime, all while becoming leaner and more agile in their operations. </p>
        </div>          
    </div>
</section>
</template>


<style scoped>
.carousel__slide{
  display: flex !important;
  flex-direction: column !important;
  margin:0 10px !important;
  justify-content: center !important;
  align-items: center !important;
} 
.mask {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-size: cover; 
  mask-position: center;
}
</style>