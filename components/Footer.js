import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center h-32 flex items-center justify-center">
      <p className="text-xl text-gray-800">
        Copyright &copy; 2023{" "}
        <Link
          className="font-bold"
          href="https://t.me/QayumovPahlavon"
          target="_blank"
        >
          QayumovPahlavon
        </Link>
        . All Right Reversed
      </p>
    </div>
  );
};

export default Footer;
