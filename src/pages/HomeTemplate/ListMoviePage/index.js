import React, { Component } from "react";
import axios from "axios";

export default class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      data: null,
      error: null,
    });

    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg",
      },
    })
      .then((result) => {
        this.setState({
          loading: false,
          data: result.data,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          data: null,
          error: error,
        });
      });
  }

  render() {
    return <div>ListMoviePage</div>;
  }
}
