import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
        {
          title: "Lahore Heights",
          price: "₨ 25,00,000",
          location: "Gulberg, Lahore",
          image: project_img_1
        },
        {
          title: "Park View Residences",
          price: "₨ 28,00,000",
          location: "DHA, Lahore",
          image: project_img_2
        },
        {
          title: "Riverside Villas",
          price: "₨ 30,00,000",
          location: "Faisal Town, Lahore",
          image: project_img_3
        },
        {
          title: "Skyline Tower",
          price: "₨ 27,50,000",
          location: "Bahria Town, Lahore",
          image: project_img_4
        },
        {
          title: "Lahore Greens",
          price: "₨ 22,00,000",
          location: "Model Town, Lahore",
          image: project_img_5
        },
        {
          title: "The Luxury Enclave",
          price: "₨ 35,00,000",
          location: "Johar Town, Lahore",
          image: project_img_6
        }      
    
  ];

  export const testimonialsData = [
    {
        name: "Ahmed Khan",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Ahmed Khan",
        rating: 5,
        text: "Their knowledge of the Lahore market is second to none. They guided me through every step, from finding the right location to sealing the deal. Truly a top-notch experience!"
    },
    {
        name: "Sara Ali",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Sara Ali",
        rating: 4,
        text: "They have a deep understanding of the local trends in Lahore, which made a huge difference in finding the perfect property for my needs. Excellent service and very professional!"
    },
    {
        name: "Usman Ahmed",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of Usman Ahmed",
        rating: 5,
        text: "Thanks to their expertise in Lahore's real estate market, we found the perfect investment opportunity. They were attentive, reliable, and made the whole process seamless."
    }
];
