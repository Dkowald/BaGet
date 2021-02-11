import * as React from 'react';

interface IAboutState {
}

class About extends React.Component<{}, IAboutState> {

  private baseUrl: string;
  private serviceIndexUrl: string;
  private publishUrl: string;

  constructor(props: {}) {
    super(props);

    const pathEnd = window.location.href.indexOf("/about");

    this.baseUrl = window.location.href.substring(0, pathEnd);
    this.serviceIndexUrl = this.baseUrl + "/v3/index.json";
    this.publishUrl = this.baseUrl + "/api/v2/package";
  }

  public render() {
    return (
      <div className="col-sm-12">
        <h1>About</h1>
        <hr className="breadcrumb-divider" />
        <p>
          This is a custom built version of 

          <a href="https://github.com/loic-sharma/BaGet">
            <span>BaGet</span>
           </a>
          
          using my own 
          
          <a href="https://github.com/Dkowald/BaGet/tree/kwd/development">
            <span>fork</span>
          </a>
        </p>
        
        <p>
          Original 
          <a href="https://loic-sharma.github.io/BaGet/" target="_blank" rel="noopener noreferrer">
             <span>Documentation</span>
         </a>
        </p>
        
      </div>
    );
  }
}

export default About;