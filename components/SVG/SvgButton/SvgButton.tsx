import { Component } from "react";

export interface SvgButtonProps {
  className?: string;
  onClick?: () => any;
}

export default class SvgButton extends Component<SvgButtonProps> {
  constructor(props: SvgButtonProps) {
    super(props);
  }

  render() {
    return (
      <button 
        onClick={this.props.onClick}  
        className={`
          ${this.props.className}
          select-none
        `}
      >
        {this.props.children}
      </button>
    );
  }

}