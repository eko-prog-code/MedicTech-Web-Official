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
import { getListJadwal, searchListJadwal } from "actions/JadwalAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListJadwal extends Component {
  componentDidMount() {
    this.props.dispatch(getListJadwal());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListJadwal(e.target.value));
  };

  render() {
    const { getListJadwalError, getListJadwalLoading, getListJadwalResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Anak</CardTitle>
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
              {getListJadwalResult ? (
                Object.keys(getListJadwalResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListJadwalResult[key].image}
                            width="100"
                            alt={getListJadwalResult[key].title}
                          />
                        <td>{getListJadwalResult[key].senin}</td>
                        <td>{getListJadwalResult[key].selasa}</td>
                        <td>{getListJadwalResult[key].rabu}</td>
                        <td>{getListJadwalResult[key].kamis}</td>
                        <td>{getListJadwalResult[key].jumat}</td>
                        <td>{getListJadwalResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListJadwalResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListJadwalLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListJadwalError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListJadwalError}
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
  getListJadwalLoading: state.JadwalReducer.getListJadwalLoading,
  getListJadwalResult: state.JadwalReducer.getListJadwalResult,
  getListJadwalError: state.JadwalReducer.getListJadwalError,

  deleteJadwalLoading: state.JadwalReducer.deleteJadwalLoading,
  deleteJadwalResult: state.JadwalReducer.deleteJadwalResult,
  deleteJadwalError: state.JadwalReducer.deleteJadwalError,
});

export default connect(mapStateToProps, null)(ListJadwal);
