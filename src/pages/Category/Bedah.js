import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button,
  Spinner,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { connect } from "react-redux";
import { getListBedah, searchListBedah } from "actions/BedahAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListBedah extends Component {
  componentDidMount() {
    this.props.dispatch(getListBedah());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListBedah(e.target.value));
  };

  render() {
    const { getListBedahError, getListBedahLoading, getListBedahResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Bedah</CardTitle>
            </CardHeader>
            <form className="mt-4">
              <InputGroup className="no-border">
                <Input onChange={this.handleSearch} placeholder="Kata Kunci" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </Row>

          <Table responsive>
            <thead className="text-primary">
              <tr></tr>
            </thead>

            <tbody>
              {getListBedahResult ? (
                Object.keys(getListBedahResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListBedahResult[key].image}
                            width="100"
                            alt={getListBedahResult[key].title}
                          />
                        <td>{getListBedahResult[key].senin}</td>
                        <td>{getListBedahResult[key].selasa}</td>
                        <td>{getListBedahResult[key].rabu}</td>
                        <td>{getListBedahResult[key].kamis}</td>
                        <td>{getListBedahResult[key].jumat}</td>
                        <td>{getListBedahResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListBedahResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListBedahLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListBedahError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListBedahError}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="3" align="center">
                    Data Kosong
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getListBedahLoading: state.BedahReducer.getListBedahLoading,
  getListBedahResult: state.BedahReducer.getListBedahResult,
  getListBedahError: state.BedahReducer.getListBedahError,

  deleteBedahLoading: state.BedahReducer.deleteBedahLoading,
  deleteBedahResult: state.BedahReducer.deleteBedahResult,
  deleteBedahError: state.BedahReducer.deleteBedahError,
});

export default connect(mapStateToProps, null)(ListBedah);
