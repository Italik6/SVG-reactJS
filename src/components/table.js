import React, { Component } from "react";

const API = "http://www.mocky.io/v2/5bc5b8e23300004b000212f5";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      images: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(res => res.text())
      .then(res => this.modifyData(res));
  }

  modifyData(res) {
    const response = res
      .replace(/{|}|\[|]|"|"|:|(name)|(img)|\s/g, "")
      .split(",");

    const names = [],
      imagesArr = [];

    for (let i = 0; i < response.length; i++) {
      if ((i + 2) % 2 === 0) {
        names.push(response[i]);
      } else {
        imagesArr.push(response[i]);
      }
    }

    names.pop();
    const images = imagesArr.map(image => {
      return image.substring(0, image.length - 1);
    });

    this.setState({ names: names, images: images, isLoading: false });
  }

  render() {
    const { names, images, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <table>
        <tbody>
          <tr>
            {names.map(name => (
              <td key={name}>{name}</td>
            ))}
          </tr>
          <tr>
            {images.map(image => (
              <td key={image}>{image}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
