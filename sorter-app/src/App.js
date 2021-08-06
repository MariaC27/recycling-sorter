import { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component{

    state = {
      //at first, no file is selected
      selectedFile: null
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
      axios.post("api/uploadfile", formData);
    };

    // conditional render based on whether file was chosen
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>             
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
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
              recyclable it is (if it is recyclable)
            </p>

            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
            {this.fileData()}
          </header>
        </div>
      );
    }

}

export default App;
