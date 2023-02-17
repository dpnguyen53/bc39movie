import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithCard from "./WithCard";

const WrapperCard = WithCard(NhanVien);

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <button className="btn-bg-red">Test</button>
        <WrapperCard />
      </div>
    );
  }
}
