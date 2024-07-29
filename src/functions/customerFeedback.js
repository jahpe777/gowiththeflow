import img1 from "../logo/customer1.jpg";
import img2 from "../logo/customer2.jpg";
import img3 from "../logo/customer3.jpg";
import customer from "../functions/customer";

export const feedback = [
  {
    image: img1,
    alt: "customer one",
    message: `${customer[0].name} was fantastic!!..polite, efficient, neat and extremely profession plus he’s a nice guy to boot!. He did an excellent job for us and we are very happy with our new drain system!`,
    name: "Jason Bloomberg",
    prof: "Chief Accountant",
  },
  {
    image: img2,
    alt: "customer two",
    message: `${customer[0].name}  is the best plumbing company I’ve ever worked with.
        Their technicians are knowledgeable, professional, and reliable. We were extremely pleased with the results
        and would highly recommend them to anyone in need of plumbing services.`,
    name: "Sarah Fargo",
    prof: "Secretary",
  },
  {
    image: img3,
    alt: "customer three",
    message:
      "I thank you so much for the work that was done here, and you always do such a good job for such a reasonable price. Thanks for moving my appointment sooner as well, I believe that prevented some damage to the flooring.",
    name: "Bianca Torres",
    prof: "Sales Manager",
  },
];
