import Link from "next/link";

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <Link href={to}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default CustomLink;