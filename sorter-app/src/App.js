import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{

    state = {
      //at first, no file is selected
      selectedFile: null,
      //source: null,
    };
    
    // on file select (from the pop up)
    onFileChange = event => {
      // update state
      this.setState({ selectedFile: event.target.files[0] });
    };

    // on file upload (click upload button)
    onFileUpload = () => {
  
      const formData = new FormData();
    
      // update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // log details
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("https://10.0.2.2:3000/", formData);
    };

    // conditional render based on whether file was chosen
    fileData = () => {
    
      if (this.state.selectedFile) {
        // axios
        // .get(
        //   'api/uploadfile',
        //   { responseType: 'arraybuffer' },
        // )
        // .then(response => {
        //   const base64 = btoa(
        //     new Uint8Array(response.data).reduce(
        //       (data, byte) => data + String.fromCharCode(byte),
        //       '',
        //     ),
        //   );
        //   this.setState({ source: "data:;base64," + base64 });
        //   console.log(this.state.source);
        // });
         
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>             
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
            {/*<img src={this.state.source} alt="file"/>*/}
          </div>
        );
      } else {

        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    render(){
      return (
        <div className="App">
          <header className="App-header">
            <h2>Recycling Sorter</h2>
            <h3>
            Deep Learning Track Team 13 Final Project
              </h3>
              <h3>
              MIT SureStart Program 2021
              
            </h3>
            <p>Upload an image below and our model will analyze it to determine which type of 
              recyclable it is (if it is recyclable). Your image will fed directly to the model that we developed
              and the model's classification will be displayed on the screen. This website is just a demo 
              of the software; the goal is to use this software as part of a physical device that can be used in offices 
              and schools to automatically sort types of recycling.
            </p>

            <p>Please note that this model runs at about 70% accuracy, so there occasionally may be errors. If 
              you would like to upload another image, please refresh the page and then upload the other image.
            </p>

            <script src="https://anvil.works/embed.js" async></script>
            <iframe className="anvil" data-anvil-embed src="https://KQMAGRBRPASIOOAM.anvil.app/L6W5CCGZBZOHCGJUCZZ3ECB7"></iframe>
          </header>
        </div>
      );
    }

}

export default App;
