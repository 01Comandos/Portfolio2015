import CompanyLogo from "../CompanyLogo/CompanyLogo";
import styles from "./Companies.module.css";

const companiesList = [
  {
    height: 34,
    width: 123,
    name: "Truora",
    logo: "/images/truora.svg",
    yc: true,
    fortune: false,
  },
  {
    height: 30,
    width: 143,
    name: "mipOS",
    logo: "/images/mip-os.svg",
    yc: true,
    fortune: false,
  },
  {
    height: 37,
    width: 174,
    name: "Rebaja Tus Cuentas",
    logo: "/images/rtc.svg",
    yc: false,
    fortune: true,
  },
  {
    height: 30,
    width: 116,
    name: "Kriptos",
    logo: "/images/kriptos.svg",
    yc: false,
    fortune: false,
  },
  {
    height: 36,
    width: 86,
    name: "Rappi",
    logo: "/images/rappi.png",
    yc: true,
    fortune: false,
  },
  {
    height: 30,
    width: 117,
    name: "Check.pe",
    logo: "/images/check-pe.png",
    yc: false,
    fortune: false,
  },
];

const Companies = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Incredible startups that rely on Comandos</h3>
    <div className={styles.logosContainer}>
      {companiesList.map((company) => (
        <CompanyLogo
          height={company.height}
          width={company.width}
          isFortune={company.fortune}
          isYC={company.yc}
          name={company.name}
          logo={company.logo}
        />
      ))}
    </div>
  </div>
);

export default Companies;
