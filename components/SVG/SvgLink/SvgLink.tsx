import Link from "next/link";
import { Component } from "react";

export interface SvgLinkProps {
  href: string;
  newTab?: boolean;
  className?: string;
  onClick?: () => any;
}

export default class SvgLink extends Component<SvgLinkProps> {
  constructor(props: SvgLinkProps) {
    super(props);
  }

  render() {
    return (
      <Link href={this.props.href} passHref>
        <a
          onClick={this.props.onClick}  
          className={`
            ${this.props.className}
            select-none
          `}
          target={
            (this.props.newTab)
            ? "_blank"
            : "_self"
          }
        >
          {this.props.children}
        </a>
      </Link>
    );
  }

}