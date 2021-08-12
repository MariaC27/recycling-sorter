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
            <h1>Recycling Sorter</h1>
            <h2>
              MIT SureStart Program
              Team 13 Final Project
            </h2>
            <p>upload an image below and our model will analyze it to determine which type of 
              recyclable it is (if it is recyclable). after classifying which type of recyling the item is,
              the end goal is to have a garbage bin or garbage truck sort the item accordingly. this
              facilitates recycling from the public, as they are not required to sort items themselves,
              and makes things easier for the recycling companies as the items can be automatically sorted
              by the model.
            </p>

            <script src="https://anvil.works/embed.js" async></script>
            <iframe className="anvil" data-anvil-embed src="https://KQMAGRBRPASIOOAM.anvil.app/L6W5CCGZBZOHCGJUCZZ3ECB7"></iframe>
        
          </header>
        </div>
      );
    }

}

export default App;
